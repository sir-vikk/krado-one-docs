---
title: "Workflows (n8n)"
description: "View and manage n8n automation workflows and their recent executions from within the DevX Portal."
---

# Workflows (n8n)

**Route:** `/workflows` · **Edition:** Pro+

The Workflows view proxies the n8n API to show all automation workflows and their recent executions. This gives platform engineers visibility into running automations without leaving the DevX Portal.


## Prerequisites

Configure your n8n connection under **Portal Config → Integrations → n8n** with:
- n8n base URL (e.g. `http://localhost:5678`)
- n8n API key

## What you can see

| Section | Description |
|---------|-------------|
| Workflows list | All workflows in n8n with active/inactive status |
| Executions | Recent execution history with status (success / failed / running) |
| Execution detail | Input/output for a specific run |

## Connection to Golden Path

Golden path templates trigger n8n workflows to provision new services. The workflows view lets you see those provisioning runs and debug failures without switching to the n8n UI.
