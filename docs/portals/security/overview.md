---
title: "Security Overview"
description: "A summary dashboard of your vulnerability posture, secrets hygiene, and compliance status in Krado One."
---

# Security Overview

The Security Overview provides a single-page summary of your organization's security posture. It surfaces the most important metrics from vulnerabilities, secrets management, and compliance tracking so you can quickly assess where attention is needed.

## How to Access

Navigate to **Security Portal** from the left sidebar. The overview loads as the default view.

## What the Dashboard Shows

### Summary Cards

Four cards at the top of the page give you an at-a-glance view of your security health:

| Card | What It Shows |
|------|---------------|
| **Open Vulnerabilities** | The total number of CVEs currently in Open or In Progress status |
| **Critical CVEs** | The subset of vulnerabilities with a CVSS score of 9.0 or higher |
| **Secrets Tracked** | The total number of secrets in your inventory |
| **Compliance Controls** | The number of controls that have passed versus the total across all frameworks |

### Trend Indicators

Each card includes a trend indicator showing whether the count has increased or decreased compared to the previous period, helping you identify whether your posture is improving.

## Navigating to Sub-Sections

Use the left sidebar to navigate to each detailed section:

- **[Vulnerabilities](./vulnerabilities.md)** -- the full CVE list with status tracking and severity prioritization
- **[Secrets](./secrets.md)** -- the secrets inventory with rotation tracking and expiry alerts
- **[Compliance](./compliance.md)** -- framework controls, evidence mapping, and audit readiness tracking

![Security Overview dashboard with summary cards and navigation](/screenshots/security-overview.png)
