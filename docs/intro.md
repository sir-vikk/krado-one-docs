---
sidebar_position: 1
slug: /
---

# Krado One

**Krado One** is a self-hosted internal developer platform built with **React + Vite**, **Go + Gin**, and **SQLite or PostgreSQL**.

It ships as a single deployable unit (one backend binary, one frontend build) that teams can run on a VM, in Docker, or on Kubernetes. There is no vendor lock-in and no external service dependency at minimum config.

---

![Krado One portal home showing all portals with Beta badges](/assets/screenshots/portal-home.png)

## Portals at a glance

| Portal | What it does | Edition |
|--------|-------------|---------|
| **Task Management** | Kanban board, JIRA sync, Slack/email import | Free+ |
| **DRM (Disaster & Maintenance)** | Incident lifecycle, RCA, maintenance windows, impact tracking | Free+ |
| **DevX Portal** | Service catalog, golden path, scorecards, DORA metrics | Free+ |
| **Platform Engineering** | Tech radar, CI/CD pipelines, API catalog, change requests, promotions | Free+ |
| **Runbook Portal** | Step-based runbooks, MCP integrations, AI-powered execution | Pro+ |
| **Cloud & FinOps** | AWS/GCP/Azure resource inventory, cost allocation, budget alerts | Pro+ |
| **Security & Compliance** | CVE dashboard, secrets inventory, SOC2/ISO27001 controls | Pro+ |
| **AI Assistant** | OpenAI-powered chatbot with session history | Pro+ |

**Free** and **Pro** are self-hosted by you. **Enterprise** is a managed cloud instance hosted by us — same features as Pro, we handle operations.

---

## Architecture

```
┌──────────────────────────────────────────────────────┐
│  Frontend (React + Vite)            :5173 / :80      │
│  ─ Portal home → per-portal layouts                  │
│  ─ JWT auth context                                  │
│  ─ Feature-flag driven nav                           │
└────────────────────┬─────────────────────────────────┘
                     │  HTTP / JSON
┌────────────────────▼─────────────────────────────────┐
│  Backend (Go + Gin)                 :8080            │
│  ─ JWT auth + RBAC middleware                        │
│  ─ Edition gating (Community / Pro / Enterprise)     │
│  ─ AES-256-GCM encryption for secrets at rest        │
│  ─ Scheduler: backup, maintenance, metrics, cloud    │
│  ─ Env-var seeder (bootstrap without UI)             │
└────────────────────┬─────────────────────────────────┘
                     │
          ┌──────────┴──────────┐
          │  SQLite (default)   │  or  PostgreSQL
          │  data/tasks.db      │      DB_DRIVER=postgres
          └─────────────────────┘
```

---

## Quick navigation

| I want to… | Go to |
|------------|-------|
| Run it locally in 2 minutes | [Quick start](./getting-started/quick-start) |
| Deploy with Docker | [Docker deployment](./getting-started/docker) |
| Understand editions | [Editions & quotas](./concepts/editions-and-quotas) |
| Configure integrations | [Configuration reference](./reference/configuration) |
| Set up SSO | [SSO](./features/sso-enterprise) |
| Manage users & roles | [Users, roles & permissions](./features/users-and-roles) |
| Browse the HTTP API | [API explorer](/api-explorer) |
