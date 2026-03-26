---
sidebar_position: 4
---

# Runbook Portal

The Runbook Portal lets you build, execute, and audit operational runbooks — step-by-step playbooks for common ops tasks like incident response, database queries, deployment verification, and health checks.

**Route:** `/rb` · **Edition:** Pro+

![Runbook Portal — step-based operational runbooks](/assets/screenshots/runbook-portal.png)

---

## Runbooks

A runbook is an ordered list of steps. Each step has a type that determines how it executes.

### Step types

| Type | What it does |
|------|-------------|
| `http` | Makes an HTTP request (GET/POST/PUT/DELETE) to any URL |
| `jira` | Creates or updates a JIRA ticket |
| `slack` | Sends a Slack message or thread reply |
| `shell` | Executes a shell command (MCP server required) |
| `mcp` | Calls an MCP tool on a connected MCP server |
| `prompt` | Pauses for manual confirmation before continuing |
| `condition` | Branches execution based on the output of a previous step |

### Creating a runbook

Go to **Runbook Portal → New Runbook**. Fill in:
- **Name** and **description**
- **Risk level** (low / medium / high / critical) — affects confirmation requirements
- **Tags** — for AI-powered matching
- **Steps** — add and reorder steps using the visual builder

### Safety validation

Before execution, the backend validates:
1. All required environment variables and MCP servers are reachable
2. Risk level matches the user's permission
3. No circular step dependencies

High and critical runbooks require an explicit confirmation modal before execution starts.

---

## Execution

Click **Run** on any runbook to start an execution. You'll see:
- Live step output as each step completes
- Pass/fail status per step
- Total elapsed time
- Full execution log (persisted, linkable)

Executions can be paused at `prompt` steps for manual intervention.

### Execution history

**Runbook Portal → History** shows all past executions with filtering by runbook, user, status, and date range.

---

## AI-powered selection

From the chat interface (`/rb/chat`), describe what you need in plain English:

> "I need to restart the payments service and verify it's healthy"

The AI matches your description against runbook tags and descriptions and recommends the best runbook to run. It can also walk you through execution step by step.

---

## MCP Servers

MCP (Model Context Protocol) servers allow runbooks to interact with your infrastructure — executing queries, running scripts, calling internal APIs.

Go to **Runbook Portal → MCP Servers** to register servers:

| Field | Description |
|-------|-------------|
| Name | Display name |
| URL | MCP server endpoint |
| Auth token | Bearer token (stored encrypted) |

MCP servers are health-checked on registration. Step execution fails fast if the MCP server is unreachable.

---

## API reference

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/runbooks` | List runbooks |
| `POST` | `/api/runbooks` | Create runbook |
| `GET` | `/api/runbooks/:id` | Get runbook |
| `PUT` | `/api/runbooks/:id` | Update runbook |
| `DELETE` | `/api/runbooks/:id` | Delete runbook |
| `POST` | `/api/runbooks/:id/execute` | Start execution |
| `GET` | `/api/runbooks/:id/executions` | List executions |
| `GET` | `/api/runbooks/:id/executions/:execId` | Execution detail + logs |
| `GET` | `/api/mcp-servers` | List MCP servers |
| `POST` | `/api/mcp-servers` | Register MCP server |
| `DELETE` | `/api/mcp-servers/:id` | Remove MCP server |
