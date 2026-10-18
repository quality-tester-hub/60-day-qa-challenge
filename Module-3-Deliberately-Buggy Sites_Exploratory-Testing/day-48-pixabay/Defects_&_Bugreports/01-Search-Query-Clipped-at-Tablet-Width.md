# Bug Report: Search Query Is Clipped in the Results-Page Header

## Summary

After searching Pixabay for `mountains`, most of the query is clipped in the search field at an 807 CSS-pixel viewport. The full value remains in the input and the results load, but only the beginning of the query is visible, making it difficult to review or edit the current search.

## Environment

- URL: `https://pixabay.com/images/search/mountains/`
- Browser: Chromium
- Reproduction viewport: 807 × 490 CSS pixels
- Comparison viewport: 1024 CSS pixels wide
- Tested: October 18, 2026
- Session: Logged out; public search

## Steps to Reproduce

1. Open Pixabay while logged out.
2. Set the viewport to 807 CSS pixels wide.
3. Search for `mountains`.
4. Inspect the search input in the results-page header.

## Actual Result

At 807 px, the input is approximately 43 px wide while the current value has a rendered scroll width of approximately 90 px. The visible text is clipped to the start of `mountains` (shown as `mo` in the captured screenshot). The URL and results heading confirm the complete search term was submitted. At 1024 px, the 244 px input displays the query.

## Expected Result

The current query should remain readable and editable after search navigation. The results-page responsive header should allocate adequate width to the search field or otherwise provide a clear way to view the complete query.

## Impact

Low. Search itself succeeds, but users at this viewport may not be able to verify the full query before editing it.

## Severity / Priority

- Severity: Low — responsive usability issue.
- Priority: Higest P3

## Evidence

- [Screenshot of Pixabay search results and clipped query](../Evidence/01-Pixabay-Mountains-Search.png)
- [Network observation record confirming the full query and successful search request](../Evidence/01-Pixabay-Network-Observations.md)

## Scope Notes

This finding is limited to the public search-results header at the stated viewport. No account or private data was used.
