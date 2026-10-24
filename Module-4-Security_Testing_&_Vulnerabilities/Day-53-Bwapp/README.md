# Day 53 — bWAPP

**Session date:** October 24, 2026  
**Page tested:** [bWAPP download page](http://www.itsecgames.com/download.htm)  
**Status:** One UI bug observed and documented.

## Bug — Download page overflows a narrow viewport and obscures content

**Severity:** Low  
**Type:** Responsive layout / content visibility

At a browser viewport of 688 × 491 CSS pixels, the page document measured 1260 pixels wide while the available document width was 673 pixels. The page therefore has horizontal overflow: the bee-box download description is cut off at the right edge unless the user scrolls sideways. A footer bar also overlays the lower part of the visible description.

**Steps to reproduce**

1. Open the download page in a browser.
2. Set or use a narrow viewport (observed at 688 × 491 CSS pixels).
3. Observe the horizontal scrollbar, clipped text at the right edge, and footer overlapping the content.

**Expected:** The page should adapt to the viewport, keep text readable without horizontal scrolling, and keep the footer from covering page content.  
**Actual:** The content is wider than the viewport and partly obscured.

## Evidence

- [Screenshot showing clipped text, horizontal scrollbar, and footer overlap](./day-53-download-page-ui.png)
- Browser measurements: `innerWidth=688`, `innerHeight=491`, `documentElement.clientWidth=673`, `documentElement.scrollWidth=1260`. The screenshot was captured from this same page in the browser.

This is a UI/layout bug on the public download page, not a confirmed security vulnerability in the bWAPP training application. No attack payloads or form submissions were used.
