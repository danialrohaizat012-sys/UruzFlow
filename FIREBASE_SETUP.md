# URUZ Flow V15 — Full Firestore Persistence

Firebase project: `uruzflow`
Auth: Email/Password
Current authorized UID: Encik Amir only.

Persistent Firestore collections:
- companies
- jobs
- documents
- payments
- bankSummaries
- taxComputations
- billingDocuments
- accPreparations
- dispatches
- auditLogs

On successful login, URUZ Flow loads persisted collections from Firestore into the app state.
Intake creates/persists Company + Job.
Bank Summary, Tax, Billing and ACC Preparation save to Firestore.
ACC completion creates completed-document records.
Important actions create auditLogs.

The included Firestore rules remain locked to Encik Amir's UID.

Next production hardening:
- staff role accounts and role-based Firestore rules
- Firebase Storage for actual PDF/Excel/document binary files
- transactions/counters for guaranteed invoice numbering
- richer payment ledger UI and dispatch UI
