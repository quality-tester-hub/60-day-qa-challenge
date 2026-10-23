# Day 52 — Gin & Juice Shop

**Session date:** October 23, 2026  
**Target:** [Gin & Juice Shop](https://ginandjuice.shop/)  
**Session status:** Evidence captured; reported issues are not fully confirmed.

## Objective

Explore the login and checkout flows and record the observed results using sanitized network metadata and a screenshot.

## Findings and limitations

### Bug 1 — Login submissions return an invalid-credentials response

Two POST submissions to `/login` using synthetic test values returned HTTP 200 and displayed “Invalid username or password.” The network log records request method, path, response status, and the visible result, without storing credentials or request bodies.

These attempts used invalid synthetic values. They do **not** establish that valid username and password credentials fail, and therefore do not confirm the reported login issue for a real account.

### Bug 2 — Checkout behavior while logged out

With a product in the cart and no authenticated session, selecting **Place order** redirected to `/login?redirect=cart`. The reported “invalid” checkout error did not appear in this logged-out flow. No authenticated test session was available, and no order was submitted.

## Evidence

- [Bug 1 sanitized login network log](./Evidence/bug-01-login-network.json)
- [Bug 2 checkout observation and reproduction details](./Evidence/bug-02-checkout.json)
- [Screenshot of the logged-out checkout redirect](./Evidence/bug-02checkout-logged-out-redirect.png)

## Scope

Only the public Gin & Juice Shop site was used. Synthetic invalid login values were submitted; no valid account credentials, secrets, or purchase were used.