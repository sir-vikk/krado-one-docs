---
title: "Integrations"
description: "Connect Krado One to your existing tools — JIRA, Slack, GitHub, cloud providers, and more."
---

# Integrations

Krado One connects to the tools your team already uses. All integrations are configured through the UI at **Portal Config → Integrations**, organized by category.

Each integration page lets you enter the required credentials, test the connection, and save. Once configured, the integration is available across the relevant portals.

---

## JIRA

**What it does:** Syncs tasks and issues between Krado One and your Atlassian JIRA instance. JIRA issues appear in the Task Management portal.

**How to set it up:**

1. Navigate to **Portal Config → Integrations → Productivity → JIRA**
2. Fill in the following fields:
   - **Atlassian URL** -- your Atlassian base URL (e.g. `https://acme.atlassian.net`)
   - **Service Account Email** -- the email address of the JIRA service account
   - **API Token** -- an Atlassian API token for the service account
3. Save the configuration

![JIRA integration settings](/screenshots/integration-jira.png)

---

## Slack

**What it does:** Sends notifications to Slack channels and scans channels for relevant messages. Alerts and updates from Krado One appear directly in your team's Slack workspace.

**How to set it up:**

1. Navigate to **Portal Config → Integrations → Productivity → Slack**
2. Fill in the following fields:
   - **Bot Token** -- your Slack bot OAuth token
   - **Webhook URL** -- an incoming webhook URL for sending notifications (optional)
   - **Scan Channel IDs** -- comma-separated list of channel IDs to scan for messages (optional)
   - **Mention User ID** -- a Slack user ID to @mention in alerts (optional)
3. Save the configuration

![Slack integration settings](/screenshots/integration-slack.png)

---

## n8n

**What it does:** Connects Krado One to your n8n instance for workflow automation. Workflows can be triggered from portals or embedded directly in the UI.

**How to set it up:**

1. Navigate to **Portal Config → Integrations → Productivity → n8n**
2. Fill in the following fields:
   - **n8n URL** -- the base URL of your n8n instance
   - **API Key** -- your n8n API key
3. Save the configuration

![n8n integration settings](/screenshots/integration-n8n.png)

---

## OpenAI (AI Assistant)

**What it does:** Powers the AI Assistant chatbot within Krado One. The assistant can help with troubleshooting, documentation lookups, and platform guidance. Requires the Pro or Enterprise edition.

**How to set it up:**

1. Navigate to **Portal Config → Integrations → AI**
2. Fill in the following fields:
   - **API Key** -- your OpenAI API key
   - **Model** -- the model to use (defaults to `gpt-4o` if left blank)
   - **System Prompt** -- a custom system prompt to tailor the assistant's behavior (optional)
3. Save the configuration

![OpenAI integration settings](/screenshots/integration-openai.png)

---

## GitHub

**What it does:** Connects your GitHub organization to Krado One for repository visibility, CI/CD pipeline data, and service catalog enrichment.

**How to set it up:**

1. Navigate to **Portal Config → Integrations → Developer Tools → GitHub**
2. Fill in the following fields:
   - **Organization** -- your GitHub organization name
   - **Personal Access Token** -- a PAT with `repo` and `read:org` scopes
3. Save the configuration

![GitHub integration settings](/screenshots/integration-github.png)

---

## Terraform Cloud

**What it does:** Surfaces Terraform Cloud workspace data in Krado One, giving you visibility into infrastructure state and runs.

**How to set it up:**

1. Navigate to **Portal Config → Integrations → Developer Tools → Terraform**
2. Fill in the following fields:
   - **Organization** -- your Terraform Cloud organization name
   - **API Token** -- a Terraform Cloud API token
   - **Workspace Prefix** -- filter workspaces by a prefix (optional)
3. Save the configuration

![Terraform Cloud integration settings](/screenshots/integration-terraform.png)

---

## ArgoCD

**What it does:** Integrates ArgoCD application and sync status into Krado One, providing visibility into your GitOps deployments.

**How to set it up:**

1. Navigate to **Portal Config → Integrations → Observability → ArgoCD**
2. Fill in the following fields:
   - **ArgoCD URL** -- the URL of your ArgoCD server
   - **API Token** -- an ArgoCD API token
3. Save the configuration

![ArgoCD integration settings](/screenshots/integration-argocd.png)

---

## PagerDuty

**What it does:** Pulls incident and on-call data from PagerDuty into the DRM and Incident Tracker portals.

**How to set it up:**

1. Navigate to **Portal Config → Integrations → Observability → PagerDuty**
2. Fill in the following fields:
   - **API Key** -- your PagerDuty REST API key
3. Save the configuration

![PagerDuty integration settings](/screenshots/integration-pagerduty.png)

---

## Prometheus

**What it does:** Connects to your Prometheus instance for metrics data, powering dashboards and alerting within Krado One.

**How to set it up:**

1. Navigate to **Portal Config → Integrations → Observability → Prometheus**
2. Fill in the following fields:
   - **Prometheus URL** -- the base URL of your Prometheus instance
3. Save the configuration

![Prometheus integration settings](/screenshots/integration-prometheus.png)

---

## Google Calendar

**What it does:** Syncs maintenance windows and scheduled events with a Google Calendar, so your team can see planned downtime alongside their regular calendar.

**How to set it up:**

1. Navigate to **Portal Config → Integrations → Google Calendar**
2. Fill in the following fields:
   - **Calendar ID** -- the Google Calendar ID for maintenance events
   - **Service Account JSON** -- your Google Cloud service account credentials (JSON format)
3. Save the configuration

![Google Calendar integration settings](/screenshots/integration-google-calendar.png)

---

## Cloud Providers (AWS, GCP, Azure)

**What it does:** Connects your cloud accounts to Krado One for resource inventory, cost visibility, and FinOps features. Requires the Pro or Enterprise edition.

### AWS

1. Navigate to **Portal Config → Integrations → Cloud → AWS**
2. Fill in the following fields:
   - **Access Key ID** -- your AWS access key
   - **Secret Access Key** -- your AWS secret key
   - **Region** -- the primary AWS region (e.g. `us-east-1`)
3. Save the configuration

### GCP

1. Navigate to **Portal Config → Integrations → Cloud → GCP**
2. Fill in the following fields:
   - **Project ID** -- your GCP project ID
   - **Service Account JSON** -- your GCP service account credentials (JSON format)
3. Save the configuration

### Azure

1. Navigate to **Portal Config → Integrations → Cloud → Azure**
2. Fill in the following fields:
   - **Tenant ID** -- your Azure tenant ID
   - **Client ID** -- the app registration client ID
   - **Client Secret** -- the app registration client secret
   - **Subscription ID** -- the Azure subscription to inventory
3. Save the configuration

![Cloud provider integration settings](/screenshots/integration-cloud-providers.png)

---

## SMTP (Email)

**What it does:** Configures outgoing email for notifications, password reset links, and alerts sent from Krado One.

**How to set it up:**

1. Navigate to **Portal Config → Integrations → SMTP**
2. Fill in the following fields:
   - **SMTP Host** -- your SMTP server hostname
   - **SMTP Port** -- the SMTP port (defaults to 587)
   - **Username** -- SMTP authentication username
   - **Password** -- SMTP authentication password
   - **From Address** -- the email address that messages are sent from
3. Save the configuration

![SMTP integration settings](/screenshots/integration-smtp.png)
