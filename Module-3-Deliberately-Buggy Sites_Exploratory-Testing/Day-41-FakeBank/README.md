Day 41 — ParaBank UI-to-API Exploratory Testing
Objective
Investigate ParaBank's HTTP/API behavior with Postman and compare it with the UI. The focus is on negative testing and lower-level behavior that ordinary UI testing may not reveal.
The collection and successful-run filenames above follow the visible workspace structure; retain the exact filenames already present in your project.
Environment and Collection
- Postman environment: Day 41 ParaBank Environment
- Postman collection: Day 41 ParaBank Collection
- Base URL: https://parabank.parasoft.com/parabank
The Get Customer Accounts request has a post-response script that extracts the first account ID from the XML response and saves it as fromAccountId. This variable is used by the Create Account request.
Testing Summary
Positive scenario — Login request/response
- Request: GET {{baseUrl}}/login/john/demo
- Observed result: 200 OK
- Status: Passed for the observed request. The response contained a customer XML object.
Negative scenario — Invalid login credentials
Requests tested:
- GET {{baseUrl}}/login/john/wrongpassword
- GET {{baseUrl}}/login/nobody/demo
The status code alone is insufficient to determine whether authentication was incorrectly accepted. Review the response body and confirm whether it contains a customer object or an authentication-failure response before reporting an authentication bypass.
Negative scenario — URI path contains unexpanded Postman variables
- Evidence file: Evidence/01-Rejects URI Path Credentials.html
- Observed result: HTTP 400 Bad Request
- Observed message: Tomcat reports an invalid character in the request target when the URI contains literal braces from {{username}} and {{password}}.
Interpretation: This evidence shows that the malformed request target was rejected. It does not, by itself, prove that the application's authentication implementation is defective. The immediate cause is consistent with Postman variables not being resolved before the request was sent, or with unencoded characters in the URI.
- The use of credentials in URL paths is also a security/design concern because URLs can be retained in logs and other diagnostic records. Treat that as a separate design observation, not as proof that the Tomcat 400 response is an application bug.  lemme provide u the bug report User Perspective: As a developer or QA engineer interacting with the ParaBank REST API services, passing unencoded variables directly within the request URI path (e.g., /parabank/services/bank/login/{{username}}/{{password}}) causes Apache Tomcat to throw an IllegalArgumentException due to invalid characters violating RFC 7230 and RFC 3986. This results in an HTTP Status 400 – Bad Request error response.   
Bug Report: Apache Tomcat Rejects URI Path Credentials with HTTP 400 Bad Request
1. Title:
-  [API / Security Defect] Passing unencoded credentials via URL path triggers Apache Tomcat RFC 7230/3986 violation (HTTP Status 400)   
- 2. Environment:
  - OS: macOS / Windows / Linux   
  - Server: Apache Tomcat/11.0.26   
  - Client: Postman API Client / REST Client   
  - Build/URL: ParaBank REST Services (/parabank/services/bank/login/{username}/{password})   
- 3. Steps to Reproduce:
1. Construct a REST API request targeting the ParaBank login service using path parameters for credentials: /parabank/services/bank/login/{{username}}/{{password}}.   
  1. Send the request via Postman or an HTTP client without proper URL encoding or by passing raw placeholder strings.   
  2. Observe the HTTP response code and server error page.   
- 4. Actual Result:
  - Apache Tomcat rejects the request with an HTTP Status 400 – Bad Request and throws a java.lang.IllegalArgumentException: Invalid character found in the request target because the target URL contains unencoded characters violating RFC 7230 and RFC 3986.   
- 5. Expected Result:
  - Authentication endpoints should accept credentials securely via request body payloads (POST) or query parameters rather than exposing sensitive credentials directly within the URI path structure.
- 6. Severity: High (Breaks API endpoint accessibility and exposes poor architectural design regarding credential transmission).
- 7. Priority: P1 - High (Requires refactoring the API endpoint to utilize proper request bodies or query parameters for authentication).
- 8. Evidence:
  - Server HTML Response Error Log:
  - HTML
  - 
  - HTTP Status 400 – Bad Request
  - Message: Invalid character found in the request target [/parabank/services/bank/login/{{username}}/{{password}} ]. The valid characters are defined in RFC 7230 and RFC 3986
  - Exception: java.lang.IllegalArgumentException: Invalid character found in the request target
  -     at org.apache.coyote.http11.Http11InputBuffer.parseRequestLine(Http11InputBuffer.java:481)
  - Apache Tomcat/11.0.26
```[cite: 18]  Day-41-ParaBank/
├── Collection_&_Enviroment/
│   ├── Day 41 ParaBank Collection.postman_collection.json
│   └── Day 41 ParaBank Environment.postman_environment.json
├── Defects_&_Bugreports/
│   └── 01-Rejects URI Path Credentials.md
├── Evidence/
│   └── 01-Rejects URI Path Credentials.html
├── Successful_Runs/
│   └── Day-41-ParaBank-Exploratory-Testing...html
└── README.md