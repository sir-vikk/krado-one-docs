---
sidebar_position: 6
---

# SSO (Pro+)

SSO administration requires **Pro or Enterprise** edition (`RequireMin(Pro)` in `handlers.go`).

| Method | Path | Purpose |
|--------|------|--------|
| `GET` | `/api/admin/sso` | List configurations |
| `POST` | `/api/admin/sso/{provider}` | Save provider |
| `DELETE` | `/api/admin/sso/{provider}` | Remove provider |

End-user login behavior is surfaced via **`GET /api/auth/config`**.

If your fork moves SSO to **Pro**, adjust the route group middleware accordingly and update this page.
