# V16.2 Intake Fix
- Removed confusing second PIC field from Doc Intake.
- Intake has one `PIC Uruz` (company owner).
- Syiqa is automatically the Intake/Sorting stage PIC.
- Future department PIC is assigned at that department/stage, not during intake.
- Open Job now updates UI immediately before Firestore sync.
- Company + Job persist to Firestore after local creation.
- appState/jobs exposed correctly to Firebase loader.
- Clear success/error messages added.
- System remains empty by default.
