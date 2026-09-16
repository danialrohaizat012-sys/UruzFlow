# V17.4 PDF + UI Audit
PDF:
- Bank Summary: dedicated branded A4 print report; user chooses Save as PDF in browser dialog.
- Tax Computation: dedicated branded A4 print report.
- Quotation/Invoice: existing print layout retained, button renamed Export PDF.
- PDF generation is client-side and uses no Firebase Storage.

UI audit fixes:
- Draft status moved to its own row instead of sitting between action buttons.
- Save button shortened from 'Save Draft to Firestore' to 'Save Draft'.
- Header action buttons wrap cleanly at tablet/mobile widths.
- On phones, action buttons become full-width to prevent overlap.
- Company/Job selectors constrained to available width.
- Tabs remain horizontally scrollable rather than colliding.
- Modals constrained to viewport height/width.
- Print CSS no longer forces every print action into Billing.
