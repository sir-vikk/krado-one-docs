---
title: "Docker Deployment"
description: "Deploy Krado One with Docker Compose, configure PostgreSQL, set up TLS, and prepare for production."
---

# Docker Deployment

This page is a complete reference for running Krado One with Docker Compose. It covers both SQLite and PostgreSQL configurations, explains networking and volumes, and includes a production-readiness checklist.

For a fast first install, see the [Quick Start](./quickstart) guide.

---

## Getting started with Docker Compose (SQLite)

SQLite is the default and requires no additional services. This setup is ideal for small teams or local evaluation.

```bash
mkdir krado-one && cd krado-one

curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/deploy/docker/docker-compose.yml
curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/deploy/docker/nginx.conf
curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/.env.example

cp .env.example .env
docker compose up -d
```

Open `http://localhost` and complete the setup wizard to create your organization and admin account.

![Setup wizard organization step](/screenshots/setup-wizard-organization.png)

### Ports

| Service | Default port | Notes |
|---------|-------------|-------|
| Frontend (nginx) | `80` / `5173` | Serves the React SPA and proxies API calls |
| Backend API | `8080` | Internal; accessed through nginx in the default setup |

### Persistent data

SQLite data lives in a named Docker volume called `devx_data`. The database file inside the container is located at `/app/data/tasks.db`.

To create a local backup:

```bash
docker cp devx-backend:/app/data/tasks.db ./backup-$(date +%Y%m%d).db
```

---

## PostgreSQL configuration

For production workloads or multi-replica deployments, switch to PostgreSQL.

```bash
docker compose -f deploy/docker/docker-compose.postgres.yml up -d
```

Add the following variables to your `.env` file:

```bash
DB_DRIVER=postgres
DB_DSN=host=postgres user=devx password=secret dbname=devx port=5432 sslmode=disable TimeZone=UTC
```

Krado One applies all schema migrations automatically on startup. No separate migration command is needed.

---

## First-time setup

When the database is empty, Krado One displays a two-step wizard in the browser. You will create an organization and an owner account, then land on Portal Home.

![Owner account creation in the setup wizard](/screenshots/setup-wizard-owner.png)

After the wizard completes, you are logged in with full admin access.

![Portal Home after first login](/screenshots/portal-home.png)

::: tip
To re-run the setup wizard, remove the data volume and restart:
```bash
docker compose down -v && docker compose up -d
```
:::

---

## Kubernetes / Helm

A Helm chart is available under `deploy/helm/idp/` in the repository.

```bash
helm install krado-one ./deploy/helm/idp \
  --set image.backend.tag=latest \
  --set image.frontend.tag=latest \
  --set env.JWT_SECRET=change-me \
  --set env.GIN_MODE=release
```

Review `deploy/helm/idp/values.yaml` for all configurable values including resource limits, ingress rules, and database connection settings.

---

## Updating

Pull the latest images and restart. Migrations run automatically.

```bash
docker compose pull
docker compose up -d
```

---

## Production checklist

Before going live, work through every item in this list:

- [ ] Set `JWT_SECRET` to a strong random string of at least 32 characters.
- [ ] Set `GIN_MODE=release` to disable debug logging and stack traces.
- [ ] Switch to PostgreSQL if you plan to run more than one backend replica.
- [ ] Terminate TLS in front of the frontend container using nginx, Caddy, or a cloud load balancer.
- [ ] Set `VITE_API_URL` to your public backend URL before building or pulling the frontend image.
- [ ] Schedule automated database backups using cron, volume snapshots, or the built-in backup service.
- [ ] Review the [Configuration reference](../reference/configuration) and remove any default or example values from `.env`.
- [ ] Restrict network access to the backend port (`8080`) so it is only reachable through the reverse proxy.

---

## Next steps

- [Installation (detailed)](./installation) -- database options, backup strategies, and Helm values
- [Configuration reference](../reference/configuration) -- all environment variables
- [Editions and quotas](../concepts/editions) -- Free vs Pro vs Enterprise
- [Users, roles, and permissions](../admin/users-and-roles) -- invite your team
