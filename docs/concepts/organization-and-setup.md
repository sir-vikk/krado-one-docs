---
sidebar_position: 1
---

# Organizations and first-time setup

## Multi-organization

Enterprise supports **many organizations**. The first org is usually created during **setup**; admins can add more with **`POST /api/admin/orgs`**.

## Bootstrap API

| Method | Path | Purpose |
|--------|------|--------|
| `GET` | `/api/setup` | Returns JSON with boolean `needs_setup` |
| `POST` | `/api/setup` | Creates **org** + **owner user**; returns access and refresh tokens |

### `POST /api/setup` body

Both **`org`** and **`user`** are **required**:

```json
{
  "org": {
    "name": "Acme Corp",
    "slug": "acme",
    "plan": "free"
  },
  "user": {
    "username": "admin",
    "email": "admin@example.com",
    "password": "at-least-6-chars"
  }
}
```

(Field names must match your API model — see `CreateOrgRequest` in the backend.)

## Org admin API

| Method | Path | Purpose |
|--------|------|--------|
| `GET` | `/api/admin/orgs` | List organizations |
| `POST` | `/api/admin/orgs` | Create organization |
| `PUT` | `/api/admin/orgs/{id}` | Update org |
| `DELETE` | `/api/admin/orgs/{id}` | Delete org (subject to server rules) |
| `GET` | `/api/admin/orgs/{id}/users` | Users in org |

## Assigning users

**`PUT /api/admin/users/{id}/org`** with body `{ "org_id": <id> }` moves a user between orgs where allowed by your policies.
