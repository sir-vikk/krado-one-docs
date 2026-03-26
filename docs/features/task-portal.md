---
sidebar_position: 1
---

# Task portal

Kanban tasks, JIRA alignment, Slack/email scan, n8n workflows, and stats — same conceptual model as the OSS line, with the **full** portal navigation when **task** and **IDP** flags allow.

![Task portal](/assets/screenshots/task-portal.png)

## API

| Area | Base path |
|------|-----------|
| Tasks | `/api/tasks` |
| JIRA | `/api/jira/*` |
| Ticketing | `/api/ticketing/*` |
| Slack / scan / email | `/api/slack/*`, `/api/scan/*`, `/api/email-scan/*` |
| n8n | `/api/n8n/*` |

**Pro** tier may be required for some integrations per `RequireMin(Pro)` on those route groups.

[API explorer](/api-explorer) lists every operation.
