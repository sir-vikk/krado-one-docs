---
title: "Teams"
description: "Create and manage on-call teams, assign notification emails, and link teams to incidents and maintenance windows in Krado One."
---

# Teams

Teams represent the on-call groups in your organization that are responsible for responding to and resolving incidents. By assigning incidents and maintenance windows to a team, Krado One ensures notifications reach the right people at the right time.

## How to Access

Navigate to **DRM Portal > Teams** from the left sidebar.

## Creating a Team

1. Click the **+ Add Team** button at the top of the teams list.
2. Fill in the following fields:

    | Field | Description |
    |-------|-------------|
    | Name | A display name for the team (e.g., "Platform On-Call" or "Database Team") |
    | Description | A brief summary of the team's scope or area of responsibility |
    | Email Addresses | One or more notification recipient email addresses |

3. Click **Save** to create the team.

You can add multiple email addresses to a single team. All listed addresses will receive notifications when the team is assigned to an incident or maintenance window.

## Linking Teams to Incidents and Maintenance Windows

When creating or editing an incident or a maintenance window, select a team from the **Team** dropdown. This associates the record with that team and triggers email notifications to all registered team members.

## How Notifications Work

Krado One sends email notifications to a team's registered addresses when:

- A new incident is created and assigned to the team
- A maintenance window is created and the team is assigned
- The **Notify** action is triggered on a maintenance window, sending an immediate alert

This ensures your on-call responders are informed without needing to monitor the portal continuously.

![Teams list showing team names, descriptions, and notification emails](/screenshots/drm-teams.png)
