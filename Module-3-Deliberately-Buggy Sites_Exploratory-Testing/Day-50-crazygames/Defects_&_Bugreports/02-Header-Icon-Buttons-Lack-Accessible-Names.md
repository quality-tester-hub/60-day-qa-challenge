# Bug Report: Header Icon Buttons Lack Accessible Names

## Summary

The global Friends and My games icon buttons do not expose accessible names. Their visible icon elements are hidden from assistive technology, and their text labels are removed from the accessibility tree with `display: none`.

## Environment

- URL: `https://www.crazygames.com/game/bloxdhop-io`
- Browser: Chromium
- Viewport: 1200 × 900 CSS pixels
- Tested: October 20, 2026
- Session: Logged out

## Steps to Reproduce

1. Open the Bloxd.io game page.
2. Inspect the Friends and My games header buttons in the rendered DOM.
3. Check each button for an accessible name and inspect its child elements.

## Actual Result

Both controls are icon-only to assistive technology:

- The Friends button has no `aria-label` or `title`; its `Friends` text child has computed `display: none`.
- The My games button has no `aria-label` or `title`; its `My games` text child has computed `display: none`.
- Both icon elements have `aria-hidden="true"`.

Consequently, neither button exposes the action represented by its icon to screen-reader users.

## Expected Result

Each icon button should expose a non-empty accessible name identifying its action, such as “Friends” and “My games”.

## Impact

Medium. Users of screen readers cannot identify the purpose of these focusable header controls.

## Severity / Priority

- Severity: Medium — accessibility and discoverability issue.
- Priority: P2

## Evidence

- [DOM and computed-style observations](../Evidence/01-CrazyGames-Exploratory-Observations.md)

## Scope Notes

The missing accessible names were confirmed on the global header. No account sign-in or personal data was used.
