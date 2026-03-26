---
sidebar_position: 2
---

# Cloud Resources

**Route:** `/cloud-portal/resources` · **Edition:** Pro+ · **Beta**

The Resources page lists every cloud resource discovered across all connected providers, with filtering by provider, region, and resource type.

![Cloud Resources](/assets/screenshots/cloud/resources.png)

## Columns

| Column | Description |
|--------|-------------|
| Name | Resource identifier or display name |
| Type | EC2 instance / GCS bucket / Azure VM / etc. |
| Provider | AWS / GCP / Azure |
| Region | Deployment region |
| Status | Running / Stopped / Available / etc. |
| Last synced | When this record was last updated |

## Filters

Filter by provider, region, resource type, and status. Use the search bar to find resources by name or ID.

## Sync

Resources are collected on a configurable schedule. Click **Sync Now** on the Overview page to trigger an immediate refresh.
