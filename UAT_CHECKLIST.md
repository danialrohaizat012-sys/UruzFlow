# URUZ Flow V18 Phase 1 | UAT Checklist

**Environment:** Test only. Do not use production customer records.

1. Log in as authorized HOD, create a clearly marked `UAT TEST ONLY` company/job.
2. Navigate Tax Computation and select the UAT operational job.
3. Click Add Year; enter 2025. Verify all amounts start at zero.
4. Click Add Year again; enter 2026. Verify its figures are zero and independent of 2025.
5. Click Add Taxpayer; enter `Rakan Kongsi UAT`, year 2025. Verify a distinct taxpayer-year record.
6. Fill test figures (not real client data) and record calculated results.
7. Click Save Draft; verify success, refresh the page, reselect the same job and verify values persist.
8. Export PDF using browser Save as PDF. Compare year, taxpayer, all amounts, and final tax with on-screen figures.
9. Switch to another UAT job; verify no data leak from the first job.
10. Test invalid year, duplicate taxpayer-year, offline save, and empty-job export.
11. Delete only the UAT test records via approved admin process.

**Pass criteria:** No JS errors, correct independent columns, successful Firestore roundtrip, matching screen/PDF totals, no cross-job mixing.

**Current status:** Static review and taxCalc unit test only. Browser execution blocked by local environment policy; no production Firebase login, Firestore writes, or real PDF print tested. **Not production approved.**
