---
title: "Users, Roles, and Permissions"
description: "Manage users and configure role-based access control (RBAC) in Krado One."
---

# Users, Roles, and Permissions

Krado One uses role-based access control (RBAC) to manage what each user can see and do. Every user is assigned a role that determines which portals they can access and whether they have read-only or read-write privileges.

All user and role management is done from **Portal Config → Users** and **Portal Config → Roles & Permissions**.

---

## Built-in roles

Krado One ships with three built-in roles that cover the most common access patterns:

| Role | Description |
|------|-------------|
| **Admin** | Full access to all portals and Portal Config settings |
| **Developer** | Read and write access to Task, DRM, DevX, Runbook, and Platform portals |
| **Viewer** | Read-only access to portals they are granted access to |

Built-in roles cannot be deleted, but their descriptions can be edited.

---

## Custom roles

If the built-in roles don't match your team's needs, you can create custom roles with fine-grained permissions.

To create a custom role:

1. Go to **Portal Config → Roles & Permissions**
2. Click **New Role**
3. Give the role a name and description
4. Configure the permissions described below
5. Save the role

![Roles and permissions page](/screenshots/roles-permissions.png)

![Custom role creation form](/screenshots/custom-role-creation.png)

### System permissions

These control platform-wide capabilities:

| Permission | Description |
|------------|-------------|
| Portal Access | Can log in to the platform. Disable to create reference-only roles |
| Manage Users | Can create, edit, and delete users |
| Manage Config | Can access Portal Config |

### Portal access flags

Control which portals this role can enter:

| Flag | Portal |
|------|--------|
| Access Tasks | Task Management |
| Access DRM | DRM Portal |
| Access DevX | DevX Portal |
| Access Runbooks | Runbook Portal |
| Access Cloud | Cloud and FinOps |
| Access Security | Security and Compliance |
| Access Platform | Platform Engineering |

### Write access flags

Control whether the role can create, edit, and delete within each portal:

| Flag | Portal |
|------|--------|
| Write Tasks | Task Management |
| Write DRM | DRM Portal |
| Write DevX | DevX Portal |
| Write Runbooks | Runbook Portal |
| Write Cloud | Cloud and FinOps |
| Write Security | Security and Compliance |
| Write Platform | Platform Engineering |

### Resource-level permissions

For even more control, you can set view, create, edit, and delete permissions on specific resource types:

| Resource | Description |
|----------|-------------|
| Tasks | Task records |
| DRM | Incidents and DRM catalog entries |
| Service Catalog | Service Catalog entries in the DevX portal |
| Runbooks | Runbook definitions and executions |
| Cloud | Cloud resources and FinOps data |
| Security | Vulnerabilities, secrets, and compliance data |
| Platform | Platform Engineering resources |

---

## Managing users

### Viewing users

Go to **Portal Config → Users** to see a list of all users in your organization. The list shows each user's name, email, role, and team assignment.

![Users list page](/screenshots/users-list.png)

### Adding a user

Click **Add User** from the Users page and fill in the following fields:

| Field | Description |
|-------|-------------|
| Username | Login username (must be unique within the organization) |
| Email | User's email address |
| Password | An initial password for the user |
| Role | Assign a built-in or custom role |
| Team | Assign to a DRM/catalog team (optional) |

The user is automatically added to your current organization.

![Add user form](/screenshots/add-user-form.png)

### Organization owner

The user who completes the first-time setup wizard is marked as the **Organization Owner**. Org owners are displayed with a badge in the Users list and have full administrative privileges.

### Password reset

Admins can send a password reset link to any user. From the Users list, click the menu on the user's row and select **Send reset link**. The link is emailed to the user and expires after 24 hours.

---

## SSO

Pro and Enterprise editions support Single Sign-On, allowing users to log in with their existing identity provider. See the [SSO guide](./sso) for setup instructions.
