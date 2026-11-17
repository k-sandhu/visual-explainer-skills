# Test cases

Five requests a person might make, each with the real experiment data a correct explainer needs. They
come from notebooks in [experiment-notebooks](https://github.com/k-sandhu/experiment-notebooks): 10
(execution guardrails), 07 (subagent handoff), econ 21 (verification costs), 05 (text-to-SQL safety) and
16 (zero-shot forecasting).

Each case folder holds:

| File | What it is |
|---|---|
| `prompt.md` | Run settings, then the request exactly as the model receives it |
| `case.yaml` | The case name and what a good result looks like |
| `files/data.json` | The data the explainer must use, extracted from the notebook |
| `files/facts.md` | The key facts and numbers, with where each comes from; used by reviewers to check accuracy |
| `place-files.sh` | Copies `files/` into the run's working folder |

The layout is the one `claude plugin eval` reads. `cases.json` lists the five requests in one file, and
`skills_listing.txt` gives the skill names and descriptions for runs where the skills are read from disk
instead of installed.

To compare, run each case once with the skills and once without, from the same prompt and data, then
check each result at phone width (`skills/explainer-kit/scripts/render_check.py`) and compare the two
versions side by side without knowing which is which. The results of three rounds are in the main README.
