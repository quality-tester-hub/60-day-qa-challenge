# CrazyGames Exploratory Observations

**Date:** October 20, 2026  
**Browser:** Chromium  
**Session:** Logged out  
**Primary URL:** `https://www.crazygames.com/`  
**Game pages:** `https://www.crazygames.com/game/bloxdhop-io`, `https://www.crazygames.com/game/moto-x3m`

## Mobile global header

At a 375 × 812 CSS-pixel viewport on the Bloxd.io page:

| Measurement | Observation |
| --- | --- |
| Viewport width | 375 px |
| Document scroll width | 673 px |
| Global header right section | x=160 to x=396 px |
| Log in button | x=328 to x=396 px |
| Portion of the Log in button beyond the viewport | 21 px |

The header controls are clipped at the viewport's right edge. The document's excess width also permits horizontal scrolling; the responsive issue is visible before scrolling.

The [375 px browser screenshot](./02-Mobile-Header-Overflow-375px.png) shows the right side of the header cut off at the viewport edge.

## Header icon-button accessible names

At a 1200 × 900 CSS-pixel viewport, the rendered Friends and My games controls had these relevant DOM properties:

```text
Friends button:
  aria-label: absent
  title: absent
  icon: aria-hidden="true"
  text child "Friends": computed display: none

My games button:
  aria-label: absent
  title: absent
  icon: aria-hidden="true"
  text child "My games": computed display: none
```

The text children are not available as accessible names because they are `display: none`; the icon children are explicitly hidden from assistive technology.

## Search and game-page exploration

The homepage search overlay accepted `bloxd.io` and displayed a Bloxd.io result linking to its CrazyGames game page. The game page loaded the embedded Bloxd.io lobby and displayed a welcome-back prompt. “Continue as guest” was attempted, but the prompt remained in this browser run.

The Moto X3M page was also opened. Its embedded canvas remained on “LOADING...” after waiting and attempting a click and a Space key press. These game-runtime observations were recorded as inconclusive and excluded from the bug reports because environment-specific limitations could not be ruled out.

## Scope and limitations

These observations cover the public portal header, search suggestions, and the Bloxd.io and Moto X3M game entry pages. No account was created, no purchase was attempted, and no gameplay outcome was used to support the reported findings.
