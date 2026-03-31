---
title: "Configuration Reference"
description: "All Krado One environment variables — core, database, frontend, integrations, and cloud providers."
---

# Configuration reference

All configuration is done via environment variables. Copy `.env.example` to `.env` and edit before starting.

Variables set via **Portal Config → Integrations** are stored in the database and take precedence over env vars after first boot.

---

## Core

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `8080` | Backend API port |
| `GIN_MODE` | `debug` | Set to `release` in production |
| `JWT_SECRET` | random | **Required in production.** 32+ random characters. If unset, sessions are lost on restart |
| `APP_EDITION` | `community` | Default tier when no license key is present: `community`, `pro`, or `enterprise`. |
| `EDITION_UPGRADE_URL` | — | URL shown in upgrade prompts |
| `LICENSE_KEY` | — | Pro/Enterprise license key. Validated offline (no external service). Also managed via Portal Config → License. |
| `LICENSE_KEY_FILE` | — | Path to a file containing the license key (alternative to `LICENSE_KEY`). |
| `DEVX_DATA_DIR` | `../data` | Directory for `license.key` and `tasks.db`. |

---

## Database

| Variable | Default | Description |
|----------|---------|-------------|
| `DB_DRIVER` | `sqlite` | `sqlite` or `postgres` |
| `DB_PATH` | `../data/tasks.db` | SQLite file path |
| `DB_DSN` | — | PostgreSQL DSN: `host=... user=... password=... dbname=... port=5432 sslmode=disable TimeZone=UTC` |

---

## Frontend

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_API_URL` | `http://localhost:8080/api` | Backend API URL (browser-visible) |
| `VITE_N8N_URL` | — | n8n URL for embedded workflow UI |

Set `VITE_API_URL` to your public backend URL before building the frontend image.

---

## JIRA

| Variable | Description |
|----------|-------------|
| `JIRA_URL` | Atlassian base URL |
| `JIRA_EMAIL` | Service account email |
| `JIRA_API_TOKEN` | Atlassian API token |

---

## Slack

| Variable | Description |
|----------|-------------|
| `SLACK_BOT_TOKEN` | `xoxb-...` bot token |
| `SLACK_WEBHOOK_URL` | Incoming webhook URL |
| `SLACK_SCAN_CHANNEL_IDS` | Comma-separated channel IDs to scan |
| `SLACK_MENTION_USER_ID` | User ID to @mention |

---

## n8n

| Variable | Description |
|----------|-------------|
| `N8N_URL` | n8n base URL |
| `N8N_API_KEY` | n8n API key |

---

## OpenAI

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | OpenAI API key |
| `OPENAI_MODEL` | Model ID (default: `gpt-4o`) |
| `OPENAI_SYSTEM_PROMPT` | Override assistant system prompt |

---

## GitHub

| Variable | Description |
|----------|-------------|
| `GITHUB_ORG` | GitHub organization name |
| `GITHUB_PAT` | PAT with `repo` + `read:org` scopes |

---

## Terraform Cloud

| Variable | Description |
|----------|-------------|
| `TERRAFORM_ORG` | Terraform Cloud organization |
| `TERRAFORM_API_TOKEN` | Terraform Cloud API token |
| `TERRAFORM_WORKSPACE_PREFIX` | Filter workspaces by prefix |

---

## ArgoCD

| Variable | Description |
|----------|-------------|
| `ARGOCD_URL` | ArgoCD server URL |
| `ARGOCD_API_TOKEN` | ArgoCD API token |

---

## PagerDuty

| Variable | Description |
|----------|-------------|
| `PAGERDUTY_API_KEY` | PagerDuty REST API key |

---

## Prometheus

| Variable | Description |
|----------|-------------|
| `PROMETHEUS_URL` | Prometheus base URL |

---

## AWS

| Variable | Description |
|----------|-------------|
| `AWS_ACCESS_KEY_ID` | AWS access key |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key |
| `AWS_REGION` | Primary region, e.g. `us-east-1` |

---

## GCP

| Variable | Description |
|----------|-------------|
| `GCP_PROJECT_ID` | GCP project ID |
| `GCP_SERVICE_ACCOUNT_JSON` | Service account JSON (base64 or path) |

---

## Azure

| Variable | Description |
|----------|-------------|
| `AZURE_TENANT_ID` | Azure tenant ID |
| `AZURE_CLIENT_ID` | App registration client ID |
| `AZURE_CLIENT_SECRET` | App registration client secret |
| `AZURE_SUBSCRIPTION_ID` | Subscription to inventory |

---

## Google Calendar

| Variable | Description |
|----------|-------------|
| `GOOGLE_CALENDAR_ID` | Calendar ID for maintenance events |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | Service account JSON (base64 or path) |

---

## SMTP

| Variable | Default | Description |
|----------|---------|-------------|
| `SMTP_HOST` | — | SMTP server hostname |
| `SMTP_PORT` | `587` | SMTP port |
| `SMTP_USER` | — | SMTP username |
| `SMTP_PASSWORD` | — | SMTP password |
| `SMTP_FROM` | `noreply@krado.local` | From address |

---

## Generating the OpenAPI spec

```bash
node scripts/generate-openapi.mjs
```

Output: `static/openapi/openapi.json` — used by the interactive API explorer at `/api-explorer`.
