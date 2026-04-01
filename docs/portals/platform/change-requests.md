---
title: "Change Requests"
description: "Create and manage a lightweight approval workflow for infrastructure and platform changes in Krado One."
---

# Change Requests

Change Requests provide a structured approval workflow for significant infrastructure or platform changes before they are implemented. This ensures changes are reviewed, risks are assessed, and rollback plans are documented.

## How to Access

Navigate to **Platform Portal > Change Requests** from the left sidebar.

## Creating a Change Request

1. Click **+ New Change Request** at the top of the list.
2. Fill in the following fields:

    | Field | Description |
    |-------|-------------|
    | Title | A short summary of the proposed change |
    | Description | Full details covering what will change, why, and how |
    | Risk Level | Low, Medium, or High |
    | Affected Services | Services that will be impacted by this change |
    | Planned Date | When the change will be implemented |
    | Rollback Plan | Steps to undo the change if something goes wrong |

3. Click **Submit** to create the change request.

## Approval Workflow

Each change request moves through a defined workflow:

1. **Draft** -- the submitter creates and prepares the request.
2. **Review** -- designated approvers review the request and add comments.
3. **Approved or Rejected** -- the decision is recorded along with the reasoning.
4. **Implemented** -- the submitter marks the request as done after the change is applied in production.

## Notifications

When a change request is submitted, Krado One sends notifications through your configured alert channels (Slack or email) so reviewers are aware immediately without needing to check the portal.

![Change Requests list showing approval status and risk levels](/screenshots/platform-change-requests.png)
