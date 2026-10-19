# Day 49 — YTUltra YouTube Video Analyzer exploratory testing

**Target:** [YTUltra YouTube Video Analyzer](https://www.ytultra.com/en/youtube-video-analyzer/)  
**Session date:** October 19, 2026  
**Environment:** Chromium, logged out  
**Testing style:** Responsive layout, form-label, and disclosure accessibility exploration

## Objective and scope

Review the public analyzer page for responsive behavior and accessible interaction patterns. No account was created, and no video was submitted or downloaded.

## Findings

| ID | Finding | Severity / priority | Status | Report |
| --- | --- | --- | --- | --- |
| BUG-01 | The desktop navigation overflows horizontally at the tested tablet widths of 768, 800, and 820 px. | Low / P3 | Reproduced at all three widths. | [Bug report](./Defects_&_Bugreports/01-Responsive-Header-Overflows-at-Tablet-Width.md) |
| BUG-02 | The analyzer URL input has no persistent explicit label. | Low / P3 | No associated label, `aria-label`, or title was present. | [Bug report](./Defects_&_Bugreports/02-Analyzer-URL-Input-Lacks-Programmatic-Label.md) |
| BUG-03 | FAQ disclosure buttons do not expose their expanded/collapsed state. | Low / P3 | Reproduced on the first FAQ disclosure. | [Bug report](./Defects_&_Bugreports/03-FAQ-Disclosure-State-Not-Exposed.md) |

## Execution log

| Check | Action | Observation | Result |
| --- | --- | --- | --- |
| Responsive header | Checked viewports of 375, 390, 767, 768, 800, 820, 900, 960, 1023, and 1024 CSS px. | At 768, 800, and 820 px the document width was 831, 833, and 834 px; the “Get Started” button was clipped at the right edge. At 767 and 900 px, no horizontal overflow was observed. | BUG-01 reproduced. |
| Analyzer URL input | Inspected the `input[type="url"]` and its naming attributes. | The input only has the placeholder “Paste a YouTube URL or video ID...”; it has zero associated labels and no `aria-label` or `title`. | BUG-02 reproduced. |
| FAQ disclosure | Opened “What exactly does the Video Analyzer look at?” and inspected the button state. | The answer becomes visible, but the button has no `aria-expanded` or `aria-controls` attribute. | BUG-03 reproduced. |

## Evidence

- [Browser observation record with viewport measurements and DOM states](./Evidence/01-YTUltra-Exploratory-Observations.md)
- [Screenshot showing the clipped header action at tablet width](./Evidence/02-Responsive-Header-Overflow-800px.png)

## Project structure

```text
day-49-ytultra/
├── Defects_&_Bugreports/
│   ├── 01-Responsive-Header-Overflows-at-Tablet-Width.md
│   ├── 02-Analyzer-URL-Input-Lacks-Programmatic-Label.md
│   └── 03-FAQ-Disclosure-State-Not-Exposed.md
├── Evidence/
│   ├── 01-YTUltra-Exploratory-Observations.md
│   └── 02-Responsive-Header-Overflow-800px.png
└── README.md
```

## Scope notes

Findings apply to the public analyzer page observed on October 19, 2026. The analyzer submission, sign-in, and account workflows were not tested.

## Next milestone

Tomorrow, October 20, 2026 (Day 50), is the final day planned for Module 3. The next session is intended to wrap up the module and update the main portfolio README.