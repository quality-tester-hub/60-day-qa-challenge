# Day 54 — Google Gruyere Security Assessment

**Session date:** October 25, 2026  
**Target:** Google Gruyere (Authorized Codelab Training Instance)  
**Status:** Assessment observations recorded; limitations are documented.

## Objective

Perform a structured, hands-on assessment of selected security controls in an isolated Google Gruyere training instance, focusing on stored XSS, CSRF, and access control / IDOR.

## Scope and environment

- **Application:** Google Gruyere Code Lab (isolated instance)
- **Testing approach:** Manual browser interaction and local request/response inspection
- **Boundaries:** Testing was restricted to the authorized training instance and synthetic accounts. No external services or third-party accounts were targeted.

## Summary of findings

| Vulnerability category | Observation / test result | Status |
| :--- | :--- | :--- |
| **Stored XSS** | The tested snippet script was rendered inside a `<blocked>` element; it did not execute. | Not reproduced in this input context |
| **CSRF** | A snippet-removal control used GET and had no visible anti-CSRF token in its link. | Control weakness observed; cross-origin behavior not tested |
| **IDOR / access control** | A read-only request from synthetic Account A returned Account B's private canary field. | Unauthorized read access confirmed in the tested profile path |

## Evidence references

- [Stored XSS test log](./Evidence/01-stored-xss-test.log)
- [CSRF control review log](./Evidence/02-csrf-control-review.log)
- [IDOR access control log](./Evidence/03-idor-access-control.log)
- [Vulnerability assessment report](./Defects_&_Bugreports/01-gruyere-vulnerability-assessment.md)

## Local validation

Run `npm run validate:day54` from the repository root to check the expected folder contents, required evidence details, and report/README references. The same command runs in the [Day 54 Evidence Validation workflow](../../.github/workflows/day54-evidence-validation.yml) on relevant pushes and pull requests.
