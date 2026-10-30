Day 60 — VAmPI API Security Testing
Overview
This project documents a hands-on API security testing exercise using VAmPI, a deliberately vulnerable API running locally.

The objective is to explore the OWASP API Security Top 10 through a Postman collection, manually inspect request and response behavior, and preserve evidence of selected findings.
Scope: Local training lab only. Do not use these requests or testing techniques against systems you do not own or have explicit permission to test.

Lab Setup
- Target: VAmPI (local vulnerable API)
- Tool: Postman
- Collection: Day-60-VAmPI-OWASP-Top10
- Environment: Day-60-VAmPI-Local-Lab
- Base URL: http://localhost:5000 (configured through the {{baseUrl}} environment variable)
The collection uses environment variables such as baseUrl, token, username, and password to avoid hardcoding configuration values in individual requests.
Repository Contents
Day-60-VAmPI/
├── Collection/
│   └── Day-60-VAmPI-OWASP-Top10.postman_collection.json
├── Environment/
│   └── Day-60-VAmPI-Local-Lab.postman_environment.json
├── Evidence/
│   ├── API2 — Broken Authentication.json
│   ├── API3-Security-Test-Report.html
│   └── API4 — Unrestricted Resource Consumption.json
└── README.md
Selected Vulnerability Areas
The Postman collection contains requests mapped across all 10 OWASP API Top 10 categories. This evidence folder currently focuses on three areas.
API2 — Broken Authentication
Evidence file: Evidence/API2 — Broken Authentication.json

This area covers authentication behavior, including login and token handling. Review the saved evidence for the specific request and response observations.
API3 — Broken Object Property Level Authorization
Evidence file: Evidence/API3-Security-Test-Report.html

The API3 assessment included:
- GET /users/v1
- GET /users/v1/_debug
Observed result: The public users endpoint exposed email addresses to unauthenticated callers. The debug endpoint returned user records containing sensitive properties, including plaintext passwords and administrative information.

These observations indicate excessive data exposure and insufficient property-level filtering/access control.
API4 — Unrestricted Resource Consumption
Evidence file: Evidence/API4 — Unrestricted Resource Consumption.json

This area focuses on resource-consumption controls. Refer to the saved JSON evidence for the request and response details. Avoid interpreting a single response as proof of impact without additional validation.
Testing Workflow
1. Start the local VAmPI application.
2. Import the Postman collection and environment.
3. Select the Day-60-VAmPI-Local-Lab environment.
4. Initialize the lab database using the collection's database initialization request, if required.
5. Authenticate as a lab user when a request requires a token.
6. Send requests manually and inspect the status code, response body, and relevant headers.
7. Save the response or report in the Evidence/ folder.
8. Record the observation, security impact, and recommended remediation.
Evidence and Reporting
Evidence should capture the relevant request and response, including:
- Endpoint and HTTP method
- Authentication context
- Status code
- Exposed or unexpected response properties
- A concise explanation of the security concern
Keep credentials and live tokens out of committed evidence. Replace them with placeholders or redact them before sharing.
Current Progress
- [x] Postman collection and environment prepared
- [x] API2 evidence saved
- [x] API3 security test report saved
- [x] API4 evidence saved
- [ ] Review and document the remaining OWASP API Top 10 categories