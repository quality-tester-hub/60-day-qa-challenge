# Day 59 Evidence — Empty Password Accepted by the App Password Gate

- **Target:** DVIA-v2, intentionally vulnerable iOS training app
- **Upstream repository:** [prateek147/DVIA-v2](https://github.com/prateek147/DVIA-v2)
- **Pinned revision:** [`96466ab85569dbcd37c69b2d15d22ff666f57031`](https://github.com/prateek147/DVIA-v2/tree/96466ab85569dbcd37c69b2d15d22ff666f57031)
- **Source file:** [`BrokenCryptographyDetailsViewController.swift`, lines 39–53](https://github.com/prateek147/DVIA-v2/blob/96466ab85569dbcd37c69b2d15d22ff666f57031/DVIA-v2/DVIA-v2/Vulnerabilities/Broken%20Cryptography/Controller/BrokenCryptographyDetailsViewController.swift#L39-L53)
- **Assessment date:** October 30, 2026

## Source observation

The initial password-entry path checks whether the text-field value is `nil`, then proceeds to encrypt and save the value and mark the user as logged in. An empty text field provides an empty string rather than `nil`, so that condition does not reject it. On a later entry, the controller compares the entered value with the decrypted saved value, allowing the same empty string to match.

## Expected and observed behavior

- **Expected:** Reject an empty password before saving it or entering the authenticated state.
- **Observed in source:** The only initial-input check described above is a `nil` check; no empty-string rejection occurs before the save and login-state update.

## Validation and limitations

- The upstream project was cloned from GitHub at the pinned revision.
- The app built successfully for the iOS Simulator SDK using Xcode 27.1 and `IPHONEOS_DEPLOYMENT_TARGET=15.0`.
- The host has no installed iOS Simulator runtime or available simulator devices. An iOS runtime download did not progress beyond preparation and was stopped.
- The app was not installed or launched. This finding is source-evidenced, not runtime-reproduced.
- Severity: **Medium**. Confidence: **9/10** for the source interpretation.
