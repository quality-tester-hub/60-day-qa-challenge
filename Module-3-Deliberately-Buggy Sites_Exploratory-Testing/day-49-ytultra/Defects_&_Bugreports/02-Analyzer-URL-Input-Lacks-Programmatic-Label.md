# Bug Report: Analyzer URL Input Has No Persistent Explicit Label

## Summary

The analyzer URL field is presented with a placeholder but has no associated `<label>`, `aria-label`, or title. The placeholder disappears when a value is entered, leaving no persistent visible field label.

## Environment

- URL: `https://www.ytultra.com/en/youtube-video-analyzer/`
- Browser: Chromium
- Tested: October 19, 2026
- Session: Logged out; public page

## Steps to Reproduce

1. Open the YouTube Video Analyzer page.
2. Inspect the “Paste a YouTube URL or video ID...” input.
3. Check for an associated label and persistent naming attributes.

## Actual Result

The control is an `input[type="url"]` with only the placeholder `Paste a YouTube URL or video ID...`. It has zero associated labels and no `aria-label` or `title`.

## Expected Result

Provide a persistent visible label associated with the input, and ensure the control's purpose remains clear when the placeholder is no longer shown.

## Impact

Low. The purpose is communicated by placeholder text while the field is empty, but the prompt disappears after entry and there is no persistent explicit label. This can make the field's purpose less clear, particularly for users relying on assistive technology or returning to edit a value.

## Severity / Priority

- Severity: Low — form usability and accessibility concern.
- Priority: P3

## Evidence

- [Input attributes and associated-label observation](../Evidence/01-YTUltra-Exploratory-Observations.md)

## Scope Notes

This report describes the missing explicit label; it does not claim that the browser exposes no accessible name at all, since browsers may use the placeholder as a fallback.
