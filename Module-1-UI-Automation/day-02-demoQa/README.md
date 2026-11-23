# Day 02 — DemoQA

## Folder Structure

```text
day-02-demoQa/
├── README.md
├── Defects_&_Bugreports/
│   └── DEFECT-001-disabled-button.md
└── Tests/
    ├── alerts_windows.spec.ts
    ├── book_store.spec.ts
    ├── elements.spec.ts
    ├── forms.spec.ts
    ├── interactions.spec.ts
    └── widgets.spec.ts
```

## Test Workflows

| Test file | Workflow covered |
| --- | --- |
| `Tests/elements.spec.ts` | Text box, checkbox, radio button, web table, mouse-button feedback, links, and file download |
| `Tests/forms.spec.ts` | Practice form entry, autocomplete, selections, and submission confirmation |
| `Tests/widgets.spec.ts` | Accordion, autocomplete, date/time picker, slider, progress bar, tabs, tooltip, menu, and select menu |
| `Tests/alerts_windows.spec.ts` | Opening and checking new tabs and windows |
| `Tests/interactions.spec.ts` | Sortable, selectable, resizable, droppable, and draggable controls |
| `Tests/book_store.spec.ts` | Book details, profile, and Book Store API navigation |
| `Defects_&_Bugreports/DEFECT-001-disabled-button.md` | Steps, expected/actual results, severity, and evidence for a radio-button/disable-state defect |

## What I Learned

- Use accessible locators and assertions to check UI outcomes, not only perform clicks.
- Coordinate popups and downloads with Playwright events, and practice common widget and pointer interactions.
- Reduce ad-related layout shifts with request interception and overlay cleanup; document defects with reproducible steps and expected versus actual results.

Run the Day 02 tests from the repository root:

```sh
npx playwright test Module-1-UI-Automation/day-02-demoQa/Tests --project=linux-chromium
```
