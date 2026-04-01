---
title: "Status Page"
description: "Manage the operational status of your user-facing services and communicate service health during incidents in Krado One."
---

# Status Page

The Status Page tracks the operational status of your user-facing services and provides a view that customers and internal teams can reference during incidents. It serves as the source of truth for current service health.

## How to Access

Navigate to **Platform Portal > Status Page** from the left sidebar.

## Understanding Service Statuses

Each service on the status page can be in one of the following states:

| Status | Meaning |
|--------|---------|
| **Operational** | All systems are functioning normally |
| **Degraded Performance** | The service is operational but slower than expected |
| **Partial Outage** | Some users are experiencing issues |
| **Major Outage** | The service is unavailable |
| **Under Maintenance** | Planned maintenance is in progress |

## Updating Service Status During an Incident

When an incident occurs and you need to communicate the impact:

1. Open the **Status Page** from the left sidebar.
2. Locate the affected service.
3. Click the service to open its status editor.
4. Select the appropriate status from the dropdown.
5. Add a reason or description for the status change.
6. Click **Save** to update the status.

The status change is timestamped and visible immediately. Once the incident is resolved, clear the override to return the service to its normal status.

## Configuring Which Services Appear

To manage which services are displayed on the status page:

1. Open the **Status Page settings** panel.
2. Select the services that should be visible.
3. Customize the display names as needed.
4. Save your configuration.

![Status Page showing service health indicators and current statuses](/screenshots/platform-status-page.png)
