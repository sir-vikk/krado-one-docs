---
title: "API Catalog"
description: "Register and manage all internal HTTP APIs with version tracking, ownership, and deprecation management in Krado One."
---

# API Catalog

The API Catalog is an internal registry of all HTTP APIs exposed by your services. It helps teams discover available APIs, understand ownership, and track version lifecycle including deprecation timelines.

## How to Access

Navigate to **Platform Portal > API Catalog** from the left sidebar.

## Registering an API

1. Click **+ Add API** at the top of the catalog.
2. Fill in the API details:

    | Field | Description |
    |-------|-------------|
    | Name | The API name (e.g., "Payments API") |
    | Version | Semantic version (e.g., v2.1.0) |
    | Service | The owning service from the Service Catalog |
    | Spec URL | Link to the OpenAPI or Swagger specification |
    | Status | Active, Deprecated, or Sunset |
    | Description | A brief summary of what the API does |

3. Click **Save** to register the API.

## Tracking Versions

As your APIs evolve, register new versions to maintain a complete version history. Previous versions remain visible in the catalog so consumers can see the full evolution of the API.

## Managing Deprecation

When an API version is being retired:

1. Open the API entry in the catalog.
2. Change the status to **Deprecated**.
3. Set a **sunset date** to indicate when the API will no longer be available.

Deprecated APIs are clearly marked in the catalog, giving consuming teams advance notice to migrate before the deadline.

![API Catalog showing registered APIs with version and status information](/screenshots/platform-api-catalog.png)
