---
sidebar_position: 4
---

# Teams

**Route:** `/drm/teams` · **Edition:** Community+

Teams are the on-call groups responsible for responding to and resolving incidents. Assigning incidents to a team routes notifications to the right people.

![Teams](/assets/screenshots/drm/teams.png)

## Team fields

| Field | Description |
|-------|-------------|
| Name | Team display name (e.g. "Platform On-Call") |
| Description | Team scope or responsibility area |
| Email addresses | Notification recipients — add multiple |

## Notifications

When a maintenance window or incident is created and a team is assigned, the platform sends email notifications to all addresses registered for that team. Use **Notify** on a maintenance window to trigger an immediate alert.
