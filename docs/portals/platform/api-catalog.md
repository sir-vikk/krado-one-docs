---
title: "API Catalog"
description: "Internal registry of all HTTP APIs — endpoints, versions, owners, documentation links, and deprecation tracking."
---

# API Catalog

**Route:** `/platform/api-catalog` · **Edition:** Pro+ · **Beta**

The API Catalog is an internal registry of all HTTP APIs exposed by your services — endpoints, versions, owners, and documentation links.


## Entry fields

| Field | Description |
|-------|-------------|
| Name | API name (e.g. "Payments API") |
| Version | Semantic version (e.g. `v2.1.0`) |
| Base URL | Base endpoint (e.g. `https://payments.internal/api/v2`) |
| Service | Owning service from the catalog |
| Spec URL | Link to OpenAPI/Swagger spec |
| Status | Active / Deprecated / Sunset |
| Description | What this API does |

## Deprecation tracking

Mark APIs as **Deprecated** with a sunset date. This surfaces in the catalog so consuming teams know to migrate before the deadline.
