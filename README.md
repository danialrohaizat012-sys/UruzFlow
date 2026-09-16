# URUZ Flow V9 Complete Prototype

Major update based on Uruz's actual operational examples.

## Included
- 6-stage flow: Document Intake & Sorting → Bank Summary → Kiraan Cukai → Commercial Closing → ACC Preparation → Fulfilment & Dispatch.
- Bank Summary supports multiple bank accounts per company.
- Monthly formula: Balance = CR - DR.
- Running balance = previous running balance + monthly balance.
- Kiraan Cukai supports multi-year and multi-taxpayer columns.
- Tax structure: Net Profit → Add-back → Total Income → Relief → Chargeable Income → Bracket → Rebate/Zakat → Final Tax.
- Final tax minimum RM0.
- Quotation/Invoice builder with service codes ACC, BK, HR, SSM, STP, FP, OS.
- Service/item dropdown with separate period/date field.
- Invoice preview styled from Uruz invoice examples.
- ACC Preparation with only two operational tickables: Akaun and Ledger.
- Original Uruz PWA icon and separate browser favicon retained.
- Flat GitHub Pages structure. No assets folder.

This remains a frontend prototype. Production backend, authentication, permission enforcement, exact official yearly tax rules and persistent database are next-stage integrations.


V10: Company selector/search + Bank Summary History + Tax History.
