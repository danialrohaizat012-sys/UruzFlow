# V17.11 Save Draft + PDF QA
Verified and hardened:
- Bank Summary: Save Draft -> Firestore by Job ID.
- Bank Summary: Export PDF -> dedicated A4 report and browser Save as PDF.
- Tax Computation: Save Draft -> Firestore by Job ID.
- Tax Computation: Export PDF -> dedicated A4 report and browser Save as PDF.
- Quotation/Invoice: Export PDF -> invoice print layout.
- Save buttons prevent double-click duplicate actions.
- Clear errors for offline/Firebase failures.
- PDF print state has cleanup/fallback protection.
- Complete & Send still performs final Firestore save before handoff.

Note: Quotation/Invoice currently has Export PDF, not a separate Save Draft workflow.
