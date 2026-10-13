# Day 43 — BookMyShow Exploratory Testing

**Target:** [BookMyShow India](https://in.bookmyshow.com/)  
**Session date:** October 13, 2026  
**Testing style:** Manual exploratory testing; one public read-only page request attempted  
**Workspace:** Existing `Day-43-BookMyShow` folder

## Objective

Explore BookMyShow as a live consumer website and record evidence-backed observations without creating an account, entering personal or payment information, reserving seats, or purchasing tickets.

## Today's session record

| Check | Action | Observation | Result |
| --- | --- | --- | --- |
| Public landing page | Opened `https://in.bookmyshow.com/` in the integrated browser. | The page title was **“Movie Tickets, Plays, Sports, Events & Cinemas nearby - BookMyShow.”** | Homepage was accessible in the browser. |
| Single read-only request | Attempted a GET of `https://in.bookmyshow.com/` using the page-fetch tool. | The fetch tool returned HTTP 403. | This is a fetch-tool response, not evidence that ordinary users receive a 403 in the browser. No application defect is inferred from it. |
| Location-routing follow-up | A direct navigation to the West Bengal route was proposed but declined, so it was not sent. | No current-session route or redirect result was collected. | Existing routing observation was not independently reproduced today. |

No login, booking, seat selection, reservation, or payment action was performed. Movie, cinema, showtime, and event flows were not explored in this session.

## Existing reported finding

The folder already contained one report about location selection routing:

| ID | Reported observation | Assessment for this session | Report | Evidence |
| --- | --- | --- | --- | --- |
| BUG-01 | Selecting West Bengal reportedly redirects the client back to Delhi, although a document request for `/WestBengal/explore/home` returned HTTP 200. | Previously reported; **not reproduced today**. The screenshot confirms the HTTP 200 document request but does not show the final URL or prove the claimed redirect by itself. Treat the redirect as unverified until a recording or a new reproduction demonstrates it. | [Bug report](./Defects_&_Bugreports/01-Location%20Selection%20Routing%20Failure.md) | [Network screenshot](./Evidence/Screenshots/01-Location%20Selection%20Routing%20Failure.png); [evidence note](./Evidence/01-Location%20Selection%20Routing%20Failure.md) |

The screenshot shows a DevTools Network entry named `WestBengal /explore/home` with status `200 OK`, type `document`, size `148 kB`, and time `407 ms`, plus a `WestBengal` preload entry with status `200 OK`. It is evidence of those requests only. It does not establish the browser's final route or visible location state. The original report also mentions a demonstration recording; its URL is intentionally not repeated here.

## Reproduction to complete later

If the location issue is tested again:

1. Open the public site and record the starting URL and currently selected city.
2. Open the location selector and select West Bengal using ordinary UI controls.
3. Record the resulting URL and visible selected location after the page settles.
4. In DevTools Network, preserve the document/navigation request and relevant redirects; capture the final URL and location state in the same evidence set.
5. Repeat once in a fresh tab or clean session if safe. Do not infer a client-side redirect from a successful document response alone.
6. Stop if the site requests sign-in, personal details, or any booking/transaction commitment.

## Evidence and reporting notes

- Existing evidence is linked above; no new screenshot or recording was captured during today's session.
- Keep timestamps, starting URL, browser details, selected location, exact actions, final URL, and visible outcome with any future reproduction.
- Separate browser/fetch-tool access restrictions, transient network failures, and third-party console errors from reproducible product defects.
- Do not claim a defect based only on a successful HTTP response or an isolated 403 from a fetch utility.

## Folder contents

```text
Day-43-BookMyShow/
├── README.md
├── Defects_&_Bugreports/
│   └── 01-Location Selection Routing Failure.md
└── Evidence/
    ├── 01-Location Selection Routing Failure.md
    └── Screenshots/
        └── 01-Location Selection Routing Failure.png
```
