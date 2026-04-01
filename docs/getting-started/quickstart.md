---
title: "Quick Start"
description: "Get Krado One up and running in under five minutes with Docker."
---

# Quick Start

Welcome to Krado One. This guide walks you through installing the platform on your local machine, completing the first-time setup wizard, and landing on Portal Home -- all in under five minutes.

## Prerequisites

Before you begin, make sure the following tools are installed on your machine:

| Tool | Minimum version |
|------|----------------|
| Docker | 24+ |
| Docker Compose | v2 |

You can verify both with:

```bash
docker --version
docker compose version
```

## Step 1 -- Download and configure

Create a working directory and pull down the official compose file, nginx configuration, and sample environment file:

```bash
mkdir krado-one && cd krado-one

curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/deploy/docker/docker-compose.yml
curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/deploy/docker/nginx.conf
curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/.env.example

cp .env.example .env
```

For a local trial the defaults work out of the box -- SQLite is used automatically and no external services are required.

If you want to enable integrations such as Jira, Slack, or OpenAI, edit the `.env` file before starting. See the [Configuration reference](../reference/configuration) for all available variables.

## Step 2 -- Start the platform

```bash
docker compose up -d
```

Docker will pull two images and start the stack:

| Container | Purpose | Default port |
|-----------|---------|-------------|
| `devx-backend` | Go API server | `8080` |
| `devx-frontend` | React SPA served by nginx | `80` / `5173` |

Once the containers are healthy, open your browser and navigate to `http://localhost` (or `http://localhost:5173` if you are using the development port).

## Step 3 -- First-time setup wizard

On a fresh database Krado One presents a two-step setup wizard. Complete it to create your organization and owner account.

**Organization details**

Enter your organization name, a URL-safe slug, and an optional email domain for automatic org matching.

![Organization setup step in the Krado One setup wizard](/screenshots/setup-wizard-organization.png)

**Owner account**

Create the first admin account by providing a username, email address, and a password of at least six characters.

![Owner account creation step in the Krado One setup wizard](/screenshots/setup-wizard-owner.png)

After you submit, Krado One logs you in automatically with full admin access.

::: tip
The setup wizard only appears when the database is empty. To start over, remove the data volume and restart:
```bash
docker compose down -v && docker compose up -d
```
:::

## Step 4 -- Explore Portal Home

You are now on Portal Home, the central hub of Krado One. From here you can navigate into any of the enabled portals -- incidents, service catalog, runbooks, cloud costs, and more.

![Portal Home after first login](/screenshots/portal-home.png)

Use **Portal Config** in the sidebar to toggle individual portal sections on or off for your organization.

---

## What's next

- [Docker deployment](./docker) -- production configuration, PostgreSQL, and TLS
- [Installation (detailed)](./installation) -- database options, backup, and Kubernetes/Helm
- [Configuration reference](../reference/configuration) -- all environment variables
- [Editions and quotas](../concepts/editions) -- Free vs Pro vs Enterprise
- [Users, roles, and permissions](../admin/users-and-roles) -- invite your team
