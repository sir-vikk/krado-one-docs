---
title: "Feature Flags"
description: "Control which portals and sections are visible in Krado One using feature flags."
---

# Feature Flags

Feature flags let administrators control which portals and sections are visible to users. You can use them to gradually roll out new areas of the platform, hide portals that aren't relevant to your team, or simplify the navigation for specific use cases.

Feature flags are managed from **Portal Config → Portal Settings**.

![Portal settings page with feature flags](/screenshots/portal-settings.png)

---

## How feature flags work

Each flag controls the visibility of a specific portal or section within the Krado One interface. When a flag is turned off, the corresponding portal card and navigation item are hidden from all users, regardless of their role.

Some flags are only available on certain editions. For example, flags for the Runbook Portal or Cloud and FinOps are only effective on the Pro or Enterprise tiers. If your current edition doesn't support a feature, the flag will appear but remain locked.

---

## Managing flags

To enable or disable a portal:

1. Navigate to **Portal Config → Portal Settings**
2. Find the flag for the portal or section you want to change
3. Toggle it on or off
4. Changes take effect immediately -- no restart required

---

## Available flags

| Flag | Controls | Description |
|------|----------|-------------|
| Task Management | Task portal | Show or hide the Task Management portal |
| DRM | DRM portal | Show or hide the DRM / Incident Tracker portal |
| DevX (IDP) | DevX portal | Show or hide the DevX portal (service catalog, golden paths, DORA metrics, scorecards) |
| Platform Engineering | Platform portal | Show or hide the Platform Engineering portal (tech radar, CI/CD, API catalog, etc.) |
| Runbook | Runbook portal | Show or hide the Runbook portal (Pro and Enterprise only) |
| Cloud and FinOps | Cloud portal | Show or hide the Cloud and FinOps portal (Pro and Enterprise only) |
| Security and Compliance | Security portal | Show or hide the Security and Compliance portal (Pro and Enterprise only) |
| AI Assistant | AI chatbot | Show or hide the AI Assistant (Pro and Enterprise only) |
| n8n Workflows | n8n section | Show or hide the embedded n8n workflow section (Pro and Enterprise only) |
| DB Console | DB Console section | Show or hide the Database Console (Pro and Enterprise only) |

### DevX section toggles

Within the DevX portal, you can also toggle individual sections:

| Flag | Controls |
|------|----------|
| Service Catalog | The service catalog section within DevX |
| Golden Paths | The golden paths section within DevX |
| DORA Metrics | The DORA metrics dashboard within DevX |
| Scorecards | The scorecards section within DevX |

---

## Edition limits

Feature flags respect your current edition. If you're on the Free tier and enable a Pro-only flag, the portal will remain hidden until you upgrade. This prevents confusion -- you'll always see which flags are available to you and which require an upgrade.

See [Editions](../concepts/editions) for a full comparison of what's included in each tier.
