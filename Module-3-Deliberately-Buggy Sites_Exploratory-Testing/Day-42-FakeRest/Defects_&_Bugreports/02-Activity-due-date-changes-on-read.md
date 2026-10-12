# BUG-02 — Activity due date changes on repeated GET

## Summary

**Title:** [API / Data Consistency] `GET /api/v1/Activities/1` recalculates `dueDate` on every read

**User perspective:** As a developer testing task and scheduling workflows, I expect an activity's due date to remain part of that activity's data unless it is updated. A moving due date makes clients and tests observe a different task on each fetch.

## Environment

| Field | Value |
| --- | --- |
| Service | FakeRESTApi |
| Endpoint | `GET https://fakerestapi.azurewebsites.net/api/v1/Activities/1` |
| Date | October 12, 2026 (UTC timestamps in evidence log) |
| Client | `curl`, sequential requests |
| Data changes during test | None; only GET requests were sent |

## Steps to reproduce

1. Send `GET /api/v1/Activities/1` several times in succession.
2. Do not send POST, PUT, or DELETE requests between calls.
3. Compare the `dueDate` values in the response bodies.

## Actual result

All five captured requests returned HTTP 200 for Activity 1, but each response contained a different `dueDate`. Across the capture, the value moved from `2026-10-12T14:49:04.3387099+00:00` to `2026-10-12T14:49:08.5228396+00:00`.

## Expected result

Repeated GET requests for an unchanged Activity should return the same `dueDate`. The due date should change only when the resource is deliberately updated.

## Impact

Clients can see the due date drift on refresh, and assertions against fixed task data become unreliable.

**Severity:** Medium

**Priority:** P2 — Normal

## Evidence

- [Timestamped repeated-read log](../Evidence/02-activity-due-date-changes-on-read.log)
