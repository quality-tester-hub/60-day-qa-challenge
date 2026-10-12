# Day 42 — FakeRESTApi exploratory API testing

**Target:** [FakeRESTApi Swagger UI](https://fakerestapi.azurewebsites.net/index.html)

**API base URL:** `https://fakerestapi.azurewebsites.net/api/v1`
**Session date:** October 12, 2026

## Where to start

The landing page is a Swagger UI, not an ad-supported learning catalog. Expand a resource group (for example, **Authors**) to see its operations and schemas. Use **GET** requests first; the API is public, so avoid sending write requests unless you intend to change remote test data.

## Finding

Four defects were recorded during read-only API exploration:

| ID | Finding | Report | Evidence |
| --- | --- | --- | --- |
| BUG-01 | Authors detail reads and collection sizes vary across requests | [Report](./Defects_&_Bugreports/01-Authors-read-inconsistency.md) | [HTTP log](./Evidence/01-authors-read-inconsistency.log) |
| BUG-02 | Activity 1 `dueDate` changes on each GET | [Report](./Defects_&_Bugreports/02-Activity-due-date-changes-on-read.md) | [HTTP log](./Evidence/02-activity-due-date-changes-on-read.log) |
| BUG-03 | Book 1 `publishDate` changes on each GET | [Report](./Defects_&_Bugreports/03-Book-publish-date-changes-on-read.md) | [HTTP log](./Evidence/03-book-publish-date-changes-on-read.log) |
| BUG-04 | CoverPhoto 1 returns a URI with a raw space despite `format: uri` | [Report](./Defects_&_Bugreports/04-CoverPhoto-url-is-not-a-valid-uri.md) | [Schema and client log](./Evidence/04-cover-photo-invalid-uri.log) |

## Reproduction

1. Open the Swagger UI and expand **Authors**.
2. Send `GET /api/v1/Authors/606` repeatedly without sending any POST, PUT, or DELETE requests.
3. Compare each response's HTTP status and body.
4. Repeat `GET /api/v1/Authors` and compare the collection size.

In the recorded run, the same detail request returned both HTTP 200 and HTTP 404; successful responses also contained different `idBook` values. Collection sizes varied across sequential GETs.

Repeated requests for Activity 1 and Book 1 returned different date fields without writes. A CoverPhoto response returned a `url` string that fails when passed unchanged to a strict URI client.

## AI-assisted exploratory testing

Use AI to help derive checks from the published API contract, but verify every finding against live responses and keep the request and response evidence:

> Review the OpenAPI document at `https://fakerestapi.azurewebsites.net/swagger/v1/swagger.json`. Suggest read-only exploratory checks for consistency between collection, detail, and relationship endpoints. For each check, state the contract assumption, request, expected response shape, and evidence to capture. Do not label behavior a defect unless the contract or a repeatable invariant supports that conclusion. Do not make POST, PUT, or DELETE requests.

