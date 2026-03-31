---
title: "Editions"
description: "Krado One ships as a single codebase with Free, Pro, and Enterprise tiers. Learn how gating works and what each tier includes."
---

# Editions

Krado One ships as a single codebase with three tiers. **Free** and **Pro** are self-hosted by you. **Enterprise** is a managed cloud instance hosted and operated by us.

---

## Tier overview

| | **Free** | **Pro** | **Enterprise** |
|---|----------|---------|----------------|
| Infrastructure | You self-host | You self-host | We manage it |
| License | None | `LICENSE_KEY` env var | Provisioned by us |
| Activation | No key needed | Set `LICENSE_KEY` and restart | We handle it |

---

## How gating works

### Backend middleware

Routes that require Pro or Enterprise use `RequireMin(Pro)` or `RequireMin(Enterprise)` middleware. When the current tier is below the required level the server returns:

```json
{
  "error": "This feature requires Pro or Enterprise.",
  "edition": "community",
  "required": "pro",
  "upgrade_url": "https://yoursite.com/pricing"
}
```

Set `EDITION_UPGRADE_URL` to customise the URL shown in these responses.

### Feature flags

`GET /api/portal/feature-flags` returns the effective flag set after `ApplyFlagCaps` clamps values to what the current tier allows. The frontend uses these flags to show/hide portal cards and navigation items.

### License key detection

On startup, `LoadLicense()` checks (in order):
1. `LICENSE_KEY` env var
2. `LICENSE_KEY_FILE` env var
3. `data/license.key` file

If a valid license key is found, the effective tier becomes **Pro** (or **Enterprise** for enterprise keys). The key is validated offline using HMAC-SHA256 — no external service call is required.

---

## Free tier features

All the features listed here are available with `APP_EDITION=community`, no license needed:

- Task Management, JIRA, Slack/email scan
- DRM / Incident Tracker, maintenance windows
- DevX (IDP) Portal — service catalog, golden path, DORA metrics, scorecards
- Platform Engineering — tech radar, CI/CD, API catalog, change requests, promotions, status page, onboarding
- User management, RBAC, audit log, notifications, API keys, plugins

---

## Pro tier features

Requires a valid license key. Set `LICENSE_KEY` in your environment (or upload via **Portal Config → License**). Keys are validated offline — no external service needed.

Additional features over Free:

- AI Assistant (OpenAI chatbot)
- Runbook Portal — step-based runbooks, MCP execution, webhook triggers
- Cloud & FinOps — AWS/GCP/Azure inventory, cost views, budget alerts
- Security & Compliance — CVE tracking, secrets inventory, compliance frameworks
- n8n Workflows, DB Console, Database Backup

---

## Enterprise tier

Enterprise instances are provisioned and managed by us. You get the same feature set as Pro plus:

- Multi-org / multi-tenant support
- Managed infrastructure — zero ops on your side
- SLA & dedicated support
- Custom integrations

Contact us to get an Enterprise account.

---

## Default edition

When `APP_EDITION` is not set, the server defaults to `enterprise` in development builds (backward compatible for existing single-tenant installs). Set `APP_EDITION=community` explicitly in production self-hosted deployments to run Free tier.
