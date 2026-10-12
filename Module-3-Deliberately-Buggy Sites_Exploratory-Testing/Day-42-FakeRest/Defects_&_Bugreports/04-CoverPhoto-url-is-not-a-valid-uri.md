# BUG-04 — Cover photo URL contains an unescaped space

## Summary

**Title:** [API / Contract Validation] `GET /api/v1/CoverPhotos/1` returns a `url` that violates the documented URI format

**User perspective:** As a client consuming cover-photo records, I expect the `url` property to be a usable URI as declared by the API schema. An unescaped space causes strict URI clients to reject the value before requesting the image.

## Environment

| Field | Value |
| --- | --- |
| Service | FakeRESTApi |
| Endpoint | `GET https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos/1` |
| Schema | `CoverPhoto.url`: string with OpenAPI `format: uri` |
| Date | October 12, 2026 |
| Client | `curl` |

## Steps to reproduce

1. Read the `CoverPhoto` schema in `/swagger/v1/swagger.json` and confirm `url` is declared with `format: uri`.
2. Send `GET /api/v1/CoverPhotos/1`.
3. Copy the returned `url` value unchanged into a URI client such as `curl`.

## Actual result

The API returned HTTP 200 and this value:

```text
https://placeholdit.imgix.net/~text?txtsize=33&txt=Book 1&w=250&h=350
```

The raw value contains an unescaped space in the query parameter. Passing it unchanged to `curl` failed with `(3) URL rejected: Malformed input to a URL function` (HTTP status `000`).

## Expected result

The response should contain a valid URI conforming to the declared `format: uri`; encode the space in the query value (for example, as `%20`) or return a URL without spaces.

## Impact

Strict clients cannot use the provided cover-photo URL as returned, despite the API returning a successful resource response.

**Severity:** Low

**Priority:** P3 — Low

## Evidence

- [Schema, response, and client error log](../Evidence/04-cover-photo-invalid-uri.log)
