# Bug Report: Global Header Overflows a Mobile Viewport

## Summary

On the Bloxd.io game page, the global header does not fit a 375 CSS-pixel-wide mobile viewport. Its right-side controls, including the Log in button, extend beyond the viewport and are clipped unless the page is scrolled horizontally.

## Environment

- URL: `https://www.crazygames.com/game/bloxdhop-io`
- Browser: Chromium
- Viewport: 375 × 812 CSS pixels
- Tested: October 20, 2026
- Session: Logged out

## Steps to Reproduce

1. Open the Bloxd.io game page.
2. Set the viewport to 375 × 812 CSS pixels.
3. Inspect the global header's right edge.

## Actual Result

The document's scroll width is 673 px for a 375 px viewport. The header's right section spans x=160–396 px, and the Log in button spans x=328–396 px. The button's rightmost 21 px lie outside the viewport, leaving the action visibly clipped.

## Expected Result

The header should adapt to the available mobile width so that its controls remain visible and usable without horizontal page scrolling.

## Impact

Low. Users on a narrow mobile viewport cannot see the complete Log in action without horizontally scrolling the page.

## Severity / Priority

- Severity: Low — responsive usability issue.
- Priority: P3

## Evidence

- [Viewport measurements and reproduction notes](../Evidence/01-CrazyGames-Exploratory-Observations.md)
- [375 px screenshot showing the clipped header](../Evidence/02-Mobile-Header-Overflow-375px.png)

## Scope Notes

This finding was confirmed on the public Bloxd.io game page. It concerns the CrazyGames global header, not the embedded game's own layout.
