#!/usr/bin/env python3
"""Zip each skill for upload to claude.ai (Settings > Capabilities > Skills).

Each zip holds the skill folder itself at its root, as claude.ai expects.
usage: python scripts/package_zips.py [OUT_DIR]   (default: dist/)
"""
import pathlib
import sys
import zipfile

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
                z.write(f, f.relative_to(skill.parent).as_posix())
    print(f"wrote {target} ({target.stat().st_size // 1024} KB)")
