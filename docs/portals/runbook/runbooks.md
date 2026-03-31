---
title: "All Runbooks"
description: "The home screen of the Runbook Portal — browse all runbooks with filtering by tag and risk level."
---

# All Runbooks

**Route:** `/rb` · **Edition:** Pro+

The runbooks list is the home screen of the Runbook Portal. It shows all runbooks defined in the system with filtering by tag and risk level.


## Runbook cards

Each card shows:
- Runbook name and description
- Tags (e.g. `kubernetes`, `database`, `incident`)
- **Risk level badge** — Safe (green) / Warning (yellow) / Dangerous (red)
- Step count
- **Run** and **Edit** actions

## Risk levels

The platform automatically evaluates risk when you save a runbook:

| Level | Triggered by |
|-------|-------------|
| **Safe** | Read-only steps (GET requests, queries) |
| **Warning** | Any shell step, Jira comment, write API call |
| **Dangerous** | DELETE/PUT/PATCH HTTP, `rm`, `kubectl delete`, `terraform destroy` |

## Filters

- **Search** — filter by name or description
- **Tag** — filter by one or more tags
- **Risk level** — show only Safe / Warning / Dangerous runbooks
