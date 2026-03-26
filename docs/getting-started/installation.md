---
sidebar_position: 3
---

# Installation (detailed)

Krado One is distributed as hardened Docker images. No source code checkout or build tooling is required.

For the 2-minute quick start see [Quick start](./quick-start).

---

## Docker images

| Image | Tag | Description |
|-------|-----|-------------|
| `ghcr.io/sir-vikk/devx-backend` | `latest` | Go API server (Community, no license key required) |
| `ghcr.io/sir-vikk/devx-frontend` | `latest` | Vite/React SPA served by nginx |

All images are built on [Chainguard](https://www.chainguard.dev/) hardened base images and are signed with Cosign.

---

## Docker Compose (SQLite — recommended for small teams)

```bash
mkdir devx && cd devx

# Download compose file and nginx config
curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/deploy/docker/docker-compose.yml
curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/deploy/docker/nginx.conf

# Configure
curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/.env.example
cp .env.example .env
# edit .env with your settings

docker compose up -d
```

Open **http://localhost** and complete the setup wizard.

---

## Docker Compose (PostgreSQL)

```bash
docker compose -f deploy/docker/docker-compose.postgres.yml up -d
```

Set in `.env`:

```bash
DB_DRIVER=postgres
DB_DSN=host=postgres user=devx password=secret dbname=devx port=5432 sslmode=disable TimeZone=UTC
```

---

## Environment variables

```bash
# Required for production
JWT_SECRET=<32+ random characters>
GIN_MODE=release

# Optional integrations
OPENAI_API_KEY=sk-...
JIRA_URL=https://yourcompany.atlassian.net
JIRA_USER=user@yourcompany.com
JIRA_TOKEN=...
SLACK_BOT_TOKEN=xoxb-...

# Pro license (self-hosted)
# LICENSE_KEY=<your-key-from-licensegate>

# Database (defaults to SQLite at data/tasks.db)
# DB_DRIVER=postgres
# DB_DSN=host=... user=... password=... dbname=... port=5432 sslmode=disable
```

See [Configuration reference](../reference/configuration) for the complete list.

---

## Database

### SQLite (default)

No configuration needed. The database file is created at `data/tasks.db` on first run and persisted in the `devx_data` Docker volume.

### PostgreSQL

Set `DB_DRIVER=postgres` and `DB_DSN` as shown above. DevX runs all migrations automatically on startup via GORM AutoMigrate.

---

## First-time setup

On a fresh database, opening the UI shows a two-step setup wizard:
1. **Organization** — name, slug, domain
2. **Owner account** — username, email, password

The owner account is created with full admin access and marked as the org owner.

---

## Updating

```bash
docker compose pull
docker compose up -d
# DB migrations run automatically on startup
```

---

## Backup

```bash
# SQLite
docker cp devx-backend:/app/data/tasks.db ./backup-$(date +%Y%m%d).db

# PostgreSQL — use pg_dump against the postgres container or external host
```

---

## Kubernetes / Helm

A Helm chart is available under `deploy/helm/idp/`.

```bash
helm install devx ./deploy/helm/idp \
  --set image.backend.tag=latest \
  --set image.frontend.tag=latest \
  --set env.JWT_SECRET=change-me \
  --set env.GIN_MODE=release
```

See `deploy/helm/idp/values.yaml` for all configurable values.
