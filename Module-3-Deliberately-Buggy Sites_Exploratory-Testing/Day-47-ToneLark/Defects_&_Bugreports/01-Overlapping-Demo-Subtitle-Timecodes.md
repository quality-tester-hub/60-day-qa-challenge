# Bug Report: Homepage Demo Contains Overlapping Subtitle Timecodes

## Summary

The sample transcript on ToneLark's public homepage contains two consecutive cue pairs whose displayed time ranges overlap. This contradicts the page's claim that it provides accurately timed subtitles and can cause adjacent caption text to be displayed at the same time.

## Environment

- URL: `https://tonelark.com/`
- Browser: Chromium
- Viewport: 900 × 760 CSS pixels
- Tested: October 18, 2026
- Session: Logged out; public homepage only

## Steps to Reproduce

1. Open the public ToneLark homepage without signing in.
2. Scroll to the sample transcript beside the demo player.
3. Compare the time ranges for consecutive transcript cues 23 and 24.
4. Repeat for cues 35 and 36.

## Actual Result

Two consecutive cue pairs overlap:

| Cue pair | Earlier cue ends | Next cue starts | Overlap |
| --- | --- | --- | --- |
| 23 → 24 | 00:00:56.755 | 00:00:56.040 | 715 ms |
| 35 → 36 | 00:01:22.525 | 00:01:22.340 | 185 ms |

For cue 23 → 24, the text changes from “This was observed using instruments attached to the” to “Keck telescope in Hawaii.” For cue 35 → 36, it changes from “to estimate that the rings will be gone” to “in three hundred million years.” In both cases, the next cue starts before the previous cue's end time.

## Expected Result

Consecutive cues for these continuous phrases should not have overlapping time ranges unless the transcript intentionally represents simultaneous speech. The next cue should begin at or after the prior cue's end.

## Impact

Low. The issues are in the homepage sample rather than a user's uploaded transcript, but overlapping captions can briefly obscure the reading order and undermine confidence in the advertised timing accuracy.

## Severity / Priority

- Severity: Low — sample-content timing defect.
- Priority: P3

## Evidence

- [Screenshot of cues 23–25](../Evidence/01-Overlapping-Demo-Subtitle-Timecodes.png)
- [Short video of the displayed transcript](../Evidence/01-Overlapping-Demo-Subtitle-Timecodes.webm)
- [Screenshot of cues 35–37](../Evidence/03-Overlapping-Demo-Subtitle-Cues-35-36.png)

## Scope Notes

The sample transcript on the public homepage was inspected while logged out. No account, uploaded media, or other users' data was accessed.
