# BUG-01 — Authors detail reads are inconsistent

## Summary

**Title:** [API / Data Consistency] `GET /api/v1/Authors/606` alternates between different records and `404` on repeated read-only requests

**User perspective:** As a developer or QA engineer using the FakeRESTApi to test client behavior, I expect repeated reads of the same resource to return a consistent result unless the resource has been changed. Unstable responses make application behavior and automated tests unreliable.

## Environment

| Field | Value |
| --- | --- |
| Service | FakeRESTApi |
| Swagger UI | `https://fakerestapi.azurewebsites.net/index.html` |
| Endpoint | `GET https://fakerestapi.azurewebsites.net/api/v1/Authors/606` |
| Date | October 12, 2026 (UTC timestamps in evidence log) |
| Client | `curl`, sequential requests |
| Data changes during test | None; only GET requests were sent |

## Steps to reproduce

1. Send `GET /api/v1/Authors/606` repeatedly.
2. Do not send POST, PUT, or DELETE requests between calls.
3. Compare the status code and response body from each call.
4. Optionally, repeat `GET /api/v1/Authors` and compare the returned collection size.

## Actual result

In the captured run, ten consecutive detail requests returned:

- Four `200` responses, with successful bodies reporting different `idBook` values (`197`, `200`, `198`, and `200`).
- Six `404 Not Found` responses for the same ID, without any writes between requests.

Eight consecutive Authors collection reads all returned `200`, but the array sizes varied from `589` to `613`.

See [01-authors-read-inconsistency.log](../Evidence/01-authors-read-inconsistency.log) for timestamped request summaries and response bodies.

## Expected result

Without a resource mutation, repeated GET requests for the same ID should consistently return the same resource and status. Collection reads should not return different seeded datasets across immediately repeated requests unless data changed; if variation is intentional, it should be documented and isolated from the detail endpoint behavior.

## Impact

Clients and test suites can receive different records or a false `404` for the same ID on successive reads. This makes the API unsuitable as a predictable practice target for lookup, relationship, and contract tests.

**Severity:** Medium

**Priority:** P2 — Normal

## Evidence

- [Timestamped HTTP request log](../Evidence/01-authors-read-inconsistency.log)

The log contains no credentials or write requests. The investigation identifies the externally observable inconsistency; it does not establish the server-side cause.
