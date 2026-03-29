# DevX Platform documentation site

[Docusaurus](https://docusaurus.io/) + **Swagger UI** for **`static/openapi/openapi.json`**.

##  Commands

From **repository root**:

```bash
npm run docs:install    # once (--legacy-peer-deps for swagger-ui-react + React 19)
npm run docs:dev
npm run docs:build      # runs openapi generator then docusaurus build
```

## OpenAPI

- **Output:** `static/openapi/openapi.json`
- **Source list:** `../scripts/openapi-routes.txt`
- **Generator:** `node ../scripts/generate-openapi.mjs`

Includes **multi-org** admin routes, **DRM incidents**, **maintenance**, **summaries**, **saved filters**, and **Google Calendar** config — see `backend/internal/api/handlers.go` when adding routes.

## GitHub Pages

See **`.github/workflows/deploy-docs.yml`**. Enable **Pages** from the **`gh-pages`** branch. The site URL is `https://<owner>.github.io/<repo>/` (or `/` for a `<user>.github.io` repository). `docusaurus.config.ts` reads **`GITHUB_REPOSITORY`** in Actions.

## Screenshots

Place files under `docs/assets/` and reference them in Markdown.
