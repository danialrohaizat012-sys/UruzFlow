# URUZ Flow V18.1 UAT Hotfix

Based on 8 Oct 2026 UAT report. Not production approved.

- F01: Bank PDF uses same `bankTotals()` calculations as screen; supports legacy `months` records through normalization.
- F02: Firestore load errors are visible. Click the Load failed status to retry. Save blocked after load failure.
- F03: Taxpayer/year uniqueness validated on metadata edit and Save Draft.
- F04: Bank opening balance and DR/CR edits mark Unsaved changes.

Verification: JS syntax check and isolated Bank totals, legacy normalization, HTML export tests passed. No authenticated browser, Firestore read/write or printed PDF UAT performed. Do not deploy to production without approval.
