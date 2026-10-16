# Bug Report: Search Placeholder Is Clipped on a Narrow Mobile Viewport

## Summary

On the public Kaggle Competitions page, the search field's “Search competitions” placeholder is visibly clipped at a 320 CSS-pixel viewport. The text has no ellipsis or shorter responsive alternative. At 390 CSS pixels, the full placeholder fits.

## Environment

- URL: `https://www.kaggle.com/competitions`
- Browser: Chromium-based browser
- Viewport: 320 × 720 CSS pixels (reproduced at 320 × 844 as well)
- Comparison viewport: 390 CSS pixels wide
- Tested: October 16, 2026
- Session: Logged out; public page only

## Steps to Reproduce

1. Open the Kaggle Competitions page without signing in.
2. Set the viewport to 320 CSS pixels wide.
3. Locate the search field beside the **Filters** control.
4. Inspect the placeholder text.
5. Resize the viewport to 390 CSS pixels and compare.

## Actual Result

At 320 × 720 px, the search input is approximately 126 px wide, while the rendered placeholder text measures approximately 136 px. The end of “Search competitions” is clipped without an ellipsis. At 390 px wide, the input is approximately 186 px wide and the placeholder fits.

## Expected Result

The complete search hint should remain readable at narrow mobile widths, for example by using a shorter mobile placeholder or an ellipsis that clearly indicates truncation.

## Impact

Low. The search field remains identifiable, but its visible hint is incomplete on a narrow viewport. Search behavior was not tested; this report is limited to the visual issue.

## Severity / Priority

- Severity: Low — responsive visual polish/usability issue.
- Priority: P3

## Evidence

See [`Evidence/01-Search-Placeholder-Clipped-on-Mobile.png`](../Evidence/01-Search-Placeholder-Clipped-on-Mobile.png), captured on the public page at a 320 × 720 CSS-pixel viewport.

## Scope Notes

Only public page rendering was inspected. No account was used, no search was submitted, and no data belonging to other users was accessed.
