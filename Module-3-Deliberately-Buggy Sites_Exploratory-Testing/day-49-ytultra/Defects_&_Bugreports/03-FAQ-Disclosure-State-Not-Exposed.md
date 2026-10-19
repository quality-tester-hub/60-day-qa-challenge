# Bug Report: FAQ Disclosure Does Not Expose Expanded State

## Summary

The FAQ answer opens when its question button is activated, but the button does not expose its expanded/collapsed state through `aria-expanded` or identify the controlled content with `aria-controls`.

## Environment

- URL: `https://www.ytultra.com/en/youtube-video-analyzer/`
- Browser: Chromium
- Tested: October 19, 2026
- Session: Logged out; public page

## Steps to Reproduce

1. Open the YouTube Video Analyzer page and scroll to Frequently Asked Questions.
2. Activate “What exactly does the Video Analyzer look at?”
3. Inspect the question button before and after the answer opens.

## Actual Result

The answer becomes visible, but the button has no `aria-expanded` or `aria-controls` attribute. The expanded state is therefore not exposed by the disclosure control.

## Expected Result

The disclosure button should expose its current state with `aria-expanded="true"` when the answer is visible and `aria-expanded="false"` when collapsed. It should identify its controlled answer panel where appropriate.

## Impact

Low. A screen-reader user may not be told whether the FAQ answer is expanded or collapsed, making the disclosure harder to operate and understand.

## Severity / Priority

- Severity: Low — accessibility state communication issue.
- Priority: P3

## Evidence

- [FAQ before/after state observation](../Evidence/01-YTUltra-Exploratory-Observations.md)

## Scope Notes

The first FAQ disclosure on the public page was opened. No sign-in or other interactive workflow was tested.
