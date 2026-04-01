---
title: "Maintenance Windows"
description: "Schedule planned downtime, notify affected teams and customers, and track maintenance windows through their lifecycle in Krado One."
---

# Maintenance Windows

Maintenance Windows let you plan and communicate scheduled downtime across your organization. By registering upcoming maintenance in Krado One, you keep your teams informed, your customers notified, and your operations traceable.

## How to Access

Navigate to **DRM Portal > Maintenance** from the left sidebar.

## Scheduling a Maintenance Window

1. Click **+ Schedule Maintenance** at the top of the maintenance list.
2. Fill in the required fields:

    | Field | Description |
    |-------|-------------|
    | Title | A short description of the maintenance activity |
    | Description | Details of what work will be performed |
    | Start Time | The scheduled start date and time |
    | End Time | The scheduled end date and time |

3. Optionally, specify additional context:

    - **Affected Products** -- select the products that will be degraded or offline during the window
    - **Affected Customers** -- identify customer segments that should be notified
    - **Team** -- assign the responsible on-call team

4. Click **Save** to create the maintenance window.

![Maintenance window creation form](/screenshots/drm-maintenance-create.png)

## Managing the Maintenance Lifecycle

Each maintenance window moves through a defined lifecycle. Use the action buttons on the maintenance detail page to transition between stages:

| Action | When to Use |
|--------|-------------|
| **Notify** | Send an email notification to the assigned team and affected customers before the window begins |
| **Start** | Mark the window as Active when maintenance work begins |
| **Complete** | Mark the window as done once maintenance is finished successfully |
| **Cancel** | Mark the window as cancelled if the maintenance is called off |

## Viewing Upcoming Maintenance

Use the **Upcoming** filter to display only maintenance windows scheduled within the next 7 days. This view helps on-call teams prepare in advance and ensures nothing is missed.

![Maintenance windows list showing upcoming and past windows](/screenshots/drm-maintenance-list.png)
