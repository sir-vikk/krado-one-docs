---
title: "Ops Dashboard"
description: "View aggregated DORA metrics, deployment frequency, and incident rate across all services in a single dashboard in Krado One."
---

# Ops Dashboard

The Ops Dashboard aggregates deployment frequency, incident rate, and DORA metrics across all your services. It gives engineering leads a single pane of glass for monitoring operational health.

## How to Access

Navigate to **DevX Portal > Ops Dashboard** from the left sidebar.

## Understanding the DORA Metrics

The dashboard tracks the four key DORA (DevOps Research and Assessment) metrics:

| Metric | What It Measures |
|--------|-----------------|
| Deployment Frequency | How often your teams deploy to production |
| Lead Time for Changes | The time elapsed from code commit to production deployment |
| Change Failure Rate | The percentage of deployments that trigger an incident |
| Mean Time to Recovery | The average time it takes to resolve an incident |

These metrics are collected automatically when your ArgoCD and PagerDuty integrations are configured under **Portal Config > Integrations**.

## Additional Dashboard Sections

### Recent Deployments

A chronological list of deployment events across all services, showing:

- Service name
- Deployed version
- Target environment
- Outcome (success or failed)

### Recent Incidents

A summary of the latest incidents from the DRM tracker, including severity, affected service, and resolution time. Use this alongside the deployments list to correlate deployment activity with incident spikes.

## Triggering a Manual Data Collection

Metrics are collected on a regular schedule. If you need up-to-the-minute data:

1. Open the Ops Dashboard.
2. Click the **Collect Now** button.
3. The dashboard will refresh with the latest data once the collection cycle completes.

![Ops Dashboard showing DORA metrics, recent deployments, and incidents](/screenshots/devx-ops-dashboard.png)
