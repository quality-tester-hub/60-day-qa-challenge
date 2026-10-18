# Bug Report: Expanded Menu Button Still Announces “Open menu”

## Summary

At a mobile-width viewport, opening the homepage navigation exposes the menu and sets the trigger's `aria-expanded` state to `true`, but the trigger's accessible name remains “Open menu.” The name does not reflect that the menu is already open and that activating the control will close it.

## Environment

- URL: `https://tonelark.com/`
- Browser: Chromium
- Viewport: 720 × 780 CSS pixels
- Tested: October 18, 2026
- Session: Logged out; public homepage only

## Steps to Reproduce

1. Open the public ToneLark homepage without signing in.
2. Set the viewport to 720 × 780 CSS pixels.
3. Activate the menu button in the page header.
4. Inspect the expanded navigation and the menu button's accessible name and `aria-expanded` state.

## Actual Result

The navigation links are visible and the button has `aria-expanded="true"`, but its accessible name remains “Open menu.”

## Expected Result

When the menu is expanded, the control should not announce an action that suggests it is already closed. For example, the accessible name could change to “Close menu,” or use a neutral name such as “Navigation menu” while `aria-expanded` communicates the current state.

## Impact

Low. Assistive-technology users may hear the control described as an instruction to open a menu that is already expanded, making the toggle's next action less clear. The expanded state itself is exposed correctly.

## Severity / Priority

- Severity: Low — accessibility/usability issue.
- Priority: P3

## Evidence

- [Screenshot of the expanded menu](../Evidence/02-Expanded-Menu-Name-Mismatch.png)
- [Video of opening and closing the menu](../Evidence/02-Expanded-Menu-Interaction.webm)

The accessible name and expanded state were verified from the rendered button: `aria-label="Open menu"` and `aria-expanded="true"` while the navigation links were visible.

## Scope Notes

Only the public homepage navigation was tested. No account or private data was accessed.
