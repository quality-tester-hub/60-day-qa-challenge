# Day 46 — Kaggle public UI exploratory testing

**Target:** [Kaggle Competitions](https://www.kaggle.com/competitions)  
**Session date:** October 16, 2026  
**Testing style:** Logged-out, read-only responsive UI inspection

## Objective and scope

Inspect the public Kaggle Competitions page at narrow mobile widths for visible layout and text-presentation issues. The page was viewed without signing in. No competition was entered, no search was submitted, and no account or other user's data was accessed.

## Finding

| ID | Finding | Severity / priority | Status | Report |
| --- | --- | --- | --- | --- |
| BUG-01 | “Search competitions” placeholder is clipped in the search field at a 320 px viewport. | Low / P3 | Reproduced; the full placeholder fits at 390 px. | [Bug report](./Defects_&_Bugreports/01-Search-Placeholder-Clipped-on-Mobile.md) |

## Session record

| Check | Action | Observation | Result |
| --- | --- | --- | --- |
| Responsive layout | Inspected the public Competitions page at 390 px and 320 px viewport widths. | The document remained within the viewport width. In the 320 × 720 screenshot, the search input is approximately 126 px wide while its “Search competitions” placeholder measures about 136 px and is visibly clipped without an ellipsis. At 390 px, the input is approximately 186 px wide and the placeholder fits. | BUG-01 reproduced at 320 px; screenshot captured. |

The input remains identifiable in the browser's accessibility tree. This is a minor visual usability issue; search behavior was not tested. See the [bug report](./Defects_&_Bugreports/01-Search-Placeholder-Clipped-on-Mobile.md) and [screenshot evidence](./Evidence/01-Search-Placeholder-Clipped-on-Mobile.png).