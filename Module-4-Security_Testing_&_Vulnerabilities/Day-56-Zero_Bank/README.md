# Day 56 — Zero Bank

**Date:** October 27, 2026
**Target:** [Zero Bank Online Banking](http://zero.webappsecurity.com/online-banking.html)
**Focus:** Exploratory testing of the online banking pages, authentication redirect, account activity search, and banking navigation.

Zero Bank identifies itself as a demonstration site, not a real banking service. The session used the demo account credentials listed in the existing Postman environment. Testing focused on observing the UI and navigation. The existing Postman collection was not run or changed during the browser exploration. No funds transfer, bill payment, payee creation, or other transaction was submitted.

## Session coverage

| Page or flow | What was checked | Result |
| --- | --- | --- |
| Online Banking landing page | Reviewed the public page and the advertised Account Summary, Account Activity, Transfer Funds, Pay Bills, My Money Map, and Online Statements features. | Feature overview loaded. |
| Sign-in | Submitted the demo login form. | The browser hit an HTTPS redirect error; see Finding 1. A direct subsequent visit to Account Summary showed the authenticated username. |
| Account Summary | Reviewed the account tables and banking navigation. | Page loaded with account balances and linked account activity. No separate defect confirmed. |
| Account Activity | Opened **Find Transactions** and clicked **Find** with all filters blank. | Transaction rows appeared despite the instruction to complete at least one field; see Finding 2. |
| Transfer Funds | Reviewed the account selectors and amount/description fields. | Both account selectors initially showed Savings. The form was not submitted, so transfer behavior was not tested. |
| Pay Bills | Reviewed **Pay Saved Payee** and **Add New Payee** forms. | Forms loaded. No payment or payee was submitted. |
| My Money Map | Reviewed the inflow/outflow totals. | Displayed inflow of $6,150.00, outflow of $2,121.00, and $4,029.00 remaining; the displayed arithmetic is consistent. |
| Online Statements | Reviewed the account selector and statement listing. | Statement history was displayed. No statement document was downloaded or opened. |

## Findings

### Finding 1 — Sign-in redirect ends in an SSL protocol error

- **Area:** Sign-in flow
- **Reproduction:** Visit `http://zero.webappsecurity.com/login.html`, sign in with the demo account, and observe the resulting navigation.
- **Expected:** The browser completes sign-in and reaches the authenticated banking application without a browser-level error.
- **Observed:** The browser attempted to navigate to `https://zero.webappsecurity.com/auth/accept-certs.html?user_token=…` and displayed `ERR_SSL_VERSION_OR_CIPHER_MISMATCH`. Navigating directly to Account Summary afterward displayed the authenticated username, suggesting that authentication succeeded but the redirect failed.
- **Evidence:** [New exploratory findings](Evidence/Day-56-New-Findings.md) records the observed error and follow-up page state.
- **Video:** Capture the sign-in action and error in Loom if video evidence is required. Do not expose credentials or the `user_token`.
- **Assessment:** Reproduced browser/navigation failure; root cause is not established.

### Finding 2 — Find Transactions returns rows with every filter blank

- **Area:** Account Activity → Find Transactions
- **Reproduction:** Visit `http://zero.webappsecurity.com/bank/account-activity.html`, open **Find Transactions**, leave Description, both Dates fields, both Amounts fields blank and Type at its default, then click **Find**.
- **Expected:** The page instructs users to “Complete at least one field below and click Find”; based on that instruction, an empty search should be blocked or explain that a filter is required.
- **Observed:** Results were displayed with all search fields blank. Visible rows included a 2012-09-06 online transfer deposit of 984.3, a 2012-09-05 Office Supply withdrawal of 50, and a 2012-09-01 online transfer deposit of 1000.
- **Evidence:** [New exploratory findings](Evidence/Day-56-New-Findings.md) records the before/after behavior and visible rows.
- **Video:** Capture the empty form, its instruction, clicking **Find**, and the resulting transaction rows.
- **Assessment:** Reproduced UI/instruction mismatch. Confirm whether an empty search is intended to show all transactions before classifying it as a product defect.

## Evidence and files

- [New exploratory findings](Evidence/Day-56-New-Findings.md) — dated observations and video-capture notes.
- [Postman collection](Evidence/Day-56-Zero-Bank-API-Tests.postman_collection.json) — existing request and assertion collection; not changed during the exploratory session.
- [Postman environment](Evidence/Day-56-Zero%20Bank%20Local%20Lab.postman_environment.json) — existing demo environment; not changed during the exploratory session.

No screenshots or videos were created for this session. Loom capture is left to the portfolio owner.