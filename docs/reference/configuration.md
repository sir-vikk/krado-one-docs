---
title: "Settings and Configuration"
description: "Manage Krado One settings through the UI and learn about advanced configuration options for self-hosted deployments."
---

# Settings and Configuration

Most Krado One settings are managed through the **Portal Config** UI. From Portal Config, you can configure integrations, manage users, set up SSO, adjust feature flags, and more -- all without touching configuration files or restarting the server.

![Portal Config settings page](/screenshots/portal-config-settings.png)

| Setting area | Where to find it |
|-------------|-----------------|
| Integrations | Portal Config → Integrations |
| Users and Roles | Portal Config → Users / Roles & Permissions |
| SSO | Portal Config → SSO |
| Feature Flags | Portal Config → Portal Settings |
| License | Portal Config → License |
| Organization | Portal Config → Organization |

For details on each area, see the dedicated guides:

- [Integrations](../admin/integrations)
- [Users, Roles, and Permissions](../admin/users-and-roles)
- [SSO](../admin/sso)
- [Feature Flags](../admin/feature-flags)
- [Editions and Licensing](../concepts/editions)
- [Organizations](../concepts/organization)

---

## Advanced configuration (self-hosted)

If you are self-hosting Krado One, certain low-level settings are managed through environment variables. These are typically set in your `.env` file or container orchestration config before starting the application.

Settings configured through **Portal Config → Integrations** in the UI are stored in the database and take precedence over environment variables after the first save.

### Core

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `8080` | Backend API port |
| `GIN_MODE` | `debug` | Set to `release` in production |
| `JWT_SECRET` | random | **Required in production.** 32+ random characters. If unset, sessions are lost on restart |
| `APP_EDITION` | `community` | Default tier when no license key is present: `community`, `pro`, or `enterprise` |
| `EDITION_UPGRADE_URL` | -- | URL shown in upgrade prompts |
| `LICENSE_KEY` | -- | Pro/Enterprise license key (also manageable via Portal Config → License) |
| `LICENSE_KEY_FILE` | -- | Path to a file containing the license key (alternative to `LICENSE_KEY`) |
| `DEVX_DATA_DIR` | `../data` | Directory for data files |

### Database

| Variable | Default | Description |
|----------|---------|-------------|
| `DB_DRIVER` | `sqlite` | `sqlite` or `postgres` |
| `DB_PATH` | `../data/tasks.db` | SQLite file path (used when driver is `sqlite`) |
| `DB_DSN` | -- | PostgreSQL connection string (used when driver is `postgres`) |

### Frontend

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_API_URL` | `http://localhost:8080/api` | Backend API URL visible to the browser |
| `VITE_N8N_URL` | -- | n8n URL for the embedded workflow UI |

Set `VITE_API_URL` to your public backend URL before building the frontend image.

### JIRA

| Variable | Description |
|----------|-------------|
| `JIRA_URL` | Atlassian base URL |
| `JIRA_EMAIL` | Service account email |
| `JIRA_API_TOKEN` | Atlassian API token |

### Slack

| Variable | Description |
|----------|-------------|
| `SLACK_BOT_TOKEN` | Slack bot OAuth token |
| `SLACK_WEBHOOK_URL` | Incoming webhook URL |
| `SLACK_SCAN_CHANNEL_IDS` | Comma-separated channel IDs to scan |
| `SLACK_MENTION_USER_ID` | User ID to @mention |

### n8n

| Variable | Description |
|----------|-------------|
| `N8N_URL` | n8n base URL |
| `N8N_API_KEY` | n8n API key |

### OpenAI

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | OpenAI API key |
| `OPENAI_MODEL` | Model ID (default: `gpt-4o`) |
| `OPENAI_SYSTEM_PROMPT` | Override assistant system prompt |

### GitHub

| Variable | Description |
|----------|-------------|
| `GITHUB_ORG` | GitHub organization name |
| `GITHUB_PAT` | Personal access token with `repo` and `read:org` scopes |

### Terraform Cloud

| Variable | Description |
|----------|-------------|
| `TERRAFORM_ORG` | Terraform Cloud organization |
| `TERRAFORM_API_TOKEN` | Terraform Cloud API token |
| `TERRAFORM_WORKSPACE_PREFIX` | Filter workspaces by prefix |

### ArgoCD

| Variable | Description |
|----------|-------------|
| `ARGOCD_URL` | ArgoCD server URL |
| `ARGOCD_API_TOKEN` | ArgoCD API token |

### PagerDuty

| Variable | Description |
|----------|-------------|
| `PAGERDUTY_API_KEY` | PagerDuty REST API key |

### Prometheus

| Variable | Description |
|----------|-------------|
| `PROMETHEUS_URL` | Prometheus base URL |

### AWS

| Variable | Description |
|----------|-------------|
| `AWS_ACCESS_KEY_ID` | AWS access key |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key |
| `AWS_REGION` | Primary region (e.g. `us-east-1`) |

### GCP

| Variable | Description |
|----------|-------------|
| `GCP_PROJECT_ID` | GCP project ID |
| `GCP_SERVICE_ACCOUNT_JSON` | Service account JSON (base64 or path) |

### Azure

| Variable | Description |
|----------|-------------|
| `AZURE_TENANT_ID` | Azure tenant ID |
| `AZURE_CLIENT_ID` | App registration client ID |
| `AZURE_CLIENT_SECRET` | App registration client secret |
| `AZURE_SUBSCRIPTION_ID` | Subscription to inventory |

### Google Calendar

| Variable | Description |
|----------|-------------|
| `GOOGLE_CALENDAR_ID` | Calendar ID for maintenance events |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | Service account JSON (base64 or path) |

### SMTP

| Variable | Default | Description |
|----------|---------|-------------|
| `SMTP_HOST` | -- | SMTP server hostname |
| `SMTP_PORT` | `587` | SMTP port |
| `SMTP_USER` | -- | SMTP username |
| `SMTP_PASSWORD` | -- | SMTP password |
| `SMTP_FROM` | `noreply@krado.local` | From address |
