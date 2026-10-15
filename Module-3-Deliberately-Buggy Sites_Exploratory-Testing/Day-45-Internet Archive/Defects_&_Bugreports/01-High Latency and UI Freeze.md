Bug Report: High Latency and UI Freeze During Heavy Resource Loading
User Perspective: As a user browsing historical snapshots or media on the Internet Archive, enabling comprehensive feature toggles or high-detail rendering causes extreme sluggishness. The interface becomes unresponsive, leading to the perception that the application is stuck or frozen.

1. Title: [Performance / UX Defect] Excessive page load latency and UI unresponsiveness under heavy asset configuration

2. Environment:

OS: macOS / Windows / Linux

Browser/App: Google Chrome / Brave / Modern Web Browser

Build/URL: Internet Archive (Performance Testing Module)

3. Steps to Reproduce:

Open DevTools (F12) and navigate to the Performance or Network tab.

Configure application settings to maximum features/errors enabled (or test under simulated throttling).

Initiate a heavy resource download, search, or archive navigation action.

Measure rendering times and observe UI thread responsiveness.

4. Actual Result:

The application exhibits severe lag and blocking times. Even when adjusting settings, heavy resource fetching heavily delays DOM rendering and locks up the main thread, making the UI appear frozen.

5. Expected Result:

The application should implement lazy loading, pagination, or asynchronous chunking so that heavy resource loads do not block the main UI thread or degrade usability.

6. Severity: Medium (Degrades user experience significantly and increases bounce rates due to perceived freezes).

7. Priority: P2 - Normal (Requires performance profiling, asset optimization, and main-thread offloading).