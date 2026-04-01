---
title: "Cloud Overview"
description: "Connect cloud providers and view a summary of your multi-cloud footprint including resource counts and spend snapshots in Krado One."
---

# Cloud Overview

The Cloud Overview is the landing page of the Cloud Portal. It summarizes your multi-cloud footprint, showing which providers are connected, total resource counts, and a high-level spend snapshot.

## How to Access

Navigate to **Cloud Portal** from the left sidebar. The overview loads as the default view.

## What the Dashboard Shows

### Provider Status

A status indicator for each supported cloud provider shows whether it is connected and operational:

- A **green** indicator means credentials are configured and the last sync completed successfully.
- A **grey** indicator means the provider has not been configured yet.
- A **red** indicator means the last sync encountered an error.

### Resource Summary

The resource summary displays the total number of discovered resources, broken down by provider. Click any provider card to jump directly to the filtered Resources view for that provider.

## Connecting a Cloud Provider

To start discovering resources and tracking costs, connect your cloud providers:

1. Navigate to **Portal Config > Cloud Providers**.
2. Select the provider you want to connect:
    - **AWS** -- enter your Access Key ID, Secret Access Key, and region
    - **GCP** -- upload your Service Account JSON key
    - **Azure** -- enter your Tenant ID, Client ID, Client Secret, and Subscription ID
3. Click **Save** to store the credentials.
4. Return to the Cloud Overview and click **Sync Now** to pull the initial resource inventory.

Once connected, Krado One will sync resources on a regular schedule.

![Cloud Overview dashboard showing provider status and resource summary](/screenshots/cloud-overview.png)
