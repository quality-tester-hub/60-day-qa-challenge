Bug Report: Client-Side Routing Overrides West Bengal Selection Despite Successful 200 OK Response
User Perspective: As a user attempting to customize my regional location settings, selecting West Bengal briefly fetches the region but immediately redirects me back to Delhi, preventing me from accessing location-specific content.

1. Title: [Frontend Routing Defect] Selecting West Bengal location triggers unintended client-side redirect to Delhi despite successful HTTP 200 OK backend response

2. Environment:

OS: macOS / Windows / Linux

Browser/App: Google Chrome / Brave / Modern Browser

Build/URL: Regional Location & Routing Module ([in.bookmyshow.com/explore/home](https://in.bookmyshow.com/explore/home))

3. Steps to Reproduce:

Open DevTools (F12) and switch to the Network tab.

Access the location selector modal/dropdown on the platform.

Change location to West Bengal (WestBengal/explore/home).

Observe the network traffic and the final active URL/UI view state.

4. Actual Result:

The backend successfully responds with HTTP 200 OK for the WestBengal document (148 kB). However, the client-side JavaScript framework immediately intercepts the route and forces a client-side redirect back to Delhi.

5. Expected Result:

Upon receiving an HTTP 200 OK response for West Bengal, the application should set the location state to West Bengal and load the corresponding home feed without redirecting.

6. Severity: Medium (Functional defect blocking access to regional features for a specific location).

7. Priority: P2 - Normal (Requires inspecting single-page application (SPA) client-side routing logic and fallback handlers).

8. Evidence:

DevTools Network Screenshot: Confirms the backend server processes the request properly and returns HTTP 200 OK for WestBengal/explore/home and related preloaded assets.

Loom Recording: [Location Routing Bug Demonstration (or corresponding local capture).](https://www.loom.com/share/eaa544ba15d94647b1f4f55b8aec3342)