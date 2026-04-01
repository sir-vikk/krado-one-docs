---
title: "FinOps and Budget Alerts"
description: "Allocate cloud costs to teams and services, set monthly budget alerts, and track spend against targets in Krado One."
---

# FinOps and Budget Alerts

The FinOps section helps you allocate cloud costs to internal teams and services, set budget thresholds, and receive alerts when spending exceeds your targets. It brings financial accountability to your cloud operations.

## How to Access

Navigate to **Cloud Portal > FinOps** from the left sidebar.

## Setting Up Cost Allocation

Cost allocation maps your cloud spend to the teams or services responsible for it, using tag-based rules.

1. Open the **Cost Allocation** section.
2. Click **+ Add Rule** to create a new allocation rule.
3. Define the tag key and value that identifies resources belonging to a team or service (e.g., `team=platform` or `service=payments-api`).
4. Map the rule to the corresponding team or service in Krado One.
5. Click **Save** to apply the rule.

Once allocation rules are defined, the allocation table shows each team's monthly cloud bill, calculated based on the tags applied to their resources.

## Creating Budget Alerts

Budget alerts notify you when a team's or service's spend crosses a defined threshold.

1. Click **+ New Budget Alert** in the Budget Alerts section.
2. Fill in the alert details:

    | Field | Description |
    |-------|-------------|
    | Name | A descriptive label (e.g., "Platform team budget") |
    | Team / Service | The team or service this budget applies to |
    | Monthly Limit | The spend threshold in USD |
    | Alert Channels | Where notifications should be sent (Slack or email) |

3. Click **Save** to activate the alert.

When the monthly spend for the specified team or service crosses the threshold, Krado One sends a notification to the configured channels.

## Tracking Spend Against Targets

Use the FinOps dashboard to monitor how each team's actual spend compares to their budget. This visibility helps you catch overruns early and take corrective action before costs escalate.

![FinOps dashboard showing cost allocation rules and budget alert configuration](/screenshots/cloud-finops.png)
