---
title: "Workflows (n8n)"
description: "View and manage n8n automation workflows and their execution history from within the Krado One DevX Portal."
---

# Workflows (n8n)

The Workflows section gives platform engineers visibility into n8n automation workflows and their recent executions directly within Krado One. This eliminates the need to switch to the n8n interface for day-to-day monitoring.

## How to Access

Navigate to **DevX Portal > Workflows** from the left sidebar.

## Prerequisites

Before the Workflows view becomes active, you need to configure your n8n connection:

1. Go to **Portal Config > Integrations > n8n**.
2. Enter your n8n base URL (e.g., `http://n8n.internal:5678`).
3. Provide your n8n API key.
4. Click **Save** and verify the connection.

## What You Can See

| Section | Description |
|---------|-------------|
| Workflows List | All workflows defined in your n8n instance, with active/inactive status |
| Executions | Recent execution history showing status (Success, Failed, or Running) |
| Execution Detail | Input and output data for a specific workflow run |

## Connection to Golden Path

Golden Path templates trigger n8n workflows to provision new services. The Workflows view lets you monitor those provisioning runs and debug any failures without leaving Krado One.

If a Golden Path provisioning request fails, use this view to:

1. Find the corresponding workflow execution.
2. Open the execution detail to inspect the input and output of each step.
3. Identify the point of failure and take corrective action.

![Workflows list showing n8n workflow status and recent executions](/screenshots/devx-workflows.png)
