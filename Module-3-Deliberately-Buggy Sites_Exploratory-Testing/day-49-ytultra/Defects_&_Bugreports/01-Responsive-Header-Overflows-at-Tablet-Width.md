# Bug Report: Header Overflows at Tablet Widths

## Summary

The analyzer page's desktop navigation does not fit at the tested widths of 768, 800, and 820 CSS pixels. The page becomes wider than the viewport and the “Get Started” button extends past the right edge.

## Environment

- URL: `https://www.ytultra.com/en/youtube-video-analyzer/`
- Browser: Chromium
- Reproduced viewports: 768 × 900, 800 × 900, and 820 × 900 CSS pixels
- Comparison viewports: 767 × 900 and 900 × 900 CSS pixels
- Tested: October 19, 2026
- Session: Logged out; public page

## Steps to Reproduce

1. Open the YouTube Video Analyzer page.
2. Set the viewport width to 768 CSS pixels.
3. Inspect the navigation and the right edge of the page.
4. Repeat at 800 and 820 CSS pixels.

## Actual Result

The document is wider than the viewport at all three reproduced widths:

| Viewport width | Document width | Visible effect |
| ---: | ---: | --- |
| 768 px | 831 px | “Get Started” button ends at x=831 px |
| 800 px | 833 px | “Get Started” button ends at x=833 px |
| 820 px | 834 px | “Get Started” button ends at x=835 px |

The header fits at 767 and 900 px in the tested comparison runs.

## Expected Result

The header should reflow, collapse, or otherwise remain within the viewport across tablet widths. Navigation controls, including “Get Started,” should be fully visible without horizontal page scrolling.

## Impact

Low. At the affected widths, users may not see or reach the rightmost navigation action without horizontal scrolling.

## Severity / Priority

- Severity: Low — responsive layout issue.
- Priority: P3

## Evidence

- [Screenshot of the clipped “Get Started” action](../Evidence/02-Responsive-Header-Overflow-800px.png)
- [Viewport measurements and reproduced overflow observations](../Evidence/01-YTUltra-Exploratory-Observations.md)

## Scope Notes

This report covers only the public analyzer page header at the tested widths. No account or analyzer submission workflow was exercised.
