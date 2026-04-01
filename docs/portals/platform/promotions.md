---
title: "Environment Promotions"
description: "Track changes as they move through dev, staging, and production environments with approval state and audit trail in Krado One."
---

# Environment Promotions

Environment Promotions track the lifecycle of a change as it moves through your environments -- from development to staging to production. Each promotion records what is being promoted, the source and target environments, and the full approval history.

## How to Access

Navigate to **Platform Portal > Promotions** from the left sidebar.

## Creating a Promotion Request

1. Click **+ New Promotion** at the top of the promotions list.
2. Fill in the promotion details:

    | Field | Description |
    |-------|-------------|
    | Title | A short summary (e.g., "Promote payments-api v2.3.1 to prod") |
    | Service | The service being promoted |
    | From Environment | The source environment (e.g., staging) |
    | To Environment | The target environment (e.g., production) |
    | Version / Artifact | The image tag, commit SHA, or Helm chart version |
    | Notes | Context, rollback instructions, or reviewer comments |

3. Click **Submit** to create the promotion request.

## Promotion Workflow

Each promotion moves through defined stages:

1. **Pending** -- the engineer submits a promotion request.
2. **Approved** -- a reviewer approves the request and execution can begin.
3. **In Progress** -- the deployment to the target environment is underway.
4. **Promoted** -- the change is live in the target environment.
5. **Failed / Rolled Back** -- the promotion failed or was reverted.

## Audit Trail

Every promotion request maintains a complete audit trail, including:

- Who submitted the request
- Who approved or rejected it
- When each status transition occurred
- What version is currently running in each environment

Combined with Change Requests, promotions provide full change-control coverage for your production environments.

![Environment Promotions list with approval status and environment details](/screenshots/platform-promotions.png)
