---
title: "Cloud Costs"
description: "View cloud spend breakdowns by provider and service with trend charts over customizable date ranges in Krado One."
---

# Cloud Costs

The Costs page provides visibility into your cloud spend across all connected providers. View breakdowns by provider and service, and track spending trends over time to identify optimization opportunities.

## How to Access

Navigate to **Cloud Portal > Costs** from the left sidebar.

## Understanding the Spend Breakdown

The costs page presents your spending data in multiple views:

- **By Provider** -- a chart showing spend per cloud vendor (AWS, GCP, Azure), helping you understand how costs are distributed across providers.
- **By Service** -- a breakdown of the top cost drivers within each provider (e.g., EC2, RDS, S3, BigQuery), so you can identify which services consume the most budget.
- **Over Time** -- a trend line showing daily or monthly spend, making it easy to spot unexpected spikes or gradual increases.

## Interpreting the Charts

When reviewing your cost data:

1. Select a **date range** using the date picker to focus on a specific period.
2. Review the **By Provider** chart to understand your overall cloud cost distribution.
3. Drill into the **By Service** breakdown to identify your largest cost drivers.
4. Check the **Over Time** trend to determine if spending is stable, growing, or declining.

Look for anomalies such as sudden spend increases, which may indicate misconfigured resources, unexpected traffic spikes, or orphaned infrastructure.

## Prerequisites

Cost data is pulled from each provider's billing APIs. Your cloud provider credentials must include billing read permissions in addition to the standard resource read permissions configured during setup.

![Cloud Costs dashboard showing spend breakdown by provider and service](/screenshots/cloud-costs.png)
