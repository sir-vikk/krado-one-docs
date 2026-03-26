---
sidebar_position: 4
---

# Portal feature flags

## `GET /api/portal/feature-flags`

Returns **effective** flags and **limits** for the current user and edition, after **`ApplyFlagCaps`**.

Unlike the OSS distribution, responses include the **full** portal flag surface (including DevX section toggles such as `idp_section_*` when stored in the database).

## Admin

- **`GET /api/admin/flags`** — read flags (admin)  
- **`PUT /api/admin/flags`** — update flags (admin); **allowed** in enterprise builds (subject to caps)  

See **`models.Flag*`** constants in the backend for key names.
