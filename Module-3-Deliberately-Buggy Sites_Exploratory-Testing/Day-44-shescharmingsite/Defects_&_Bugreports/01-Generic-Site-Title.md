# BUG-01 — Generic “Site Title” placeholder is displayed

**Status:** Reproduced  
**Severity:** Low  
**Priority:** P3  
**Area:** Site branding / page title  
**Target:** [Tag: expore](https://shescharmingsite.wordpress.com/tag/expore/)
**Evidence:** [Live-page observations](../Evidence/01-Live-Page-Observations.md#bug-01--generic-site-title)

## User impact

As a visitor, I expect the site header and browser tab to identify the blog. The generic placeholder makes the site appear unfinished and makes the page harder to recognize.

## Steps to reproduce

1. Open `https://shescharmingsite.wordpress.com/tag/expore/`.
2. Observe the site header and browser page title.

## Expected result

The header and browser title identify the She's Charming site.

## Actual result

The header displays **“Site Title”** and the browser title is **“expore – Site Title.”**

## Environment

Observed in the integrated browser on macOS on October 14, 2026. A read-only request to the same public page returned HTTP 200.
