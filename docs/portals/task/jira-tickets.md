---
title: "JIRA Tickets"
description: "Browse, import, link, and create JIRA tickets directly from Krado One without leaving the platform."
---

# JIRA Tickets

The JIRA Tickets view connects Krado One to your JIRA instance, letting you browse open issues, import them as local tasks, and create new JIRA tickets -- all without leaving the platform.

## How to Access

Navigate to **Task Portal > JIRA Tickets** from the left sidebar.

## Prerequisites

Before the JIRA Tickets view becomes active, configure your JIRA connection:

1. Go to **Portal Config > Integrations > JIRA**.
2. Enter your JIRA Cloud URL (e.g., `https://your-company.atlassian.net`).
3. Provide the user email and API token with appropriate access.
4. Map at least one JIRA project to Krado One.
5. Click **Save** to activate the integration.

## Browsing Tickets

Once connected, the JIRA Tickets view displays open issues from your mapped JIRA projects. Use the **board filter** to switch between different JIRA project boards.

## Working with Tickets

| Action | Description |
|--------|-------------|
| **Browse tickets** | View open issues from your mapped JIRA projects |
| **Import a ticket** | Pull a JIRA issue into the Task Board as a local task |
| **Link a ticket** | Attach an existing local task to a JIRA issue key |
| **Create a ticket** | Push a new issue to JIRA directly from Krado One |
| **Trigger daily sync** | Re-run the JIRA sync on demand to pull the latest data |

## How Sync Works

Krado One checks JIRA on a configurable schedule (daily by default). When a JIRA issue is synced:

- The corresponding task on your board shows a JIRA badge with the issue key.
- Status changes made in JIRA are reflected in Krado One on the next sync cycle.
- You can trigger an immediate sync at any time using the **Sync Now** button.

![JIRA Tickets view showing imported issues and sync status](/screenshots/task-jira-tickets.png)
