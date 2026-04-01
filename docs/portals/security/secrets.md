---
title: "Secrets Inventory"
description: "Track secret metadata, rotation schedules, and expiry dates across your services in Krado One. No actual secret values are stored."
---

# Secrets Inventory

The Secrets Inventory tracks where your secrets (API keys, database passwords, certificates) are stored and when they were last rotated. Krado One stores only metadata -- actual secret values are never stored in the platform.

## How to Access

Navigate to **Security Portal > Secrets** from the left sidebar.

## Adding a Secret Entry

1. Click **+ Add Secret** at the top of the secrets list.
2. Fill in the metadata:

    | Field | Description |
    |-------|-------------|
    | Name | A human-readable identifier (e.g., "Stripe API Key - Production") |
    | Type | API Key, Database Password, Certificate, SSH Key, or Other |
    | Store | Where the secret is stored (Vault, Kubernetes Secret, AWS SSM, Azure Key Vault, or GCP Secret Manager) |
    | Service | The associated service from your catalog |
    | Last Rotated | The date the secret was last rotated |
    | Expiry Date | When the secret expires (if applicable) |
    | Notes | Rotation instructions or ownership notes |

3. Click **Save** to add the entry.

## Rotation Reminders

Krado One highlights secrets that need attention:

- **Overdue** -- secrets that were last rotated more than 90 days ago (this threshold is configurable)
- **Expiring Soon** -- secrets with an expiry date within the next 14 days

The stats panel at the top of the page shows how many secrets currently require action, so you can prioritize rotation efforts.

## Keeping Your Inventory Current

When you rotate a secret, update the **Last Rotated** date in Krado One to keep the inventory accurate. This ensures rotation reminders reflect the true state of your secrets and prevents false alerts.

![Secrets Inventory showing rotation status and expiry alerts](/screenshots/security-secrets.png)
