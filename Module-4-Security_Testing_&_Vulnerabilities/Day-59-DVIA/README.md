# Day 59 — Damn Vulnerable iOS App (DVIA-v2)

**Session date:** October 30, 2026  
**Target:** [Damn Vulnerable iOS App (DVIA-v2)](https://github.com/prateek147/DVIA-v2)  
**Source revision:** [`96466ab`](https://github.com/prateek147/DVIA-v2/tree/96466ab85569dbcd37c69b2d15d22ff666f57031)  
**Status:** One non-UI password-handling issue identified from source. Simulator installation and runtime reproduction are pending; this is not reported as runtime-confirmed.

## Objective and scope

Review the intentionally vulnerable DVIA-v2 app for one non-UI bug. The source was downloaded from the upstream GitHub repository and built for the iOS Simulator with Xcode 27.1. The build succeeded after setting the legacy deployment target to the minimum supported by the installed SDK.

This Mac has no installed iOS Simulator runtime or available simulator devices. The app was therefore not installed or launched, and the reported behavior was not reproduced in a running app. No third-party target, real credentials, or external service was involved.

## Finding

### SEC-01 — Broken Cryptography password gate accepts an empty password

- **Area:** Broken Cryptography password flow
- **Expected:** Initial password setup should reject an empty password before saving it or setting the logged-in state.
- **Observed in source:** The initial-entry branch rejects a `nil` text value but does not reject an empty string before saving the password and marking the session logged in. The returning-user branch compares the entered value against the decrypted saved password, so the empty value can match.
- **Impact:** The app's password gate can be configured with an empty password, weakening the gate for anyone using this intentionally vulnerable training app.
- **Severity / confidence:** Medium / 9 of 10, based on source evidence; not runtime-confirmed.
- **Evidence:** See the [source evidence note](./Evidence/Day-59-Empty-Password-Source-Evidence.md) and the [pinned upstream controller source](https://github.com/prateek147/DVIA-v2/blob/96466ab85569dbcd37c69b2d15d22ff666f57031/DVIA-v2/DVIA-v2/Vulnerabilities/Broken%20Cryptography/Controller/BrokenCryptographyDetailsViewController.swift#L39-L53).

No UI bugs are reported for Day 59.
