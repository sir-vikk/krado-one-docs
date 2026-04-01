---
title: "Single Sign-On (SSO)"
description: "Set up SSO providers in Krado One so your team can log in with Google, GitHub, SAML, or OIDC."
---

# Single Sign-On (SSO)

Single Sign-On lets your team members log in to Krado One using their existing identity provider instead of managing separate credentials. This simplifies onboarding, improves security, and gives administrators centralized control over access.

> SSO requires the **Pro** or **Enterprise** edition. See [Editions](../concepts/editions) for details on upgrading.

---

## Supported providers

Krado One supports the following SSO providers:

| Provider | Protocol | Use case |
|----------|----------|----------|
| **Google** | OAuth 2.0 | Teams using Google Workspace |
| **GitHub** | OAuth 2.0 | Developer teams on GitHub |
| **SAML** | SAML 2.0 | Enterprise identity providers (Okta, Azure AD, OneLogin, etc.) |
| **OIDC** | OpenID Connect | Any OIDC-compliant provider |

You can configure one or more providers. When multiple providers are active, the login page displays all of them and users can choose their preferred option.

---

## Setting up SSO

### Step 1 -- Open SSO settings

Navigate to **Portal Config → SSO**. You'll see a list of available providers, each with a toggle and configuration form.

![SSO settings page](/screenshots/sso-settings.png)

### Step 2 -- Choose a provider and enter credentials

Select the provider you want to configure. Each provider requires different fields:

**Google**

| Field | Description |
|-------|-------------|
| Client ID | OAuth client ID from the Google Cloud Console |
| Client Secret | OAuth client secret from the Google Cloud Console |
| Allowed Domains | Restrict login to specific email domains (optional) |

**GitHub**

| Field | Description |
|-------|-------------|
| Client ID | OAuth App client ID from GitHub Developer Settings |
| Client Secret | OAuth App client secret from GitHub Developer Settings |
| Allowed Orgs | Restrict login to members of specific GitHub organizations (optional) |

**SAML**

| Field | Description |
|-------|-------------|
| Entity ID | Your SAML entity ID / issuer |
| SSO URL | The identity provider's SSO login URL |
| Certificate | The identity provider's X.509 certificate (PEM format) |

**OIDC**

| Field | Description |
|-------|-------------|
| Issuer URL | The OIDC issuer URL (used for auto-discovery) |
| Client ID | OIDC client ID |
| Client Secret | OIDC client secret |

![SSO provider configuration form](/screenshots/sso-provider-config.png)

### Step 3 -- Save and test

After entering the credentials, save the configuration. The provider will appear as an option on the login page.

It's a good idea to test the SSO flow in a private/incognito browser window before rolling it out to your team.

![Login page with SSO options](/screenshots/sso-login-page.png)

---

## Managing SSO providers

From the **Portal Config → SSO** page you can:

- **Enable or disable** a provider without deleting its configuration
- **Edit** credentials if your identity provider rotates keys
- **Remove** a provider entirely

---

## User provisioning

When a user logs in via SSO for the first time, Krado One automatically creates an account for them in the current organization. The new user is assigned the default role configured in your organization settings.

Administrators can then adjust the user's role and permissions from **Portal Config → Users**.
