---
title: "Creating a Runbook"
description: "Build operational runbooks with ordered steps, multiple step types, and configurable triggers in Krado One."
---

# Creating a Runbook

The runbook builder lets you define a named, ordered sequence of operational steps. Each step has a specific type and configuration, allowing you to automate a wide range of tasks from health checks to incident remediation.

## How to Access

Navigate to **Runbook Portal** and click **+ New Runbook**, or click **Edit** on an existing runbook card.

## Step 1: Define Basic Information

Start by filling in the runbook details:

| Field | Description |
|-------|-------------|
| Name | A unique name for the runbook |
| Description | A summary of what this runbook does |
| Tags | Comma-separated tags for filtering and AI matching (e.g., `kubernetes`, `database`) |

![Runbook builder showing basic information and step list](/screenshots/runbook-builder.png)

## Step 2: Configure Triggers

Runbooks can be triggered in several ways:

- **Manual** -- run directly from the Runbooks page
- **AI Chat** -- the AI assistant can suggest and execute the runbook based on natural language queries
- **Webhook** -- expose the runbook as a webhook endpoint with a secret token for external automation

Select the appropriate trigger types for your use case.

## Step 3: Add Steps

Click **+ Add Step** to add a new step to the runbook. Each step requires:

- **Order** -- the execution sequence (drag to reorder)
- **Name** -- a label that appears in the execution output
- **Type** -- one of the supported step types

### Available Step Types

| Type | What It Does |
|------|-------------|
| **HTTP** | Makes an HTTP request to any URL (supports GET, POST, PUT, DELETE, and PATCH methods) |
| **Jira** | Creates an issue, adds a comment, or searches tickets in your connected Jira instance |
| **Slack** | Posts a message to a specified Slack channel |
| **Shell** | Runs a shell command on the server |
| **MCP** | Calls a tool on a configured MCP server |
| **Condition** | Branches execution based on a previous step's output |

For each step, fill in the type-specific configuration fields such as the target URL, command, message content, or condition logic.

![Step configuration showing type selection and type-specific fields](/screenshots/runbook-step-config.png)

## Step 4: Review Safety Validation

After adding or modifying steps, Krado One automatically re-evaluates the runbook's risk level and displays a color-coded alert:

- **Safe** (green) -- only read operations
- **Warning** (yellow) -- includes write operations
- **Dangerous** (red) -- includes destructive operations

For runbooks classified as **Dangerous**, you must explicitly acknowledge the risk before saving.

## Step 5: Save the Runbook

Click **Save** to finalize the runbook. It will immediately appear in the runbooks list and be available for execution.
