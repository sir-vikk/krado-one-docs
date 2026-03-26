---
sidebar_position: 3
---

# DRM: incidents and catalog

![Disaster Management & Maintenance Tracker portal](/assets/screenshots/drm-portal.png)

## Incident tracker (`/api/disasters/*`)

Enterprise **DRM** includes full **disaster / incident** lifecycle:

- List, create, read, update, delete disasters  
- **Action items**, **timeline** events, **comments**  
- **Affected products, customers, services** with linking APIs  
- **Template** download and document **upload** for imports  

All of these routes are behind **`RequireMin(Enterprise)`** in the default router.

## Summaries and filters

- **`/api/summaries/*`** — LLM-oriented summary config, preview, generate, list, delete  
- **`/api/saved-filters/*`** — persisted DRM list filters  

## Catalog (teams, products, customers)

**`/api/teams`**, **`/api/products`**, **`/api/customers`**, **`GET /api/services`** — same shapes as documented in OpenAPI; gated **Enterprise** in this tree.

## Maintenance

**`/api/maintenance/*`** — maintenance windows, start/complete/cancel/notify flows.

## Google Calendar

**`/api/config/google-calendar`** — optional calendar integration for maintenance scheduling.
