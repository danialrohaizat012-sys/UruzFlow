# V17.1 Draft + Complete Integration
- Bank Summary and Tax now select an Operational Job, not only a company.
- `Save Draft` persists by Job ID and does not move the workflow.
- Selecting the same Job auto-loads its saved Firestore draft.
- `Complete & Send` is allowed only when that Job is currently at the matching stage.
- Complete saves a final status, then opens Stage Handoff for next PIC + Stage Due.
- Bank Summary document ID = Job ID in `bankSummaries`.
- Tax document ID = Job ID in `taxComputations`.
- This prevents multiple periods/jobs under the same company from overwriting each other.
