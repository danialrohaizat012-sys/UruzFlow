# V17.3 Firestore-only Draft Persistence
- Removed localStorage draft/autosave logic.
- Bank Summary Save Draft writes directly to Firestore by Job ID.
- Tax Save Draft writes directly to Firestore by Job ID.
- Switching company/job loads the corresponding Firestore document.
- Complete & Send performs a final Firestore save before workflow handoff.
- No typing-level autosave is used, preserving Spark quota.
- Staff should press Save Draft to persist work before switching jobs.
