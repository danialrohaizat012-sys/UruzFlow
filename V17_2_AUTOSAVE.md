# V17.2 Local Auto Save
Three-layer persistence:
1. While typing: debounced localStorage auto-save by Job ID.
2. Save Draft: permanent Firestore save by Job ID, then local temporary draft is cleared.
3. Complete & Send: permanent final save + workflow handoff.

When a Job is reopened:
- Firestore draft is loaded.
- If a newer unsaved local draft exists, it is restored instead.
- Status beside Save Draft indicates Local / Firestore state.

This preserves Spark quota because typing does not write to Firestore.
