# Day 44 — She's Charming Site Exploratory Testing

**Target:** [Tag: expore](https://shescharmingsite.wordpress.com/tag/expore/)  
**Session date:** October 14, 2026  
**Testing style:** Manual exploratory testing; read-only browsing

## Objective

Explore whether the blog archive presents recognizable, site-specific branding and supporting information to a visitor. No comments, forms, account actions, or external sign-ups were submitted.

## Findings

| ID | Finding | Severity | Status |
| --- | --- | --- | --- |
| BUG-01 | Generic “Site Title” placeholder is used as the site header and browser page title. | Low | [Report](./Defects_&_Bugreports/01-Generic-Site-Title.md) · Reproduced |
| BUG-02 | Footer About section contains unrelated Sela WordPress theme marketing copy. | Low | [Report](./Defects_&_Bugreports/02-Unrelated-Theme-Copy.md) · Reproduced |

Evidence for both findings: [live-page evidence note](./Evidence/01-Live-Page-Observations.md). BUG-02 also has a [footer screenshot](./Evidence/02-Unrelated-Theme-Copy.jpeg).

### BUG-01 — Generic site title placeholder is displayed

**Steps to reproduce**

1. Open `https://shescharmingsite.wordpress.com/tag/expore/`.
2. Observe the large site heading and the browser page title.

**Expected:** The header and page title identify the She's Charming blog.  
**Actual:** The header says **“Site Title”** and the browser page title is **“expore – Site Title.”**

**Impact:** Visitors do not get a meaningful site name in the page header or browser tab, making the page look unfinished and harder to identify.

### BUG-02 — Unrelated theme promotional copy appears in the About section

**Steps to reproduce**

1. Open `https://shescharmingsite.wordpress.com/tag/expore/`.
2. Scroll to the footer and find the **“About Sela”** section.

**Expected:** The About section describes She's Charming or its author.  
**Actual:** It is headed **“About Sela”** and describes the Sela business theme, including: “Sela is not your typical business theme.”

**Impact:** The footer contains template/demo copy unrelated to the blog, which can confuse visitors and undermine trust in the site's content.

## Evidence notes

Both findings were observed in the browser on October 14, 2026, on the target archive page. The same site header and footer are also present on the linked article page. The BUG-02 footer has a screenshot at `Evidence/02-Unrelated-Theme-Copy.jpeg`. Browser-reported 404 resource errors were not counted as findings because no user-visible failure was established from them.
