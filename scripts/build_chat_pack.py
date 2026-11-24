#!/usr/bin/env python3
"""Build the chat edition: one Markdown file that any chatbot can use (ChatGPT, Gemini, Claude, Le Chat,
an open-weight model in a local chat app), with no skill support and no code execution needed.

usage: python scripts/build_chat_pack.py [VERSION]   (default: the plugin version)
writes dist/chat/visual-explainers-for-chat.md

The file holds a short header that tells the model how to answer in a chat (it cannot run the scripts,
so it writes the page directly and loads the engine from a CDN link pinned to VERSION), followed by the
skills' own instructions and the engine's API reference, with their frontmatter removed.
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
version = sys.argv[1] if len(sys.argv) > 1 else json.loads((ROOT / ".claude-plugin" / "plugin.json").read_text())["version"]
KIT_URL = f"https://cdn.jsdelivr.net/gh/k-sandhu/visual-explainer-skills@v{version}/skills/explainer-kit/assets/kit.js"
PLAY_URL = "https://k-sandhu.github.io/visual-explainer-skills/play.html"

HEADER = f"""# Visual explainers: instructions for a chat assistant (v{version})

These instructions turn a finding, a process or a dataset into an animated or interactive explainer: one
HTML page that a newcomer can follow on a laptop or a phone. They come from a set of agent skills
(https://github.com/k-sandhu/visual-explainer-skills). Follow them whenever the user asks you to
visualize, animate or explain something visually, or to make an interactive lesson, figure or GIF.

## How to work in a chat

The skills below mention scripts (`scaffold.py`, `render_check.py`, `check_theme.py`, `record.py`). In a
chat you cannot run them. Skip them, write the page yourself in the format below, and do their checks by
reading your own code: text at least 14 units, everything 12 units inside the viewBox, no label crossing
another, every number computed from `DATA`, controls that never move.

Reply in this order:

1. A few lines: the one-sentence message, the reader, the form you chose and why, and a numbered
   storyboard (one line per step, starting with the opening for newcomers). If the user is there and the
   request is unclear, ask one question first instead.
2. One complete HTML page in a single html code block, in exactly this shape:

```html
<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Two to four words</title>
<style>:root{{color-scheme:dark}}html,body{{margin:0;background:#141517}}body{{padding:16px;min-height:100vh;box-sizing:border-box}}</style>
</head><body>
<div id="x"></div>
<script src="{KIT_URL}"></script>
<script>
/* ===== SCENE ===== */
const {{P, T, F, line, rect, ellipse, arrow, curve, poly, C}} = K;
const DATA = {{ /* the numbers, copied from the user's data, with a comment saying where each comes from */ }};
K.stepper({{ root: '#x', style: 'chalkboard', viewBox: [380, 300], title: '...', intro: {{ ... }}, legend: [...], steps: [ ... ] }});
</script>
</body></html>
```

   Page background by style: chalkboard `#141517` (dark), paper `#EFE9DC`, editorial `#F2F2EE`,
   blueprint `#0A1826` (dark); set `color-scheme` to match. Use `K.stepper`, `K.player` or `K.figure`
   as the form calls for. Never write your own engine or copy the engine's code: the script tag above
   loads it, and the API reference below lists everything it offers. Always give an `intro`.
3. One or two lines on how to view it: "If your chat shows a preview of HTML code, open it. Otherwise
   copy the code into {PLAY_URL}, which runs it and can save it as a single file that works offline."
   Then say what you checked by reading the code and what you could not check without a browser.

If the user wants a file to keep, or the chat cannot load scripts from the link, the play page above
makes a self-contained copy with the engine inlined.

---

"""


def body(path):
    s = path.read_text(encoding="utf-8")
    s = re.sub(r"\A---\n.*?\n---\n", "", s, flags=re.S)
    return s.strip() + "\n"


parts = [HEADER]
order = ["explainer-director", "stepper-lesson", "system-replay", "explorable-model", "unit-story", "predict-reveal", "explainer-kit"]
for name in order:
    parts.append(f"\n\n<!-- skill: {name} -->\n\n" + body(ROOT / "skills" / name / "SKILL.md"))
for ref in ["api.md", "craft.md", "themes.md"]:
    parts.append(f"\n\n<!-- explainer-kit reference: {ref} -->\n\n" + body(ROOT / "skills" / "explainer-kit" / "references" / ref))
out = ROOT / "dist" / "chat" / "visual-explainers-for-chat.md"
out.parent.mkdir(parents=True, exist_ok=True)
text = "".join(parts)
out.write_text(text, encoding="utf-8")
print(f"wrote {out} ({len(text) // 1024} KB, about {len(text) // 4:,} tokens), engine pinned to v{version}")
