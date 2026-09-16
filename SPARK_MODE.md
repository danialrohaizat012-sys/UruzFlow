# URUZ Flow V16 Spark Optimized

Goal: remain practical on Firebase Spark with no Firebase Storage dependency.

- Initial login reads only `companies` and `jobs`.
- Other data is intended to be loaded on demand.
- Bank/tax calculations remain client-side and persist on explicit Save.
- Heavy files are represented by metadata/external URLs, not Firebase Storage.
- Manual JSON backup is available in Settings.
- Audit logging remains event-based rather than keystroke-based.

If Uruz later wants native file upload/storage, upgrade to Blaze and add Cloud Storage with billing alerts/budgets.
