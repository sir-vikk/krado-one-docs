---
title: "Vulnerabilities (CVE Dashboard)"
description: "Track CVEs and dependency vulnerabilities across your services with status workflows, severity prioritization, and due dates in Krado One."
---

# Vulnerabilities (CVE Dashboard)

The Vulnerabilities section lets you track CVEs and dependency vulnerabilities across your services. Each vulnerability can be linked to a service, assigned a status, and prioritized by severity to ensure your team addresses the most critical risks first.

## How to Access

Navigate to **Security Portal > Vulnerabilities** from the left sidebar.

## Adding a Vulnerability

1. Click **+ Add Vulnerability** at the top of the list.
2. Fill in the vulnerability details:

    | Field | Description |
    |-------|-------------|
    | CVE ID | The CVE identifier (e.g., CVE-2024-12345) |
    | Title | A short description of the vulnerability |
    | Severity | Critical, High, Medium, or Low |
    | CVSS Score | The numeric severity score (0 to 10) |
    | Affected Package | The library or dependency name and version |
    | Affected Service | The service from your catalog that is impacted |
    | Status | The initial status (typically Open) |
    | Due Date | The target date for remediation |

3. Click **Save** to add the vulnerability to your tracker.

## Managing the Status Workflow

Move vulnerabilities through the following statuses as your team works on remediation:

1. **Open** -- newly discovered, not yet triaged.
2. **In Progress** -- actively being worked on by the assigned team.
3. **Mitigated** -- a workaround has been applied while the full fix is pending.
4. **Accepted** -- the risk has been formally accepted and will not be fixed.
5. **Resolved** -- the vulnerability has been patched and verified.

To update a status, open the vulnerability detail page and select the new status from the dropdown.

## Setting Due Dates

Assign a due date to each vulnerability based on its severity. This helps your team prioritize work and ensures critical vulnerabilities are addressed within your organization's SLA windows.

## Reviewing the Stats Panel

The stats panel at the top of the page displays CVE counts grouped by severity and status. Use this view to quickly understand your remediation backlog and identify areas where vulnerabilities are accumulating.

![Vulnerabilities dashboard showing CVE list with severity and status filters](/screenshots/security-vulnerabilities.png)
