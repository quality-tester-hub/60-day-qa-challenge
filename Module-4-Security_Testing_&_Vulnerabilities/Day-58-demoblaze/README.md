# Day 58 — DemoBlaze Store

**Session date:** October 29, 2026  
**Target:** [DemoBlaze Product Store](https://demoblaze.com/)  
**Status:** Four requested categories are documented: UI, API integration, backend catalog data, and a passive HTTPS hardening finding. No exploit was attempted.

## Objective and scope

The requested review calls for one bug each in UI, API, backend, and security. This session used normal storefront navigation and the read-only API requests that those actions initiate. No account was created, form submitted, order placed, data changed, direct custom API request sent, or security control bypass attempted.

## Confirmed findings

### UI-01 — Sign-up navigation is clipped on a narrow viewport

- **Area:** Global navigation at 320 CSS px viewport width
- **Expected:** All primary navigation actions should remain visible and reachable at a narrow viewport.
- **Observed:** The Sign up link extends from x=293 to x=339 at a 320 px viewport; its rightmost 19 px are outside the viewport.
- **Evidence:** See the [320 px screenshot](./Evidence/Day-58-Mobile-320px.png) and measurements in the [evidence log](./Evidence/Day-58-Read-Only-Evidence.md).

### UI-02 — Product image links have no accessible name

- **Area:** Home page product cards
- **Expected:** Each link should have an accessible name that identifies its destination.
- **Observed:** All nine rendered product-image links inspected had an empty image `alt` attribute and no link text or `aria-label`. The linked images therefore provide no accessible name, even though a separate product-title link is present in each card.
- **Impact:** Screen-reader users may encounter unnamed links while navigating the product cards, making the purpose of those image links unclear.
- **Evidence:** See the [DOM and HTTP evidence log](./Evidence/Day-58-Read-Only-Evidence.md) and [product catalog screenshot](./Evidence/Day-58-Product-Catalog.png). DOM evidence establishes the missing accessible names; the screenshot provides visual context.

### UI-03 — Login inputs lack programmatically associated labels

- **Area:** Log in dialog
- **Expected:** Username and password labels should be associated with their inputs so assistive technology can identify the fields.
- **Observed:** The dialog displays “Username:” and “Password:” text, but neither label is associated with its corresponding input. Both inputs have no associated `<label>`, placeholder, `aria-label`, or `aria-labelledby`.
- **Evidence:** See the [login dialog screenshot](./Evidence/Day-58-Login-Modal.png) and DOM checks in the [evidence log](./Evidence/Day-58-Read-Only-Evidence.md).

### API-01 — Pagination loses the selected category

- **Area:** Storefront category filter and pagination API integration
- **Expected:** After selecting Laptops, pagination should retain the selected category or remain unavailable if there is no further page of laptops.
- **Observed:** Clicking Laptops first displays six notebook products. Clicking Next then displays a mixed page containing four notebooks and two monitors. The normal `/bycat` response contains only notebooks, but the subsequent `/pagination` request includes only the global cursor (`{"id":"9"}`) and returns all catalog categories.
- **Impact:** Users browsing a category can be shown unrelated products after moving to the next page.
- **Evidence:** Captured from the normal category and Next controls; see the [mixed-category screenshot](./Evidence/Day-58-Category-Pagination-Mix.png) and request/response notes in the [evidence log](./Evidence/Day-58-Read-Only-Evidence.md). No custom API request was sent.

### Backend-01 — Samsung Galaxy S7 record references the Galaxy S6 image

- **Area:** Product catalog record for ID 4
- **Expected:** The product image returned for Samsung Galaxy S7 should depict the Galaxy S7, not a different model.
- **Observed:** The ordinary product-detail view for “Samsung galaxy s7” renders `imgs/galaxy_s6.jpg`. The normal catalog `/view` response for ID 4 also returns that image path.
- **Impact:** Shoppers are shown the wrong model image for the selected product.
- **Evidence:** See the [Samsung Galaxy S7 product screenshot](./Evidence/Day-58-Samsung-Galaxy-S7-Detail.png) and the `/view` response details in the [evidence log](./Evidence/Day-58-Read-Only-Evidence.md).

### SEC-01 — HTTPS response omits Strict-Transport-Security

- **Area:** Public HTTPS response and HTTP redirect
- **Expected:** HTTPS responses should set a suitable `Strict-Transport-Security` policy to instruct browsers to use HTTPS for future visits.
- **Observed:** A normal request to `http://demoblaze.com/` returned a `302` redirect to HTTPS, but the resulting HTTPS response did not include `Strict-Transport-Security`.
- **Security impact:** Without an HSTS policy, browsers that have not already learned a secure transport policy may rely on the initial HTTP redirect before switching to HTTPS. This leaves an opportunity for downgrade attacks on that first cleartext request.
- **Assessment:** Confirmed response-configuration weakness. No downgrade or man-in-the-middle scenario was attempted; the finding does not claim an exploit was demonstrated.
- **Evidence:** See the HTTP→HTTPS status and response-header record in the [evidence log](./Evidence/Day-58-Read-Only-Evidence.md).

Other common headers were also absent in the sampled response, but they are not separately reported as vulnerabilities here. No exploit, authentication bypass, crafted input, or modified request was attempted.
