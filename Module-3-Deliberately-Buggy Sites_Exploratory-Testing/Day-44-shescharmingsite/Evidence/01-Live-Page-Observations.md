# Day 44 — Live-page evidence

**Captured:** October 14, 2026  
**Page:** [https://shescharmingsite.wordpress.com/tag/expore/](https://shescharmingsite.wordpress.com/tag/expore/)  
**Request:** Read-only GET; HTTP 200 (verified October 14, 2026)  
**Method:** Browser observation cross-checked against the returned page HTML.

## BUG-01 — Generic Site Title

The browser showed the header **“Site Title”** and page title **“expore – Site Title.”** The response HTML contains:

```text
<title>expore – Site Title</title>
<h1>Site Title</h1>
```

## BUG-02 — Unrelated Sela theme copy

The browser showed the **“About Sela”** section in the footer. A read-only GET of the target URL returned HTTP 200. The returned page HTML contains:

```html
<h3>About Sela</h3>
<p>Sela is not your typical business theme. Vibrant, bold, and clean, with lots of space for large images, it’s a perfect canvas to tell your company’s story. Sela is responsive, which means it adapts to any screen, providing your visitors with a great browsing experience on any device.</p>
```

The corresponding visual evidence is [02-Unrelated-Theme-Copy.jpeg](./02-Unrelated-Theme-Copy.jpeg), which captures the footer section. Browser-reported 404 resource errors were not used as evidence because no user-visible failure was established from them.
