# BUG-02 — Unrelated Sela theme copy appears in the footer

**Status:** Reproduced  
**Severity:** Low  
**Priority:** P3  
**Area:** Footer / site content  
**Target:** [Tag: expore](https://shescharmingsite.wordpress.com/tag/expore/)
**Evidence:** [Footer screenshot](../Evidence/02-Unrelated-Theme-Copy.jpeg); [live-page observations](../Evidence/01-Live-Page-Observations.md#bug-02--unrelated-sela-theme-copy)

## User impact

As a visitor, I expect the site's About section to describe She's Charming or its author. Unrelated theme promotional text is confusing and can make the blog look like an unfinished template.

## Steps to reproduce

1. Open `https://shescharmingsite.wordpress.com/tag/expore/`.
2. Scroll to the footer.
3. Read the section headed **“About Sela.”**

## Expected result

The About section contains information relevant to She's Charming or its author.

## Actual result

The footer shows an **“About Sela”** heading and unrelated theme copy, including: **“Sela is not your typical business theme. Vibrant, bold, and clean, with lots of space for large images, it’s a perfect canvas to tell your company’s story.”**

## Evidence excerpt

Read-only GET of the target page returned HTTP 200. The response contains:

```html
<h3>About Sela</h3>
<p>Sela is not your typical business theme. Vibrant, bold, and clean, with lots of space for large images, it’s a perfect canvas to tell your company’s story. Sela is responsive, which means it adapts to any screen, providing your visitors with a great browsing experience on any device.</p>
```

The [footer screenshot](../Evidence/02-Unrelated-Theme-Copy.jpeg) visually captures the “About Sela” heading and unrelated theme copy. The shared evidence note also records the page and HTML excerpt.

## Environment

Observed in the integrated browser on macOS on October 14, 2026. A read-only request to the same public page returned HTTP 200.
