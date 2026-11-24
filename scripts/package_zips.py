#!/usr/bin/env python3
"""Zip each skill for upload to a chat app that accepts skills (Claude, ChatGPT, Gemini).

Each zip holds the skill folder itself at its root, as those apps expect. Chat apps cap a skill's
description much lower than coding agents do (200 characters on Claude, checked 2026-11-24), so the
SKILL.md inside each zip gets the short description below; the folders in skills/ keep the long ones.
usage: python scripts/package_zips.py [OUT_DIR]   (default: dist/)
"""
import pathlib
import sys
import re
import zipfile

SHORT = {
    "explainer-director": "Plan an animated or interactive explainer first: find the message, write a plain opening, pick the form, storyboard one idea per step. Use for any request to visualize or explain visually.",
    "explainer-kit": "Engine, styles and checks for animated SVG explainers in one HTML file: step lessons, timeline replays, figures, sliders. Use to build any explainer planned with explainer-director.",
    "stepper-lesson": "Build a step-by-step animated lesson with Next, captions and one or two hands-on steps, for explaining how something works one idea at a time.",
    "system-replay": "Replay a recorded or simulated run of several agents or services on a scrubbable timeline, to show who waited, what flowed where and what broke.",
    "explorable-model": "Build a live what-if model the reader steers with a slider or toggle, with linked views and the break-even marked, to show how an outcome depends on a choice.",
    "unit-story": "Show every item as a dot that moves between groups, with small-sample uncertainty, to explain how many items landed where and how sure we can be.",
    "predict-reveal": "Ask the reader to commit a guess, then animate the real data against it, for a number most people would get wrong.",
}

ROOT = pathlib.Path(__file__).resolve().parent.parent
out = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "dist"
out.mkdir(parents=True, exist_ok=True)
for skill in sorted((ROOT / "skills").iterdir()):
    if not (skill / "SKILL.md").exists():
        continue
    target = out / f"{skill.name}.zip"
    with zipfile.ZipFile(target, "w", zipfile.ZIP_DEFLATED) as z:
        for f in sorted(skill.rglob("*")):
            if f.is_file() and "__pycache__" not in f.parts and not any(p.startswith("qa_") for p in f.parts):
                arc = f.relative_to(skill.parent).as_posix()
                if f.name == "SKILL.md" and skill.name in SHORT:
                    text = re.sub(r"^description: .*$", "description: " + SHORT[skill.name], f.read_text(encoding="utf-8"), count=1, flags=re.M)
                    z.writestr(arc, text)
                else:
                    z.write(f, arc)
    print(f"wrote {target} ({target.stat().st_size // 1024} KB)")

# One combined skill, visual-explainers.zip, for chat apps where each skill is a separate upload. It holds
# the kit's scripts/ and assets/ at its root (so the kit's own paths still work), the kit's references, and
# each other skill's instructions as references/<skill>.md. Its SKILL.md routes the model to them.
COMBINED_DESC = ("Plan, build and check animated or interactive explainers (lessons, replays, what-if models, "
                 "dot charts, guess-then-reveal) as one HTML file. Use for any request to visualize or explain visually.")
ROUTER = """---
name: visual-explainers
description: {desc}
---

# Visual explainers

Turn a finding, a process or a dataset into an animated or interactive explainer: one HTML page a newcomer
can follow on a laptop or a phone. This one skill bundles seven that are published separately for coding
agents; the names below refer to the files in `references/`.

1. Read `references/explainer-director.md` first. It finds the message, writes the opening for a newcomer,
   picks the form and storyboards one idea per step.
2. Read the form file it points you to: `references/stepper-lesson.md`, `references/system-replay.md`,
   `references/explorable-model.md`, `references/unit-story.md` or `references/predict-reveal.md`.
3. Build with the engine: read `references/explainer-kit.md` (workflow and rules) and
   `references/api.md` (every function). Where those files say `explainer-kit` or "this skill's folder",
   they mean the root of this skill: `scripts/scaffold.py`, `scripts/render_check.py`, `assets/kit.js`.
4. If you can run Python, use `scripts/scaffold.py` to start the page and `scripts/render_check.py` to
   check it (it needs Playwright with Chromium; if they cannot be installed here, say so and check by
   reading the code instead). If you cannot run code, write the page directly: paste the full text of
   `assets/kit.js` into the first `<script>` of the page, then the scene in a second `<script>`.
5. Give the user the HTML file, say what you checked and what you could not.
"""
target = out / "visual-explainers.zip"
with zipfile.ZipFile(target, "w", zipfile.ZIP_DEFLATED) as z:
    base = "visual-explainers/"
    z.writestr(base + "SKILL.md", ROUTER.format(desc=COMBINED_DESC))
    kit = ROOT / "skills" / "explainer-kit"
    for f in sorted(kit.rglob("*")):
        rel = f.relative_to(kit).as_posix()
        if f.is_file() and "__pycache__" not in f.parts and not any(p.startswith("qa_") for p in f.parts) and rel != "SKILL.md":
            z.write(f, base + rel)
    for skill in sorted((ROOT / "skills").iterdir()):
        if (skill / "SKILL.md").exists():
            text = re.sub(r"\A---\n.*?\n---\n", "", (skill / "SKILL.md").read_text(encoding="utf-8"), flags=re.S)
            z.writestr(base + f"references/{skill.name}.md", text.strip() + "\n")
print(f"wrote {target} ({target.stat().st_size // 1024} KB, one skill for chat apps)")
assert len(COMBINED_DESC) <= 200, len(COMBINED_DESC)
