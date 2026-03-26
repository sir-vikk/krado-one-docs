---
sidebar_position: 5
---

# Change Requests

**Route:** `/platform/change-requests` · **Edition:** Pro+ · **Beta**

Change Requests provide a lightweight approval workflow for significant infrastructure or platform changes before they are implemented.

![Change Requests](/assets/screenshots/platform/change-requests.png)

## Request fields

| Field | Description |
|-------|-------------|
| Title | Short summary of the change |
| Description | Full details — what, why, and how |
| Risk level | Low / Medium / High |
| Affected services | Services impacted by this change |
| Planned date | When the change will be implemented |
| Rollback plan | How to undo the change if something goes wrong |

## Workflow

1. **Draft** — submitter creates the request
2. **Review** — approver(s) review and comment
3. **Approved / Rejected** — decision recorded with reason
4. **Implemented** — submitter marks as done after the change is applied

## Notifications

When a change request is submitted, any configured alert channels (Slack, email) receive a notification so reviewers are aware without needing to poll the portal.
