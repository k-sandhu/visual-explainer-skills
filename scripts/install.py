#!/usr/bin/env python3
"""Copy the seven skills into the folder your coding agent reads skills from.

usage: python scripts/install.py TOOL [--project DIR] [--dry-run]

TOOL is one of the names below. Without --project the skills go in your user folder and every project
sees them; with --project they go in that project only. Existing copies of these seven skills are
replaced; nothing else in the folder is touched.

The folders come from each tool's own documentation, checked on 2026-11-24. Several tools also read
another tool's folder (Cursor and Copilot read ~/.claude/skills, for example); one copy is enough.
"""
import argparse
import pathlib
import shutil
import sys

HOME = pathlib.Path.home()
# tool: (user-level folder, project-level folder relative to the project root)
TARGETS = {
    "claude-code": (HOME / ".claude" / "skills", ".claude/skills"),
    "codex": (HOME / ".agents" / "skills", ".agents/skills"),
    "gemini-cli": (HOME / ".gemini" / "skills", ".gemini/skills"),
    "antigravity": (HOME / ".gemini" / "config" / "skills", ".agents/skills"),
    "cursor": (HOME / ".cursor" / "skills", ".cursor/skills"),
    "copilot": (HOME / ".copilot" / "skills", ".github/skills"),
    "opencode": (HOME / ".config" / "opencode" / "skills", ".opencode/skills"),
    "agents": (HOME / ".agents" / "skills", ".agents/skills"),   # the shared folder several tools read
}

ROOT = pathlib.Path(__file__).resolve().parent.parent


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("tool", choices=sorted(TARGETS))
    ap.add_argument("--project", type=pathlib.Path, help="install into this project instead of your user folder")
    ap.add_argument("--dry-run", action="store_true", help="print what would be copied and stop")
    a = ap.parse_args()
    user_dir, proj_rel = TARGETS[a.tool]
    dest = (a.project / proj_rel) if a.project else user_dir
    skills = sorted(p for p in (ROOT / "skills").iterdir() if (p / "SKILL.md").exists())
    if not skills:
        sys.exit("no skills found next to this script; run it from a copy of the repository")
    for s in skills:
        target = dest / s.name
        print(f"{'would copy' if a.dry_run else 'copy'} {s.name} -> {target}")
        if a.dry_run:
            continue
        if target.exists():
            shutil.rmtree(target)
        shutil.copytree(s, target, ignore=shutil.ignore_patterns("__pycache__", "qa_*"))
    if not a.dry_run:
        print(f"\n{len(skills)} skills installed in {dest}. Start a new session so the tool picks them up.")
        print("For the checks and GIF recording: pip install playwright pillow && playwright install chromium")


if __name__ == "__main__":
    main()
