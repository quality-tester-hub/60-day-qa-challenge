# Day 45 — Internet Archive Exploratory Testing

**Target:** [Internet Archive — Apollo 11 footage](https://archive.org/details/Apollo11Footage)  
**Session date:** October 15, 2026  
**Testing style:** Manual exploratory testing with DevTools performance-trace and rendered-page inspection

## Objective and scope

Review the Internet Archive item details page for performance, heading semantics, and readable metadata presentation. The accessibility and metadata observations were collected at a 390 × 844 CSS-pixel viewport. The performance trace was captured separately with an emulated iPhone 16 and 4× CPU throttling. No account, download, or transaction action was performed.

## Findings

| ID | Finding | Severity / priority | Status | Report |
| --- | --- | --- | --- | --- |
| BUG-01 | Reported high latency and UI unresponsiveness during heavy resource loading. | Medium / P2 | Reported; the supplied trace needs a targeted reproduction before the freeze claim is confirmed. | [Bug report](./Defects_&_Bugreports/01-High%20Latency%20and%20UI%20Freeze.md) |
| BUG-02 | Item details page exposes seven `H1` headings instead of a single item-title `H1`. | Low / P3 | Confirmed in the rendered page at the tested viewport. | [Bug report](./Defects_&_Bugreports/02-Item%20Details%20Has%20Multiple%20H1%20Headings.md) |
| BUG-03 | Raw metadata key `Ia_orig__runtime` is displayed as a user-facing label and wraps on mobile width. | Low / P3 | Confirmed in the rendered page at the tested viewport. | [Bug report](./Defects_&_Bugreports/03-Raw%20Metadata%20Key%20Shown%20as%20Label.md) |

## Session record

| Check | Action | Observation | Result |
| --- | --- | --- | --- |
| Performance capture | Recorded a DevTools trace with an emulated iPhone 16 and 4× CPU throttling. | The trace metadata identifies `https://archive.org/` and its main stylesheet as captured resources. | Preserved as performance evidence for BUG-01. The trace does not identify the Apollo 11 item URL or a specific heavy-resource interaction. |
| Heading structure | Enumerated `H1` elements in the rendered Apollo 11 item page and its open shadow roots. | Seven `H1` headings were exposed; the item title appears twice, and several section labels are also top-level headings. | BUG-02 confirmed. |
| Additional metadata | Inspected the visible metadata labels at 390 × 844 CSS pixels. | `Ia_orig__runtime` is shown literally and wraps across lines. | BUG-03 confirmed. |

## BUG-01 — High latency and UI freeze

The existing report describes severe lag and a UI that appears frozen during heavy resource fetching, and recommends lazy loading, pagination, or asynchronous chunking. Its DevTools trace was captured on October 15, 2026 at 04:47:15 UTC with an emulated iPhone 16 and 4× CPU throttling.

The supplied trace references the Internet Archive root page (`https://archive.org/`) and its stylesheet, not the Apollo 11 item-details route. The report does not include a measured load-time threshold or a reproducible action/resource set tied to the alleged freeze. Therefore, the performance concern is retained as reported, but the severity and freeze behavior still need confirmation with a trace of the specific slow interaction and a baseline comparison.

See the [performance trace](./Evidence/01-High%20Latency%20and%20UI%20Freeze.json).

## BUG-02 — Multiple top-level headings on the item details page

At `https://archive.org/details/Apollo11Footage`, the rendered page exposed these seven `H1` headings:

1. `Apollo 11 footage`
2. `Share or Embed This Item`
3. `Flag this item for`
4. `Apollo 11 footage`
5. `DOWNLOAD OPTIONS`
6. `IN COLLECTIONS`
7. `SIMILAR ITEMS (based on metadata) play Play All`

The item title is duplicated, and section labels are exposed at the top heading level. The expected structure is one `H1` for the item title, followed by lower-level section headings in a logical hierarchy. The observation was collected on October 15, 2026 at 390 × 844 CSS pixels.

See the [heading evidence](./Evidence/02-Item%20Details%20Has%20Multiple%20H1%20Headings.json).

## BUG-03 — Raw metadata key shown as a label

The additional metadata section displays `Ia_orig__runtime` literally between `Addeddate` and `Identifier`. At the tested 390 × 844 CSS-pixel viewport, the key wraps across lines. It should use a human-readable label such as “Original runtime,” or be omitted if a suitable public label is unavailable.

See the [metadata evidence](./Evidence/03-Raw%20Metadata%20Key%20Shown%20as%20Label.json).