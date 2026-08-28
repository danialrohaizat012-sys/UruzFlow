# URUZ Flow Prototype v4

Flat GitHub Pages structure. No assets folder.

## Deploy
Upload every file in this folder to the repository root:
- index.html
- manifest.json
- sw.js
- uruz-logo.png
- icon-192.png
- icon-512.png

Then enable GitHub Pages from the main branch root.

## This version includes
- Flow Dashboard with As-of Date
- CRM populated with demo customer data
- Bank Summary editable template + live totals + CSV/PDF export
- Tax Computation editable template + example formula + payment gate + CSV/PDF export
- Quotation & Invoice page with quotation amendment/versioning demo
- Audit Trail & Efficiency
- 3-second branded splash screen
- Responsive mobile layout + PWA files

Note: real Uruz formulas are still pending. Replace prototype formulas once the actual Excel formulas/templates are provided.

## v6 branding
- PWA icon: centered Uruz emblem with `Uruz Flow` inside the icon.
- Browser favicon: scalable `favicon.svg`.
- PNG favicon fallbacks: 32px and 16px.
- Flat root structure retained.

## v7 clean home-screen icon
- Rebuilt app icon from scratch.
- Emblem only inside the icon. No `URUZ`, `JRUZ`, or `Uruz Flow` text is embedded.
- Dedicated `apple-touch-icon.png` (180×180) for iPhone.
- iOS displays the app name `URUZ Flow` below the icon itself.
- Service worker cache bumped and old caches are deleted on activation.
