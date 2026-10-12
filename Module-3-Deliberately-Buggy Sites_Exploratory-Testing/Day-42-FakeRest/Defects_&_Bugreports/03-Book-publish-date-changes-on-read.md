# BUG-03 — Book publication date changes on repeated GET

## Summary

**Title:** [API / Data Consistency] `GET /api/v1/Books/1` changes `publishDate` on every read

**User perspective:** As a client displaying book catalog metadata, I expect a book's publication date to describe a fixed event. Changing that date on refresh gives users and downstream systems inconsistent catalog data.

## Environment

| Field | Value |
| --- | --- |
| Service | FakeRESTApi |
| Endpoint | `GET https://fakerestapi.azurewebsites.net/api/v1/Books/1` |
| Date | October 12, 2026 (UTC timestamps in evidence log) |
| Client | `curl`, sequential requests |
| Data changes during test | None; only GET requests were sent |

## Steps to reproduce

1. Send `GET /api/v1/Books/1` several times in succession.
2. Do not send POST, PUT, or DELETE requests between calls.
3. Compare the `publishDate` values in the response bodies.

## Actual result

All five captured requests returned HTTP 200 for Book 1, but each response contained a different `publishDate`. In the captured sequence, it advanced from `2026-10-11T13:49:04.35385+00:00` to `2026-10-11T13:49:08.5242884+00:00`.

## Expected result

Repeated GET requests for an unchanged Book should return the same publication date. A publication date should not be recalculated from the time of each request.

## Impact

Catalog views and client-side tests receive unstable metadata for an unchanged book. Date-based sorting, caching, and assertions can produce inconsistent results.

**Severity:** Medium

**Priority:** P2 — Normal

## Evidence

- [Timestamped repeated-read log](../Evidence/03-book-publish-date-changes-on-read.log)
