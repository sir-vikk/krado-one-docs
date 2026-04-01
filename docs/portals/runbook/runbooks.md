---
title: "All Runbooks"
description: "Browse, filter, and run operational runbooks with risk level indicators and tag-based organization in Krado One."
---

# All Runbooks

The Runbooks page is the home screen of the Runbook Portal. It displays all operational runbooks defined in your organization, with filtering options to help you quickly find the one you need.

## How to Access

Navigate to **Runbook Portal** from the left sidebar. The runbooks list loads as the default view.

## Browsing Runbooks

Each runbook is displayed as a card showing:

- **Name and description** -- what the runbook does
- **Tags** -- categorization labels (e.g., `kubernetes`, `database`, `incident`)
- **Risk level badge** -- a color-coded indicator (Safe, Warning, or Dangerous)
- **Step count** -- the number of steps in the runbook
- **Run** and **Edit** actions

## Understanding Risk Levels

Krado One automatically evaluates the risk level of each runbook based on its steps:

| Risk Level | Indicator | Triggered By |
|------------|-----------|-------------|
| **Safe** | Green | Read-only operations such as queries and health checks |
| **Warning** | Yellow | Steps that perform write operations, post messages, or run shell commands |
| **Dangerous** | Red | Steps that delete resources, modify infrastructure, or perform destructive operations |

The risk level helps you and your team understand the potential impact before executing a runbook.

## Running a Runbook

1. Find the runbook you want to execute using search or filters.
2. Click the **Run** button on the runbook card.
3. Confirm the execution when prompted (Dangerous runbooks require explicit acknowledgment).
4. You will be redirected to the execution view where you can monitor progress in real time.

## Filtering Runbooks

Use the toolbar filters to narrow the list:

- **Search** -- filter by name or description
- **Tag** -- filter by one or more tags
- **Risk Level** -- show only Safe, Warning, or Dangerous runbooks

![Runbooks list showing cards with risk levels, tags, and action buttons](/screenshots/runbook-list.png)
