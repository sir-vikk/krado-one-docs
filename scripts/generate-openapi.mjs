#!/usr/bin/env node
/**
 * Generates static/openapi/openapi.json from scripts/openapi-routes.txt
 * Run from repo root: node scripts/generate-openapi.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const routesPath = path.join(__dirname, 'openapi-routes.txt');
const outPath = path.join(root, 'static', 'openapi', 'openapi.json');

const lines = fs.readFileSync(routesPath, 'utf8').split('\n').filter((l) => l.trim() && !l.startsWith('#'));

const paths = {};

function methodKey(m) {
  return m.toLowerCase();
}

for (const line of lines) {
  const parts = line.split('|');
  if (parts.length < 5) continue;
  const [method, p, tag, summary, pub] = parts.map((s) => s.trim());
  const openApiPath = p.replace(/:([a-zA-Z]+)/g, '{$1}');
  if (!paths[openApiPath]) paths[openApiPath] = {};
  const isPublic = pub === '1';
  const op = {
    tags: [tag],
    summary,
    security: isPublic ? [] : [{ bearerAuth: [] }],
    responses: {
      '200': {
        description: 'Success',
        content: {
          'application/json': {
            schema: { type: 'object', additionalProperties: true },
          },
        },
      },
      '401': { description: 'Missing or invalid JWT' },
      '403': { description: 'Forbidden (edition / RBAC)' },
    },
  };
  paths[openApiPath][methodKey(method)] = op;
}

const doc = {
  openapi: '3.0.3',
  info: {
    title: 'Krado One HTTP API',
    version: '1.0.0',
    description: [
      'Base URL includes `/api`. Authenticated routes expect `Authorization: Bearer <access_token>`.',
      '',
      '**Enterprise distribution**',
      '- **Multi-organization**: first org via `POST /api/setup` (with `org` + `user`); additional orgs via `POST /api/admin/orgs`.',
      '- **Edition gating**: `APP_EDITION` controls **community**, **pro**, and **enterprise**. Many routes use `RequireMin(Pro)` or `RequireMin(Enterprise)` — below-tier callers receive **403** with an edition payload.',
      '- **SSO admin** lives under `/api/admin/sso/*` and requires **Enterprise** in this tree.',
      '- **DRM incidents** (`/api/disasters/*`), **maintenance**, **summaries**, **saved filters**, and related APIs are **Enterprise**-tier.',
      '- Portal **feature flags** and **limits** follow the full product model (not OSS-filtered).',
      '',
      'Regenerate after route changes: `node scripts/generate-openapi.mjs`.',
    ].join('\n'),
  },
  servers: [{ url: 'http://localhost:8080', description: 'Local development' }],
  tags: [
    { name: 'System', description: 'Health' },
    { name: 'Setup', description: 'First-time bootstrap' },
    { name: 'Portal', description: 'Feature flags and limits' },
    { name: 'Auth', description: 'Login and session' },
    { name: 'Users', description: 'Admin user management' },
    { name: 'Tasks', description: 'Task board and CRUD' },
    { name: 'JIRA', description: 'JIRA integration' },
    { name: 'Ticketing', description: 'Generic ticketing provider' },
    { name: 'Slack', description: 'Slack integration' },
    { name: 'Scan', description: 'Slack/email scan → tasks' },
    { name: 'Email scan', description: 'Email scanning config' },
    { name: 'n8n', description: 'Workflow automation proxy' },
    { name: 'Database', description: 'Read-only SQL explorer' },
    { name: 'Backup', description: 'SQLite backup (when driver is SQLite)' },
    { name: 'Service catalog', description: 'Internal service catalog' },
    { name: 'Scaffolding', description: 'Golden path templates' },
    { name: 'GitHub', description: 'GitHub integration' },
    { name: 'Terraform', description: 'Terraform Cloud' },
    { name: 'Argo CD', description: 'Argo CD integration' },
    { name: 'PagerDuty', description: 'PagerDuty' },
    { name: 'Prometheus', description: 'Prometheus' },
    { name: 'Metrics', description: 'DORA / deployments' },
    { name: 'Scorecards', description: 'Service scorecards' },
    { name: 'AI', description: 'AI chat config and sessions' },
    { name: 'Runbooks', description: 'Runbook portal and MCP' },
    { name: 'Executions', description: 'Runbook executions' },
    { name: 'MCP', description: 'MCP server registry' },
    { name: 'Cloud', description: 'Multi-cloud inventory' },
    { name: 'Admin', description: 'Flags and roles' },
    { name: 'SSO admin', description: 'IdP configuration (Enterprise)' },
    { name: 'Organizations', description: 'Multi-org admin' },
    { name: 'DRM incidents', description: 'Disaster / incident lifecycle' },
    { name: 'DRM summaries', description: 'LLM-assisted summaries' },
    { name: 'DRM filters', description: 'Saved DRM filters' },
    { name: 'Maintenance', description: 'Maintenance windows' },
    { name: 'Integrations', description: 'Google Calendar and similar' },
    { name: 'DRM catalog', description: 'Teams, products, customers, services' },
    { name: 'Audit', description: 'Audit log' },
    { name: 'Notifications', description: 'In-app notifications' },
    { name: 'API keys', description: 'User API keys' },
    { name: 'Tech radar', description: 'Technology adoption radar' },
    { name: 'Pipelines', description: 'CI/CD pipeline visibility' },
    { name: 'Secrets', description: 'Secrets inventory' },
    { name: 'Onboarding', description: 'Checklists' },
    { name: 'FinOps', description: 'Budgets and allocations' },
    { name: 'Change requests', description: 'Change control' },
    { name: 'API catalog', description: 'Internal API registry' },
    { name: 'Vulnerabilities', description: 'CVE-style tracking' },
    { name: 'Status page', description: 'Status overrides' },
    { name: 'Promotions', description: 'Environment promotions' },
    { name: 'Plugins', description: 'Plugin registry' },
    { name: 'Compliance', description: 'Frameworks and evidence' },
    { name: 'Alerts', description: 'Alert channel configuration' },
  ],
  paths,
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Access token from POST /api/auth/login or POST /api/setup',
      },
    },
  },
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(doc, null, 2));
console.log('Wrote', outPath, 'with', Object.keys(paths).length, 'paths');
