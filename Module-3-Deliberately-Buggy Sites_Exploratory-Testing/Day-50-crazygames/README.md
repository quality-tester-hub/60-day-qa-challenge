# Day 50 — CrazyGames exploratory testing

**Target:** [CrazyGames](https://www.crazygames.com/)  
**Games explored:** [Bloxd.io](https://www.crazygames.com/game/bloxdhop-io), [Moto X3M](https://www.crazygames.com/game/moto-x3m)  
**Session date:** October 20, 2026  
**Environment:** Chromium, logged out  
**Testing style:** Mobile responsive behavior, accessibility, game discovery, and embedded-game entry

## Objective and scope

Explore CrazyGames as a public game portal, including its game search, the Bloxd.io game page, mobile header behavior, and account-related icon controls. No account was created and no purchase was made.

## Findings

| ID | Finding | Severity / priority | Status | Report |
| --- | --- | --- | --- | --- |
| BUG-01 | The right side of the global header, including the Log in button, extends beyond a 375 px viewport. | Low / P3 | Reproduced on the Bloxd.io page at 375 × 812 CSS px. | [Bug report](./Defects_&_Bugreports/01-Mobile-Header-Overflows-Viewport.md) |
| BUG-02 | The Friends and My games icon buttons have no accessible names. | Medium / P2 | Reproduced at 1200 × 900 CSS px; the only text labels are `display: none` and their icons are hidden from assistive technology. | [Bug report](./Defects_&_Bugreports/02-Header-Icon-Buttons-Lack-Accessible-Names.md) |

## Execution log

| Check | Action | Observation | Result |
| --- | --- | --- | --- |
| Mobile header | Opened the Bloxd.io game page at 375 × 812 CSS px. | The header's right section ended at x=396 px and the Log in button extended from x=328 to x=396, outside the viewport. The document scroll width was 673 px. | BUG-01 reproduced. |
| Header control names | Inspected the Friends and My games buttons at 1200 × 900 CSS px. | Both buttons have no `aria-label` or `title`; their only text labels are hidden with `display: none`, while the icon elements have `aria-hidden="true"`. | BUG-02 reproduced. |
| Game discovery | Opened search and searched for `bloxd.io`. | Suggestions included Bloxd.io and a matching game link; selecting the game opened its game page. | Passed. |
| Embedded game entry | Opened Bloxd.io and tried the “Continue as guest” action on its welcome-back prompt. | The prompt remained visible during this browser run, so gameplay could not be confirmed. This observation is not reported as a defect because the embedded game runtime could not be distinguished from an environment-specific limitation. | Inconclusive; excluded from findings. |
| Second game entry | Opened the Moto X3M page and waited for its embedded game to load. | The game canvas remained on “LOADING...” and did not reach a playable state during this run. This was not reported as a defect because an environment-specific loading limitation could not be ruled out. | Inconclusive; excluded from findings. |

## Evidence

- [Browser observations, viewport measurements, and DOM evidence](./Evidence/01-CrazyGames-Exploratory-Observations.md)
- [Screenshot showing the mobile header clipped at 375 px](./Evidence/02-Mobile-Header-Overflow-375px.png)

## Project structure

```text
Day-50-crazygames/
├── Defects_&_Bugreports/
│   ├── 01-Mobile-Header-Overflows-Viewport.md
│   └── 02-Header-Icon-Buttons-Lack-Accessible-Names.md
├── Evidence/
│   ├── 01-CrazyGames-Exploratory-Observations.md
│   └── 02-Mobile-Header-Overflow-375px.png
└── README.md
```

## Module 3 wrap-up

Day 50 concludes the planned Module 3 exploratory-testing sequence. The final session documented two reproducible portal defects and preserved the embedded-game limitation as an unconfirmed observation rather than a bug report.