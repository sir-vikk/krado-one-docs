---
title: "Service Catalog"
description: "Register and manage every internal service in a central registry with ownership, dependencies, SLOs, environments, and health scores in Krado One."
---

# Service Catalog

The Service Catalog is the central registry for every internal service your organization operates. It brings together ownership, dependencies, SLOs, deployment environments, and health scores into a single view, making it easy for any team member to understand your service landscape.

## How to Access

Navigate to **DevX Portal > Service Catalog** from the left sidebar.

## Browsing the Catalog

The catalog displays services as cards, each showing:

- Service name and description
- Owning team
- Tech stack tags
- Current scorecard health score (A through F)
- Dependency count

Use the search bar and filters to find services by name, team, or technology.

![Service Catalog list showing service cards with health scores and ownership](/screenshots/devx-service-catalog-list.png)

## Adding a Service

1. Click **+ Add Service** at the top of the catalog.
2. Fill in the service details:

    | Field | Description |
    |-------|-------------|
    | Name | A unique identifier for the service |
    | Description | What the service does |
    | Team | The team that owns this service |
    | Repository URL | Link to the source code repository |
    | Tech Stack | Language and framework tags (e.g., Go, React, Python) |
    | Tier | Criticality level -- Tier 1 (critical), Tier 2 (important), or Tier 3 (standard) |

3. Click **Save** to register the service.

![Add Service form with metadata fields](/screenshots/devx-service-catalog-add.png)

## Service Detail View

Click any service card to open its detail page. The detail view is organized into tabs:

- **Overview** -- description, links, and metadata at a glance
- **Dependencies** -- upstream and downstream services, visualized in the dependency graph
- **SLOs** -- availability and latency targets with current status indicators
- **Environments** -- production, staging, and development environments with deployment information
- **Integrations** -- connections to external tools such as ArgoCD, PagerDuty, and Prometheus
- **Scorecard** -- the automatic health score based on your configured scoring rules
- **Runbook** -- a per-service operational runbook in markdown format

![Service detail view with tabs for dependencies, SLOs, and environments](/screenshots/devx-service-catalog-detail.png)
