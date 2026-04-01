---
title: "Organizations"
description: "Understand how organizations work in Krado One, complete the first-time setup wizard, and manage multiple organizations."
---

# Organizations

An **organization** in Krado One is the top-level container for everything your team does. All users, roles, integrations, and portal data belong to an organization. Think of it as your company's workspace within the platform.

When you first install Krado One, you'll create your initial organization as part of the setup wizard. From that point on, every user you invite and every integration you configure lives inside that organization.

---

## First-time setup wizard

The first time you open Krado One after installation, the setup wizard walks you through creating your organization and your first admin account.

### Step 1 -- Create your organization

Enter a name and URL-friendly slug for your organization. The slug is used in URLs and cannot be changed later, so choose carefully.

| Field | Description |
|-------|-------------|
| Organization Name | A human-readable name (e.g. "Acme Corp") |
| Slug | A short, URL-safe identifier (e.g. "acme") |
| Plan | The edition tier to start with (Free by default) |

![Setup wizard step 1 — create your organization](/screenshots/setup-wizard-step-1.png)

### Step 2 -- Create the owner account

Next, create the first user account. This account is automatically assigned the **Owner** role with full administrative privileges.

| Field | Description |
|-------|-------------|
| Username | Your login username |
| Email | Your email address |
| Password | A strong password (minimum 6 characters) |

![Setup wizard step 2 — create the owner account](/screenshots/setup-wizard-step-2.png)

Once both steps are complete, you're logged in and ready to start configuring your platform.

---

## Organization settings

After setup, you can manage your organization's details from **Portal Config → Organization**.

From this page you can:

- Update the organization name
- View your organization slug and plan
- See the organization owner

![Organization settings page](/screenshots/organization-settings.png)

---

## Managing multiple organizations (Enterprise)

Multi-organization support is available on the **Enterprise** tier. This is useful for companies that need separate workspaces for different business units, clients, or environments.

With multi-org support, platform administrators can:

- Create additional organizations from the admin panel
- Move users between organizations
- Manage each organization's settings, roles, and integrations independently

If you need multi-organization support, see the [Editions](./editions) page for details on upgrading to Enterprise.
