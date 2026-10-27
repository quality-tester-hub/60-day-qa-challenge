# Day 56 - New Exploratory Findings

Date observed: 2026-10-27
Target: `http://zero.webappsecurity.com`
Scope: Read-only review of the demo banking UI. No transfer or payment was submitted.

This is a new evidence record. The existing Postman collection and environment were not changed. Capture a Loom video separately for the findings below; no video is embedded here.

## Finding 1: Login redirect fails with an SSL protocol error

- **Page:** `http://zero.webappsecurity.com/login.html`
- **Steps:** Sign in using the demo credentials configured in the existing Day 56 environment.
- **Expected:** Complete sign-in and arrive at the authenticated banking application without a browser-level error.
- **Observed:** The browser attempted to navigate to `https://zero.webappsecurity.com/auth/accept-certs.html?user_token=…` and displayed `ERR_SSL_VERSION_OR_CIPHER_MISMATCH`. Navigating directly to Account Summary afterward showed the authenticated username, indicating the login was accepted but the post-login redirect failed.
- **Evidence observed:** Browser navigation failure reported for the HTTPS `auth/accept-certs.html` request, followed by an authenticated Account Summary page at `http://zero.webappsecurity.com/bank/account-summary.html`.
- **Loom capture:** Show the sign-in action and browser error. Keep credentials and the `user_token` out of the recording.

## Finding 2: Find Transactions returns results with all filters blank

- **Page:** `http://zero.webappsecurity.com/bank/account-activity.html`
- **Steps:** Open **Find Transactions**, leave Description, both Dates fields, both Amounts fields, and Type at their defaults, then click **Find**.
- **Expected:** The page's instruction says, “Complete at least one field below and click Find”; based on that instruction, an empty search should be blocked or explain that a filter is required.
- **Observed:** The page displayed transaction rows despite all search fields being blank. The first visible results included `2012-09-06 ONLINE TRANSFER REF #UKKSDRQG6L` with a `984.3` deposit, `2012-09-05 OFFICE SUPPLY` with a `50` withdrawal, and `2012-09-01 ONLINE TRANSFER REF #UKKSDRQG6L` with a `1000` deposit.
- **Evidence observed:** Browser accessibility snapshot showed the blank Find Transactions form before clicking and the three transaction rows afterward.
- **Loom capture:** Show the blank search fields, the instruction, click **Find**, and the returned rows.
- **Triage note:** This is a UI behavior/instruction mismatch. Confirm whether an empty search is intended to show all transactions before classifying it as a product defect.
