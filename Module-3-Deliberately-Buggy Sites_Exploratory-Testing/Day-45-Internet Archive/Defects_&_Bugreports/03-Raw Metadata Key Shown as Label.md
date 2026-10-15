# Bug Report: Raw Metadata Key Shown as a User-Facing Label

## Summary

The Apollo 11 item details page displays the internal metadata key `Ia_orig__runtime` as a field label. Unlike nearby labels such as “Addeddate”, “Identifier”, and “Run time”, this raw key is not presented in a readable form and wraps awkwardly on a narrow viewport.

## Environment

- URL: `https://archive.org/details/Apollo11Footage`
- Browser: Chromium-based browser
- Viewport: 390 × 844 CSS pixels
- Tested: 2026-10-15

## Steps to Reproduce

1. Open the item page above.
2. Scroll to the item’s additional metadata.
3. Inspect the labels around “Addeddate”, “Identifier”, and “Run time”.

## Actual Result

The field appears as `Ia_orig__runtime` and wraps across lines at the tested mobile-width viewport. The raw, underscored key is exposed directly to visitors.

## Expected Result

The metadata field should use a human-readable label (for example, “Original runtime”), or be omitted from the user-facing metadata list if no suitable label is available.

## Severity / Priority

- Severity: Low — confusing presentation of one metadata field.
- Priority: P3

## Evidence

See [`Evidence/03-Raw Metadata Key Shown as Label.json`](../Evidence/03-Raw Metadata Key Shown as Label.json).
