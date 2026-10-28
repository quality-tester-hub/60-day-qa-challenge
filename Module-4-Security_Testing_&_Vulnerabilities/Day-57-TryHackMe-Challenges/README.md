# Day 57 — TryHackMe Challenges

**Session date:** October 28, 2026  
**Day 57 completed:** October 28, 2026  
**Targets:** [Crack the hash](https://tryhackme.com/room/crackthehash) and [Vulnerability Capstone](https://tryhackme.com/room/vulnerabilitycapstone)  
**Status:** Day 57 review completed. A DOM defect was confirmed on the Crack the hash room page. Vulnerability Capstone remains unassessed because its machine content is Premium-gated.

## Objective

Review the two selected rooms for security issues. The confirmed finding below is based on live DOM structure and DOM lookup behavior; no screenshot, video, or hash-cracking output was used. No machines were started, answers submitted, or hash values tested.

## Finding — duplicate DOM IDs on Crack the hash answer fields

- **Page:** [TryHackMe — Crack the hash](https://tryhackme.com/room/crackthehash)
- **Expected:** Each HTML `id` value is unique within the document so DOM lookups and ID-targeted selectors identify one element.
- **Observed:** The answer inputs in the two task levels reuse `id` values `1`, `2`, `3`, and `4`. Each appears twice. A DOM query for `[id="1"]` returns two elements, while `document.getElementById("1")` returns the input in the first task form. The page also contains two elements with `id="accordion-details"`.
- **Impact:** Code or automation relying on a duplicated ID can target the wrong element or ambiguously match multiple elements. The answer inputs do have distinct `aria-labelledby` targets; this finding does not claim their accessible names are broken.
- **Assessment:** Confirmed DOM conformance defect. No challenge answer or hash was tested, and no password was recovered.
- **Structured evidence:** [DOM inspection results](./Evidence/Day-57-DOM-Evidence.json).

## Other room reviewed

[Vulnerability Capstone](https://tryhackme.com/room/vulnerabilitycapstone) displays its task outline but gates the machine behind Premium access. No specific issue can be verified without the authorized lab content; no vulnerability is claimed for that room.

## Follow-up

Use unique IDs for answer fields across task levels, for example by including both task and question numbers in each ID. Recheck the rendered DOM after the room page is updated.
