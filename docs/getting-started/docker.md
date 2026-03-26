---
sidebar_position: 2
---

# Docker deployment

## Docker Compose (SQLite — recommended for small teams)

```bash
mkdir devx && cd devx
curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/deploy/docker/docker-compose.yml
curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/deploy/docker/nginx.conf
curl -O https://raw.githubusercontent.com/sir-vikk/devx-platform-enterprise/main/.env.example
cp .env.example .env   # edit as needed
docker compose up -d
```

Open **http://localhost:5173** and complete the setup wizard.

### Ports

| Service | Default port |
|---------|-------------|
| Frontend (nginx) | `80` / `5173` |
| Backend API | `8080` |

### Persistent data

SQLite data is stored in a named Docker volume (`devx_data`). To back up:

```bash
docker cp devx-backend:/app/data/tasks.db ./backup-$(date +%Y%m%d).db
```

---

## Docker Compose (PostgreSQL)

```bash
docker compose -f deploy/docker/docker-compose.postgres.yml up -d
```

Set these additional env vars in `.env`:

```bash
DB_DRIVER=postgres
DB_DSN=host=postgres user=devx password=secret dbname=devx port=5432 sslmode=disable TimeZone=UTC
```

---

## Kubernetes / Helm

A Helm chart is available under `deploy/helm/idp/`.

```bash
helm install devx ./deploy/helm/idp \
  --set image.backend.tag=latest \
  --set image.frontend.tag=latest \
  --set env.APP_EDITION=enterprise \
  --set env.JWT_SECRET=change-me
```

See `deploy/helm/idp/values.yaml` for all configurable values.

---

## Production checklist

- [ ] Set a strong `JWT_SECRET` (32+ random characters)
- [ ] Set `GIN_MODE=release`
- [ ] Use PostgreSQL for multi-replica deployments
- [ ] Put the frontend behind TLS (nginx, Caddy, or cloud LB)
- [ ] Set `VITE_API_URL` to your public backend URL before building the frontend image
- [ ] Configure scheduled database backups (built-in backup service or volume snapshots)
