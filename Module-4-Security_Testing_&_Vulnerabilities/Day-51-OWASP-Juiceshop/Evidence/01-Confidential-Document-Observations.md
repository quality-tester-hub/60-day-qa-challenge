# Confidential Document — Local Lab Evidence

**Date:** October 22, 2026  
**Target:** OWASP Juice Shop at `http://localhost:3000`  
**Challenge:** Confidential Document  
**Result:** Solved; Score Board showed 7/179 challenges solved

## Reproduction and observation

1. On the local About page (`/#/about`), observed the public “Terms of Use” link pointing to `/ftp/legal.md`.
2. Followed the challenge hint to examine direct file-delivery links and requested `/ftp/acquisitions.md` on the same local host.
3. The response displayed a Markdown document titled “Planned Acquisitions” containing a notice that it was confidential.
4. Returned to the Score Board. The Confidential Document challenge card was marked solved, and the total was 7/179.

## Request and response evidence

```http
GET /ftp/acquisitions.md HTTP/1.1
Host: localhost:3000
```

```http
HTTP/1.1 200 OK
Content-Type: text/markdown; charset=UTF-8
Content-Length: 909
```

The local request returned the file directly without a login flow. The response body is not duplicated here; the screenshot preserves the relevant visible proof without copying the full document text.

## Evidence files

- [Screenshot of direct file response](./01-Confidential-Document-Exposed.png)

## Security interpretation

This is a local training-app instance and the file is deliberately seeded challenge content. It demonstrates sensitive material served from a publicly addressable location without an authorization check. Production systems should keep confidential files outside the public web root and enforce authorization on the server for every file download.

No external target, real user, or non-lab data was accessed. No credentials or session tokens were used or recorded.
