# Pixabay Search and Profile Network Observations

**Date:** October 18, 2026  
**Browser:** Chromium  
**Scope:** Logged-out public search for `mountains` and one public creator profile

## Search

| Request | Type | Result |
| --- | --- | --- |
| `GET /images/search/mountains/` | Document | HTTP 200 |
| `GET /autocomplete/?lang=en&search_term=mountains…` | Fetch | HTTP 200 (observed twice during entry/navigation) |
| `GET /bootstrap/<site-config>.json` | Fetch | HTTP 200 |
| `GET /preflight/` | Fetch | HTTP 200 |

Across the captured search navigation, 13 fetch and 4 XHR responses were HTTP 200. There were no HTTP error responses in the captured first-party search API requests and no failed requests. The search results page displayed image results.

## Public creator profile

The public creator page [`/users/lin2015-1447903/`](https://pixabay.com/users/lin2015-1447903/) loaded with its public profile content and image results. The captured page activity included 12 fetch and 3 XHR responses, all HTTP 200, with no API HTTP errors or failed requests.

## Assessment and limitations

No API error was reproduced; therefore no API-error bug is claimed. Browser-cancelled media requests from unrelated homepage activity are not counted as API errors. No authentication, admin, private API, or access-control bypass was tested.
