---
title: "CI/CD Pipelines"
description: "View a consolidated history of CI/CD pipeline runs across all services with success rates and per-run detail in Krado One."
---

# CI/CD Pipelines

The Pipelines view provides a consolidated view of CI/CD pipeline runs across all your services. Monitor build health, identify failing services, and drill into individual runs for detailed information.

## How to Access

Navigate to **Platform Portal > Pipelines** from the left sidebar.

## Viewing Pipeline Runs

Each pipeline run displays the following information:

| Field | Description |
|-------|-------------|
| Service | The service this pipeline belongs to |
| Branch | The Git branch that triggered the run |
| Status | Success, Failed, Running, or Cancelled |
| Duration | How long the run took to complete |
| Triggered At | The timestamp when the run started |
| Commit | The short SHA and commit message |

## Understanding Pipeline Metrics

A stats panel at the top of the page summarizes your pipeline health over the selected time period:

- **Total Runs** -- the number of pipeline executions
- **Success Rate** -- the percentage of runs that completed successfully
- **Average Duration** -- the mean build time across all runs
- **Most Frequently Failing Service** -- the service with the highest failure count

Use these metrics to identify bottlenecks and services that need attention.

## Integrating with Your CI System

Pipeline run data is sent to Krado One by your CI system. To set up the integration:

1. Navigate to **Portal Config > Integrations > CI/CD**.
2. Follow the setup instructions for your CI provider.
3. Once configured, pipeline runs will appear automatically in the Pipelines view.

Refer to the integration guide for your specific CI system for detailed setup steps.

![CI/CD Pipelines view showing run history and success rate metrics](/screenshots/platform-pipelines.png)
