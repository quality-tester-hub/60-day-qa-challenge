# Bug Report: Item Details Page Uses Multiple H1 Headings

## Summary

The item details page exposes seven `H1` headings, including the item title twice and section labels such as “DOWNLOAD OPTIONS” and “IN COLLECTIONS”. This creates a misleading heading outline for screen-reader users and other tools that use heading levels to understand page structure.

## Environment

- URL: `https://archive.org/details/Apollo11Footage`
- Browser: Chromium-based browser
- Viewport: 390 × 844 CSS pixels
- Tested: 2026-10-15

## Steps to Reproduce

1. Open the item page above.
2. Inspect the page with an accessibility tree or enumerate its heading elements.
3. Review the page’s `H1` headings.

## Actual Result

Seven `H1` headings are exposed:

- Apollo 11 footage
- Share or Embed This Item
- Flag this item for
- Apollo 11 footage
- DOWNLOAD OPTIONS
- IN COLLECTIONS
- SIMILAR ITEMS (based on metadata)

The item title is duplicated, and multiple non-title sections are marked as top-level headings.

## Expected Result

The page should have one top-level `H1` for the item title. Subsequent page sections should use an appropriate lower heading level while retaining a logical hierarchy.

## Severity / Priority

- Severity: Low — accessibility and document-structure issue; the item page remains usable.
- Priority: P3

## Evidence

See [`Evidence/02-Item Details Has Multiple H1 Headings.json`](../Evidence/02-Item Details Has Multiple H1 Headings.json).
