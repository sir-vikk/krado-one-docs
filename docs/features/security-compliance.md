---
sidebar_position: 7
---

# Security & Compliance Portal

The Security & Compliance Portal consolidates CVE tracking, secrets inventory, and compliance framework management in one place.

**Route:** `/security` · **Edition:** Enterprise

---

## Vulnerabilities

Track CVEs and dependency security issues across your services.

### Ingesting vulnerability data

Vulnerability records can be created via the API (integrate with your CI scanning tool) or manually entered.

Each record includes:
- CVE ID and CVSS score
- Severity (critical / high / medium / low)
- Affected service (linked to Service Catalog)
- Affected package and version
- Status (open / in\_progress / resolved / accepted)
- Remediation notes and due date

### Dashboard

The dashboard shows:
- Open vulnerabilities by severity
- Services with most open issues
- Overdue remediations
- Trend over time (new vs resolved)

---

## Secrets Inventory

Maintain a cross-platform inventory of secrets to track rotation and expiry.

Supported secret stores:
- **HashiCorp Vault** — secret paths, version, last rotated
- **Kubernetes Secrets** — namespace, secret name, keys
- **AWS SSM Parameter Store** — parameter names, types
- **Manual** — manually registered secrets

### Rotation alerts

Set a rotation interval per secret. DevX calculates the next rotation due date and sends alerts via Slack or email when:
- A secret is within 7 days of its rotation due date
- A secret is overdue for rotation

### Adding a secret

| Field | Description |
|-------|-------------|
| Name | Descriptive name (e.g. "Payments DB password") |
| Store | vault / k8s / ssm / manual |
| Path/Key | Location in the secret store |
| Owner team | Team responsible for rotation |
| Rotation interval | Days between rotations (e.g. 90) |
| Last rotated | Date of last rotation |

---

## Compliance

Track compliance controls across frameworks like SOC2 and ISO27001.

### Frameworks

Register a compliance framework:
- SOC2 Type II
- ISO27001
- PCI-DSS
- Custom

### Controls

Each framework contains controls (e.g. "CC6.1 — Logical access controls"). For each control:
- Set **status**: compliant / partial / non-compliant / not-applicable
- Attach **evidence** (document links, notes, screenshots)
- Assign an **owner**
- Set a **review date**

### Evidence mapping

Evidence can be linked from:
- External URLs (Confluence, Google Drive, Notion)
- Runbook executions (automated evidence)
- Manual notes

### Compliance overview

The overview shows:
- % compliant per framework
- Controls due for review
- Non-compliant controls by owner

---

## API reference

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/vulnerabilities` | List vulnerabilities |
| `POST` | `/api/vulnerabilities` | Create vulnerability record |
| `PUT` | `/api/vulnerabilities/:id` | Update status / notes |
| `DELETE` | `/api/vulnerabilities/:id` | Delete record |
| `GET` | `/api/secrets` | List secrets inventory |
| `POST` | `/api/secrets` | Register secret |
| `PUT` | `/api/secrets/:id` | Update secret |
| `DELETE` | `/api/secrets/:id` | Remove secret |
| `GET` | `/api/compliance/frameworks` | List frameworks |
| `POST` | `/api/compliance/frameworks` | Add framework |
| `GET` | `/api/compliance/controls` | List controls |
| `POST` | `/api/compliance/controls` | Add control |
| `PUT` | `/api/compliance/controls/:id` | Update control status |
| `POST` | `/api/compliance/controls/:id/evidence` | Attach evidence |
