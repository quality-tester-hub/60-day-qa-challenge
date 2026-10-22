# Day 51 — OWASP Juice Shop

**Session date:** October 22, 2026

**Session status:** Logged; remaining selected challenges are tracked below.

## Objective

Review selected OWASP Juice Shop challenges in the authorized local training application at `http://localhost:3000`, recording challenge completion only when confirmed by the app.

## Scope and environment

- **Application:** OWASP Juice Shop, running locally
- **Browser:** Chromium via the integrated browser
- **Tools:** Browser UI and local HTTP request verification
- **Testing performed:** Reviewed the Score Board; completed Privacy Policy and Bonus Payload; followed the Confidential Document challenge hint within the local app and confirmed the resulting challenge status
- **Testing not performed:** No other challenge payloads were submitted; no data outside the local training application was accessed

## Challenge tracker

The Score Board showed **7 of 179 challenges solved overall** after completing Privacy Policy, Bonus Payload, and Confidential Document. Four were already marked solved before this session; the other three were completed during this session.

| Challenge | Category shown by Juice Shop | Status |
| --- | --- | --- |
| [Score Board](http://localhost:3000/#/score-board) | Miscellaneous | Solved before this session |
| DOM XSS | XSS | Solved before this session |
| Bonus Payload | XSS | **Completed** — challenge success notification displayed; Score Board marks it solved |
| Privacy Policy | Miscellaneous | **Completed** — opened the policy page in the local app and confirmed the success notification |
| Confidential Document | Sensitive Data Exposure | **Completed** — local unprotected file opened; Score Board marks it solved |
| Error Handling | Security Misconfiguration | Solved before this session |
| Exposed Metrics | Observability Failures | Solved before this session |
| Mass Dispel | Miscellaneous | Not solved at review; not attempted in this review |
| Missing Encoding | Improper Input Validation | Not solved at review; not attempted in this review |
| Outdated Allowlist | Unvalidated Redirects | Not solved at review; not attempted in this review |
| Repetitive Registration | Improper Input Validation | Not solved at review; not attempted in this review |
| Web3 Sandbox | Broken Access Control | Not solved at review; not attempted in this review |
| Zero Stars | Improper Input Validation | Not solved at review; not attempted in this review |
| Reflected XSS | XSS | Not solved at review; not attempted in this review |
| Exposed Credentials | Sensitive Data Exposure | Not solved at review; not attempted in this review |
| Login Admin | Injection | Not solved at review; not attempted in this review |
| Admin Section | Broken Access Control | Not solved at review; not attempted in this review |
| Password Strength | Broken Authentication | Not solved at review; not attempted in this review |

## Findings and limitations

- The application was reachable at the local URL. After the three challenge completions, the Score Board displayed **7/179 Challenges Solved** and marked Privacy Policy, Bonus Payload, and Confidential Document as solved.
- Four selected challenges were already marked solved before this session: Score Board, DOM XSS, Error Handling, and Exposed Metrics.
- **Privacy Policy was completed in this session.** Opening `http://localhost:3000/#/privacy-security/privacy-policy` displayed the policy and the app's success notification: “You successfully solved a challenge: Privacy Policy (Read our privacy policy.)”
- **Bonus Payload was completed in this session** in the local lab. The challenge description supplied an iframe payload for the DOM XSS challenge; submitting it through the product search flow rendered an iframe and displayed the app's “You successfully solved a challenge: Bonus Payload” notification. The Score Board then marked the challenge solved.
- **Confidential Document was completed in the local lab.** The in-app hints advised examining direct file links and noted the target file was unprotected. The About page contained a direct `ftp/legal.md` link. Following the same local file path, `/ftp/acquisitions.md` displayed a document headed “Planned Acquisitions” and identified itself as confidential. The Score Board then marked Confidential Document solved, with the total at **7/179**.
- **Security lesson:** Sensitive files placed in a directly served directory can be accessed by guessing or altering predictable URLs if the server does not enforce authorization. Store confidential material outside the public web root and require server-side authorization for every file request; do not rely on obscure paths or links not being discoverable.
- The other eleven selected challenges were not solved at the time of review. Their hints and testing paths were not investigated.

## Evidence

- [Confidential document response and reproduction notes](./Evidence/01-Confidential-Document-Observations.md)
- [Screenshot of the locally exposed document](./Evidence/01-Confidential-Document-Exposed.png)
- [Evidence for the other five solved challenges](./Evidence/02-Other-Solved-Challenges-Evidence.md)
- [Score Board screenshot showing 7/179](./Evidence/02-Scoreboard-7-of-179.png)
- [Score Board challenge solved-state screenshot](./Evidence/03-Score-Board-Solved-Card.png)

The local direct-file request returned HTTP 200 with `Content-Type: text/markdown; charset=UTF-8` and a 909-byte response. The screenshot shows the document's title and its confidential notice. The challenge status was separately checked in the Score Board, which showed **7/179** and marked Confidential Document solved. No credentials, session tokens, or external data are included in the evidence.

## Project structure

```text
Day-51-OWASP-Juiceshop/
├── Evidence/
│   ├── 01-Confidential-Document-Observations.md
│   ├── 01-Confidential-Document-Exposed.png
│   ├── 02-Other-Solved-Challenges-Evidence.md
│   ├── 02-Scoreboard-7-of-179.png
│   ├── 03-Score-Board-Solved-Card.png
│   ├── 03-DOM-XSS-Solved-Card.png
│   ├── 03-Bonus-Payload-Solved-Card.png
│   ├── 03-Privacy-Policy-Solved-Card.png
│   ├── 03-Error-Handling-Solved-Card.png
│   └── 03-Exposed-Metrics-Solved-Card.png
└── README.md
```

## Next steps

For any future challenge work, record the challenge-specific test method and observed result only after authorized verification in this local lab. Update the status and supporting evidence here without treating an attempted payload as proof of success.
