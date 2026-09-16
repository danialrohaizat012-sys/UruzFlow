# V17.5 Performance Pass
Optimizations:
- Firestore core login remains limited to companies + jobs.
- Bank Summary and Tax records are lazy-loaded only when their module/job is opened.
- Bank/Tax records are cached in memory per Job ID after first read.
- Saving a draft updates the cache, avoiding an immediate Firestore re-read.
- Race tokens prevent a slow previous request from overwriting a newly selected job.
- Company/PIC search inputs are debounced.
- ACC is not rendered eagerly unless its view is active.
- Inactive views are removed from layout/paint work.
- Large cards/tables use CSS containment.
- Service worker uses stale-while-revalidate for static assets and network-first for app shell/config.
- No Firestore autosave-per-keystroke, preserving Spark quota and typing responsiveness.

This is a front-end performance optimization pass. Actual network latency still depends on Firebase/network conditions.
