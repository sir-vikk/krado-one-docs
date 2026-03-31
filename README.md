# Krado One — Documentation Site

Landing page + [VitePress](https://vitepress.dev/) documentation for the Krado One internal developer platform.

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | Standalone landing page (HTML/CSS/JS) |
| `docs/` | VitePress documentation site |
| `logo/` | Brand assets (logo, favicon) |
| `.github/workflows/pages.yml` | GitHub Pages deployment |

## Commands

```bash
# Install docs dependencies
cd docs && npm install

# Local dev server (docs)
cd docs && npm run dev

# Build docs
cd docs && npm run build
```

## Deployment

The site is deployed to **GitHub Pages** via the workflow in `.github/workflows/pages.yml`.

On push to `main`:
1. VitePress docs are built from `docs/`
2. The landing page (`index.html`) and logos are assembled alongside the docs output
3. Everything is deployed to GitHub Pages

The live site structure:
- `/` → Landing page (`index.html`)
- `/docs/` → VitePress documentation
