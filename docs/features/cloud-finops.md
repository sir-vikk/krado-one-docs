---
sidebar_position: 6
---

# Cloud & FinOps Portal

The Cloud & FinOps Portal provides a unified inventory of cloud resources and cost data across AWS, GCP, and Azure, plus team-level cost allocation and budget alerting.

**Route:** `/cloud-portal` · **Edition:** Pro+

![Multi-Cloud & FinOps portal](/assets/screenshots/portal-home.png)

---

## Cloud resource inventory

DevX collects resources from configured cloud providers on a scheduled interval (default: every hour).

### AWS

Resources collected: EC2 instances, RDS databases, S3 buckets, Lambda functions, EKS clusters, ELBs.

| Env var | Description |
|---------|-------------|
| `AWS_ACCESS_KEY_ID` | AWS access key |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key |
| `AWS_REGION` | Primary region (e.g. `us-east-1`) |

Or configure in **Portal Config → Integrations → Cloud**.

### GCP

Resources collected: Compute Engine VMs, GKE clusters, Cloud Storage buckets, Cloud SQL instances.

| Env var | Description |
|---------|-------------|
| `GCP_PROJECT_ID` | GCP project ID |
| `GCP_SERVICE_ACCOUNT_JSON` | Service account key JSON (base64 or path) |

### Azure

Resources collected: Virtual Machines, AKS clusters, Storage Accounts, SQL Databases.

| Env var | Description |
|---------|-------------|
| `AZURE_TENANT_ID` | Azure tenant ID |
| `AZURE_CLIENT_ID` | App registration client ID |
| `AZURE_CLIENT_SECRET` | App registration secret |
| `AZURE_SUBSCRIPTION_ID` | Subscription to inventory |

---

## Cost view

The **Costs** tab shows spend broken down by:
- Provider (AWS / GCP / Azure)
- Region
- Service type
- Tag

Cost data is pulled from the cloud provider billing APIs and cached in the local database.

---

## FinOps — Cost Allocation

The **FinOps** tab lets you allocate cloud spend to internal teams and services:

1. Tag cloud resources with `team` and `service` labels in your cloud provider
2. DevX reads those tags during collection
3. The allocation view shows spend per team/service with trend lines

### Budget alerts

Set budget thresholds per team. When spend exceeds the threshold, a notification is sent to the configured alert channel (Slack webhook or email).

---

## API reference

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/cloud/resources` | List cloud resources (all providers) |
| `GET` | `/api/cloud/resources?provider=aws` | Filter by provider |
| `POST` | `/api/cloud/collect` | Trigger manual collection |
| `GET` | `/api/cloud/costs` | Cost summary |
| `GET` | `/api/cloud/costs?provider=gcp&period=30d` | Filtered costs |
| `GET` | `/api/finops/allocations` | Cost allocations by team |
| `GET` | `/api/finops/budgets` | Budget definitions |
| `POST` | `/api/finops/budgets` | Create budget alert |
