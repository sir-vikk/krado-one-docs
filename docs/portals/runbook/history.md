---
title: "Execution History"
description: "View the complete execution history of all runbook runs with step-by-step output detail and failure debugging in Krado One."
---

# Execution History

The History page provides a complete record of every runbook execution -- whether triggered manually, through the AI Chat, or via a webhook. Use it to audit past runs, verify outcomes, and debug failures.

## How to Access

Navigate to **Runbook Portal > History** from the left sidebar.

## Viewing Execution Records

The history table displays the following columns:

| Column | Description |
|--------|-------------|
| Runbook | The name of the runbook that was executed |
| Trigger | How the execution was started (Manual, Chat, Webhook, or AI) |
| Status | Running, Completed, Failed, or Cancelled |
| Started | The timestamp when the execution began |
| Duration | The total time taken to complete or fail |

## Inspecting an Execution

Click any row in the history table to open the execution detail view. Here you can see:

- **Per-step status** -- each step shows its progression from Pending through Running to Completed, Failed, or Skipped
- **Step input and output** -- expandable sections showing the data sent to and received from each step
- **Error messages** -- detailed error information for any step that failed
- **Overall execution summary** -- a high-level outcome of the entire run

Running executions update in real time, refreshing every few seconds so you can monitor progress without manually reloading.

## Debugging Failures

When a runbook execution fails:

1. Open the failed execution from the history list.
2. Identify the step that failed by looking for the red status indicator.
3. Expand the step to view the error message and output data.
4. Use the input data to understand what was sent to the step.
5. Correct the issue in the runbook configuration or the target system, then re-run the runbook.

![Execution History showing run records with status and duration](/screenshots/runbook-history.png)
