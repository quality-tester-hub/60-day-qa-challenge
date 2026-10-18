# Day 48 — Pixabay search and public profile exploratory testing

**Target:** [Pixabay](https://pixabay.com/)  
**Session date:** October 18, 2026  
**Testing style:** Logged-out public search, browser network inspection, and public creator profile review

## Objective and scope

Submit a normal public search, inspect first-party API/network responses, and open a public creator profile linked from the results. No account was used and no private profile data was accessed.

The requested URL modification to obtain admin authentication was **not attempted**. Changing authorization state to access admin functionality or private data would be an unauthorized privilege-escalation attempt. This session was limited to public pages and ordinary unauthenticated requests.

## Findings

| ID | Finding | Severity / priority | Status | Report |
| --- | --- | --- | --- | --- |
| BUG-01 | The search field clips most of the current query at an 807 px viewport on the search results page. | Low / P3 | Reproduced; the full value remains in the field and results load. | [Bug report](./Defects_&_Bugreports/01-Search-Query-Clipped-at-Tablet-Width.md) |

No API error defect was found during the tested search or public profile visits. Search and profile API/fetch/XHR responses were HTTP 200, and no API request failures were observed. See the [network observation record](./Evidence/01-Pixabay-Network-Observations.md).

## Execution log

| Check | Action | Observation | Result |
| --- | --- | --- | --- |
| Public search | Submitted `mountains` using the homepage search field. | The browser navigated to `/images/search/mountains/`; the results page loaded with 95 image-result links. The first-party `/autocomplete/` requests and search document returned HTTP 200. | Search succeeded; no API errors observed. |
| Search-field presentation | Inspected the search field at multiple widths after results loaded. | At 807 CSS px, the search input is 43 px wide with the 9-character value `mountains`; the value's rendered scroll width is 90 px, and only its beginning is visible. At 1024 px, the input is 244 px and the query fits. | BUG-01 reproduced at 807 px. |
| Public creator profile | Opened the public `lin2015` profile linked from a search result. | The profile title and public creator details loaded. 12 fetch and 3 XHR responses returned HTTP 200; no API errors or failed requests were observed. | Public profile loaded; no API error observed. |

## Evidence

- [Search results screenshot](./Evidence/01-Pixabay-Mountains-Search.png)
- [Public creator profile screenshot](./Evidence/02-Public-Creator-Profile.png)
- [API/network observation record](./Evidence/01-Pixabay-Network-Observations.md)

The tested profile is a public contributor profile, not an authenticated personal profile. The logged-out sign-in, follow, upload, and account-edit workflows were not exercised.