---
title: "Installation (Detailed)"
description: "Complete deployment guide for Krado One covering Docker, PostgreSQL, Kubernetes, backup, and upgrades."
---

# Installation (Detailed)

Krado One ships as a pair of hardened Docker images. There is no source code to check out and no build toolchain to configure -- pull the images, start the stack, and complete the setup wizard in your browser.

For a quick local trial, see the [Quick Start](./quickstart) guide instead.

---

## Docker images

| Image | Tag | Description |
|-------|-----|-------------|
| `ghcr.io/sir-vikk/devx-backend` | `latest` | Go API server |
| `ghcr.io/sir-vikk/devx-frontend` | `latest` | React SPA served by nginx |

All images are built on [Chainguard](https://www.chainguard.dev/) hardened base images and are signed with Cosign.

---

## Option A -- SQLite (recommended for small teams)

SQLite is the default database. No external database service is required; the data file is created automatically on first startup.

```bash
mkdir krado-one && cd krado-one

# Download the compose file and nginx config
curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/deploy/docker/docker-compose.yml
curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/deploy/docker/nginx.conf

# Download and copy the sample environment file
curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/.env.example
cp .env.example .env
```

Edit `.env` to set at least the following for production use:

```bash
JWT_SECRET=<32+ random characters>
GIN_MODE=release
```

Then start the platform:

```bash
docker compose up -d
```

The SQLite database is stored at `data/tasks.db` inside the backend container and is persisted through the `devx_data` Docker volume.

---

## Option B -- PostgreSQL

For larger teams or multi-replica deployments, use PostgreSQL as the backing database.

```bash
docker compose -f deploy/docker/docker-compose.postgres.yml up -d
```

Add the following to your `.env` file:

```bash
DB_DRIVER=postgres
DB_DSN=host=postgres user=devx password=secret dbname=devx port=5432 sslmode=disable TimeZone=UTC
```

Krado One runs all schema migrations automatically on startup, so there is no separate migration step.

---

## First-time setup

When you open the UI on a fresh database, Krado One presents a two-step setup wizard.

### Step 1 -- Create your organization

Provide an organization name, a URL-safe slug (for example `acme`), and an optional email domain for automatic org matching.

![Organization setup step in the setup wizard](/screenshots/setup-wizard-organization.png)

### Step 2 -- Create the owner account

Set a username, email address, and password (minimum six characters). This account receives full admin privileges and is marked as the organization owner.

![Owner account step in the setup wizard](/screenshots/setup-wizard-owner.png)

After you submit the form, Krado One logs you in and takes you to Portal Home.

![Portal Home after completing the setup wizard](/screenshots/portal-home.png)

::: tip
The setup wizard only runs when the database is empty. To reset and run it again, remove the data volume and restart:
```bash
docker compose down -v && docker compose up -d
```
:::

---

## Updating

Pull the latest images and restart. Database migrations are applied automatically on startup.

```bash
docker compose pull
docker compose up -d
```

---

## Backup

### SQLite

Copy the database file out of the running container:

```bash
docker cp devx-backend:/app/data/tasks.db ./backup-$(date +%Y%m%d).db
```

### PostgreSQL

Use `pg_dump` against the PostgreSQL container or your external database host:

```bash
docker exec devx-postgres pg_dump -U devx devx > ./backup-$(date +%Y%m%d).sql
```

Schedule backups with cron or your preferred job scheduler.

---

## Kubernetes / Helm

A Helm chart is included in the repository under `deploy/helm/idp/`.

```bash
helm install krado-one ./deploy/helm/idp \
  --set image.backend.tag=latest \
  --set image.frontend.tag=latest \
  --set env.JWT_SECRET=change-me \
  --set env.GIN_MODE=release
```

See `deploy/helm/idp/values.yaml` for the full list of configurable values including resource limits, ingress rules, and database connection settings.

---

## Next steps

- [Docker deployment](./docker) -- ports, volumes, production checklist
- [Configuration reference](../reference/configuration) -- all environment variables
- [Editions and quotas](../concepts/editions) -- Free vs Pro vs Enterprise
- [Users, roles, and permissions](../admin/users-and-roles) -- invite your team
