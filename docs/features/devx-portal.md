---
sidebar_position: 3
---

# DevX Portal

The DevX Portal is the internal developer platform hub — service catalog, golden path provisioning, ops dashboards, DORA metrics, scorecards, and an AI assistant.

**Route:** `/catalog` (entry) · **Edition:** Community+

![DevX Portal — service catalog and ops hub](/assets/screenshots/devx-portal.png)

---

## Service Catalog

Register and discover every service your organization runs.

### Registering a service

Go to **DevX Portal → All Services → Register Service**. Key fields:

| Field | Description |
|-------|-------------|
| Name | Service name |
| Owner team | Team responsible |
| Tier | Critical / High / Medium / Low |
| Type | Backend / Frontend / Library / Data / Infrastructure |
| Repository | GitHub / GitLab URL |
| SLO | Uptime/latency targets |

### Dependency graph

The dependency graph (`/dependency-graph`) visualizes service-to-service relationships. Hover a node to see upstream/downstream dependencies. Click to navigate to the service detail.

### Scorecards

Scorecards evaluate services against a rubric (documentation, observability, on-call, CI/CD). Scores are computed from catalog metadata + integration data and shown in the **Scorecards** tab.

---

## Golden Path

Golden Path provides self-service provisioning — developers pick a template, fill in parameters, and the platform provisions infrastructure via n8n.

### Creating a template

Go to **DevX Portal → Golden Path** (admin). A template defines:
- Input parameters (name, region, tier, etc.)
- n8n workflow to trigger
- Expected output (repository URL, cluster name, etc.)

### Provisioning a service

Developers go to **Golden Path → Provision**, pick a template, fill in the form, and submit. Progress is shown in real time via the provisioning status page.

---

## Ops Dashboard

The Ops Dashboard surfaces DORA metrics and deployment tracking:

| Metric | Description |
|--------|-------------|
| Deployment frequency | How often you deploy to production |
| Lead time for changes | Time from commit to production |
| Change failure rate | % of deployments causing incidents |
| Mean time to restore | Time to recover from failures |

Data is pulled from GitHub Actions (via GitHub PAT) and incident records.

---

## AI Assistant

The AI assistant (bottom-right chat bubble) is powered by OpenAI. It has context about your service catalog and can answer questions like:
- "Which services depend on `payments-api`?"
- "Show me all P1 incidents in the last 30 days"
- "What's the on-call rotation for the platform team?"

| Env var | Description |
|---------|-------------|
| `OPENAI_API_KEY` | OpenAI API key |
| `OPENAI_MODEL` | Model ID (default: `gpt-4o`) |
| `OPENAI_SYSTEM_PROMPT` | Override the system prompt |

---

## Incidents (DevX view)

The **Incidents** tab inside DevX Portal shows incidents linked to catalog services. This is a read view; full incident management lives in the DRM portal.

---

## Workflows (n8n)

Embed the n8n workflow UI and browse execution history directly in the DevX Portal.

---

## API reference

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/catalog` | List services |
| `POST` | `/api/catalog` | Register service |
| `GET` | `/api/catalog/:id` | Service detail |
| `PUT` | `/api/catalog/:id` | Update service |
| `DELETE` | `/api/catalog/:id` | Delete service |
| `GET` | `/api/catalog/:id/dependencies` | Service dependencies |
| `GET` | `/api/scorecards` | List scorecards |
| `GET` | `/api/scorecards/:id` | Scorecard detail |
| `GET` | `/api/metrics/dora` | DORA metrics |
| `GET` | `/api/scaffolding/templates` | List golden path templates |
| `POST` | `/api/scaffolding/provision` | Trigger provisioning |
| `GET` | `/api/scaffolding/provision/:id/status` | Provisioning status |
| `GET` | `/api/chat/sessions` | Chat sessions |
| `POST` | `/api/chat/sessions/:id/messages` | Send AI message |
