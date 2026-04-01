---
title: "Cloud Resources"
description: "View and filter all discovered cloud resources across connected providers with sync controls in Krado One."
---

# Cloud Resources

The Resources page lists every cloud resource discovered across all your connected providers. Use filters and search to find specific resources and trigger syncs to keep your inventory current.

## How to Access

Navigate to **Cloud Portal > Resources** from the left sidebar.

## Viewing Resources

Each resource is displayed in a table with the following columns:

| Column | Description |
|--------|-------------|
| Name | The resource identifier or display name |
| Type | The resource type (e.g., EC2 instance, GCS bucket, Azure VM) |
| Provider | AWS, GCP, or Azure |
| Region | The deployment region |
| Status | The current state (Running, Stopped, Available, etc.) |
| Last Synced | When this resource record was last updated |

## Using Filters

Narrow your view using the available filters:

1. **Provider** -- show resources from a specific cloud provider.
2. **Region** -- filter by deployment region.
3. **Resource Type** -- show only a specific type of resource.
4. **Status** -- filter by current resource state.
5. **Search** -- use the search bar to find resources by name or ID.

Combine multiple filters to quickly locate the resources you need.

## Triggering a Sync

Resources are collected on a configurable schedule. If you need to see the latest state:

1. Navigate to the **Cloud Overview** page.
2. Click the **Sync Now** button.
3. Return to the Resources page once the sync completes to see updated data.

![Cloud Resources table with filters and resource details](/screenshots/cloud-resources.png)
