# Day 47 — ToneLark homepage exploratory testing

**Target:** [ToneLark](https://tonelark.com/)  
**Session date:** October 18, 2026  
**Testing style:** Logged-out, read-only homepage and responsive navigation inspection

## Objective and scope

Explore the public homepage's subtitle demo and mobile navigation for observable content-timing and accessibility issues. No account was created, no files were uploaded, and no private data was accessed.

## Findings

| ID | Finding | Severity / priority | Status | Report |
| --- | --- | --- | --- | --- |
| BUG-01 | Two consecutive subtitle cue pairs in the homepage demo have overlapping time ranges. | Low / P3 | Reproduced twice in the displayed transcript. | [Bug report](./Defects_&_Bugreports/01-Overlapping-Demo-Subtitle-Timecodes.md) |
| BUG-02 | The expanded mobile navigation button retains the accessible name “Open menu.” | Low / P3 | Reproduced at 720 × 780 px; `aria-expanded` is true while the menu is visible. | [Bug report](./Defects_&_Bugreports/02-Expanded-Menu-Accessible-Name.md) |

## Session record

| Check | Action | Observation | Result |
| --- | --- | --- | --- |
| Demo subtitle timing | Inspected the public homepage transcript in Chromium at a 900 × 760 px viewport. | Cue 24 starts at 00:00:56.040 while cue 23 ends at 00:00:56.755 (715 ms overlap). Cue 36 starts at 00:01:22.340 while cue 35 ends at 00:01:22.525 (185 ms overlap). | BUG-01 reproduced; both pairs are visible in the transcript. |
| Responsive navigation | Opened the homepage menu at a 720 × 780 px viewport and inspected the expanded button state. | The navigation links are visible and the trigger reports `aria-expanded="true"`, but its accessible name remains “Open menu.” | BUG-02 reproduced. |

See the [BUG-01 screenshot](./Evidence/01-Overlapping-Demo-Subtitle-Timecodes.png), [BUG-01 video](./Evidence/01-Overlapping-Demo-Subtitle-Timecodes.webm), and [second cue-pair screenshot](./Evidence/03-Overlapping-Demo-Subtitle-Cues-35-36.png). For BUG-02, see the [expanded-menu screenshot](./Evidence/02-Expanded-Menu-Name-Mismatch.png) and [menu-interaction video](./Evidence/02-Expanded-Menu-Interaction.webm).

Only the publicly accessible homepage was tested. The account, upload, transcription, and payment workflows were not exercised.