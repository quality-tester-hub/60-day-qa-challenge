User Perspective: As a developer or QA engineer interacting with the ParaBank REST API services, passing unencoded variables directly within the request URI path (e.g., /parabank/services/bank/login/{{username}}/{{password}}) causes Apache Tomcat to throw an IllegalArgumentException due to invalid characters violating RFC 7230 and RFC 3986. This results in an HTTP Status 400 – Bad Request error response.   Bug Report: Apache Tomcat Rejects URI Path Credentials with HTTP 400 Bad Request
1. Title: [API / Security Defect] Passing unencoded credentials via URL path triggers Apache Tomcat RFC 7230/3986 violation (HTTP Status 400)  
 2. Environment:OS: macOS / Windows / Linux   Server: Apache Tomcat/11.0.26   Client: Postman API Client / REST Client   Build/URL: ParaBank REST Services (/parabank/services/bank/login/{username}/{password})  
  3. Steps to Reproduce:Construct a REST API request targeting the ParaBank login service using path parameters for credentials: /parabank/services/bank/login/{{username}}/{{password}}.   Send the request via Postman or an HTTP client without proper URL encoding or by passing raw placeholder strings.   Observe the HTTP response code and server error page.   
  4. Actual Result:Apache Tomcat rejects the request with an HTTP Status 400 – Bad Request and throws a java.lang.IllegalArgumentException: Invalid character found in the request target because the target URL contains unencoded characters violating RFC 7230 and RFC 3986.  
   5. Expected Result:Authentication endpoints should accept credentials securely via request body payloads (POST) or query parameters rather than exposing sensitive credentials directly within the URI path structure.
   6. Severity: High (Breaks API endpoint accessibility and exposes poor architectural design regarding credential transmission).
   7. Priority: P1 - High (Requires refactoring the API endpoint to utilize proper request bodies or query parameters for authentication).
   8. Evidence:Server HTML Response Error Log:HTMLHTTP Status 400 – Bad Request
   
Message: Invalid character found in the request target [/parabank/services/bank/login/{{username}}/{{password}} ]. The valid characters are defined in RFC 7230 and RFC 3986
Exception: java.lang.IllegalArgumentException: Invalid character found in the request target
    at org.apache.coyote.http11.Http11InputBuffer.parseRequestLine(Http11InputBuffer.java:481)
Apache Tomcat/11.0.26
```[cite: 18]