---
sidebar_position: 5
---

# Platform Engineering Portal

The Platform Engineering Portal consolidates tools for platform teams — CI/CD pipeline tracking, API catalog, tech radar, change request management, environment promotions, status page, and developer onboarding.

**Route:** `/platform` · **Edition:** Community+

---

## Dashboard

The portal home shows a live dashboard with:
- **CI/CD Pipelines** — total runs, failing count, pass rate
- **Change Requests** — pending review, approved, total
- **Env Promotions** — in progress, failed/rolled back, total
- **Engineering Inventory** — tech radar items (Adopt count), APIs registered, onboarding templates, status page services

Click any stat card to navigate directly to that section.

---

## Tech Radar

Visualize your organization's technology adoption across the four Thoughtworks quadrants:

| Quadrant | Examples |
|----------|---------|
| Techniques | Trunk-based development, chaos engineering |
| Tools | Terraform, k9s, Grafana |
| Platforms | AWS EKS, GCP Cloud Run |
| Languages & Frameworks | Go, React, Rust |

Each item is placed in a ring: **Adopt → Trial → Assess → Hold**.

### Adding items

Click **+ Add Item**. Fill in quadrant, ring, name, description, and rationale. Items appear immediately on the radar visualization.

---

## CI/CD Pipelines

Track pipeline runs across any provider (GitHub Actions, GitLab CI, Jenkins, etc.).

Runs are ingested via the API (`POST /api/pipelines`) from your CI system using a webhook or a pipeline step. The **Stats** view shows:
- Total runs over time
- Success / failure / cancelled breakdown
- Per-pipeline trend charts

### Connecting your CI

Add a step to your pipeline that calls:

```bash
curl -X POST https://devx.yourcompany.com/api/pipelines \
  -H "Authorization: Bearer $DEVX_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"pipeline":"my-service","status":"success","duration":142,"branch":"main"}'
```

---

## API Catalog

Register and document every internal API:

| Field | Description |
|-------|-------------|
| Name | API name |
| Type | OpenAPI / gRPC / GraphQL |
| Spec URL | URL to the OpenAPI/proto file |
| Owner team | Responsible team |
| Base URL | Production base URL |

The catalog is searchable and filterable by type and team.

---

## Change Requests

A lightweight approval workflow for deployments and configuration changes.

### Lifecycle

```
pending → approved → implemented
              ↓
           rejected
```

Admins review pending change requests and approve or reject with a comment. Approved changes can be marked as implemented once deployed.

### Creating a change request

| Field | Description |
|-------|-------------|
| Title | What is changing |
| Type | deployment / config / infrastructure / rollback |
| Risk | low / medium / high |
| Description | Detailed change plan |
| Planned start | Scheduled change window |

---

## Env Promotions

Visualize and manage the promotion of releases through environments.

```
dev → staging → production
```

Each promotion record tracks:
- Service and version being promoted
- Source and target environment
- Status (pending / promoting / success / failed / rolled back)
- Promotion log

Promotions can be triggered manually or via CI webhook.

---

## Status Page

Internal status page showing the health of your services.

### Services

Register services with:
- Name, description, and tier (critical / high / medium / low)
- Current status (operational / degraded / partial\_outage / major\_outage)

### Overrides

Post temporary status overrides (e.g. during a maintenance window) that expire automatically.

---

## Onboarding

Template-driven checklists for onboarding new developers.

### Templates

Create onboarding templates with ordered checklist items:
- Set up local development environment
- Complete security training
- Get access to staging
- Deploy a hello-world service via Golden Path

### Assigning checklists

Assign a template to a new user. They track progress through **My Checklists** in their account settings.

---

## API reference

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/tech-radar` | List radar items |
| `POST` | `/api/tech-radar` | Add radar item |
| `PUT` | `/api/tech-radar/:id` | Update item |
| `DELETE` | `/api/tech-radar/:id` | Delete item |
| `GET` | `/api/pipelines` | List pipeline runs |
| `POST` | `/api/pipelines` | Ingest pipeline run |
| `GET` | `/api/pipelines/stats` | Pipeline stats |
| `GET` | `/api/api-catalog` | List APIs |
| `POST` | `/api/api-catalog` | Register API |
| `GET` | `/api/change-requests` | List change requests |
| `POST` | `/api/change-requests` | Create change request |
| `PUT` | `/api/change-requests/:id/review` | Approve / reject |
| `PUT` | `/api/change-requests/:id/implement` | Mark implemented |
| `GET` | `/api/promotions` | List promotions |
| `POST` | `/api/promotions` | Create promotion |
| `PUT` | `/api/promotions/:id/status` | Update status |
| `GET` | `/api/status-page/services` | List status services |
| `POST` | `/api/status-page/overrides` | Post status override |
| `GET` | `/api/onboarding/templates` | List templates |
| `POST` | `/api/onboarding/assign` | Assign checklist |
| `GET` | `/api/onboarding/my-checklists` | My checklists |
