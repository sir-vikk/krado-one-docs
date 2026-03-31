---
title: "Environment Promotions"
description: "Track changes as they move through dev → staging → production with approval state and audit trail."
---

# Environment Promotions

**Route:** `/platform/promotions` · **Edition:** Pro+ · **Beta**

Environment Promotions track the lifecycle of a change as it moves through environments — dev → staging → production. Each promotion request records what is being promoted, the source/target environment, and the approval state.


## Promotion fields

| Field | Description |
|-------|-------------|
| Title | Short summary (e.g. "Promote payments-api v2.3.1 to prod") |
| Service | The service being promoted |
| From environment | Source (e.g. staging) |
| To environment | Target (e.g. production) |
| Version / artifact | Image tag, commit SHA, or Helm chart version |
| Status | Pending · Approved · In Progress · Promoted · Failed · Rolled Back |
| Notes | Context, rollback instructions, or reviewer comments |

## Workflow

1. **Pending** — engineer submits a promotion request
2. **Approved** — reviewer approves; execution can begin
3. **In Progress** — deployment to the target environment is running
4. **Promoted** — change is live in the target environment
5. **Failed / Rolled Back** — promotion failed or was reverted

## Why use this

Promotion requests provide an audit trail of every production change — who approved it, when it was promoted, and what version is running in each environment. Combined with Change Requests, this gives full change-control coverage.
