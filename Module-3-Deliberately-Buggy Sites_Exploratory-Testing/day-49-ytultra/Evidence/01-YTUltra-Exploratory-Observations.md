# YTUltra Analyzer Exploratory Observations

**Date:** October 19, 2026  
**Browser:** Chromium  
**URL:** `https://www.ytultra.com/en/youtube-video-analyzer/`  
**Scope:** Logged-out public page; responsive layout and accessible DOM state checks

## Responsive header measurements

The reported overflow was reproduced at three adjacent tablet widths and checked against nearby widths:

| Viewport width | Document width | Overflow | Right-edge observation |
| ---: | ---: | --- | --- |
| 375 px | 360 px | No | No element extended beyond the viewport |
| 390 px | 375 px | No | No element extended beyond the viewport |
| 767 px | 752 px | No | No element extended beyond the viewport |
| 768 px | 831 px | Yes | “Get Started” button right edge at x=831 px |
| 800 px | 833 px | Yes | “Get Started” button right edge at x=833 px |
| 820 px | 834 px | Yes | “Get Started” button right edge at x=835 px |
| 900 px | 885 px | No | No element extended beyond the viewport |
| 960 px | 945 px | No | No element extended beyond the viewport |
| 1023 px | 1008 px | No | No element extended beyond the viewport |
| 1024 px | 1009 px | No | No element extended beyond the viewport |

The page width and right edge were read from the rendered document and navigation controls at each viewport size. The overflow was limited to the tablet-width header; it was not reproduced at 767 or 900 px.

The [800 px screenshot](./02-Responsive-Header-Overflow-800px.png) shows the “Get Started” action clipped at the right edge.

## Analyzer URL input

The visible field has the placeholder `Paste a YouTube URL or video ID...`. Its DOM attributes were:

```text
type: url
associated labels: 0
aria-label: absent
title: absent
```

This confirms that the placeholder is the only explicit input prompt; the report does not claim the browser exposes no accessible name.

## FAQ disclosure

The “What exactly does the Video Analyzer look at?” button was activated, and its answer became visible. The button's outer HTML before/after activation did not contain `aria-expanded` or `aria-controls`, so the visible state change was not exposed through those disclosure attributes.

## Scope and limitations

No account was created, no video was submitted, and no video was downloaded. Findings are limited to the public analyzer page and the observed browser state on the session date.
