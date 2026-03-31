import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Krado One',
  description: 'Engineering portals. All of them. One place.',
  base: process.env.BASE_PATH || '/',
  appearance: 'dark',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/logo/logo.png' }],
  ],

  themeConfig: {
    logo: '/logo/logo.png',
    siteTitle: 'Krado One',

    nav: [
      { text: 'Docs', link: '/getting-started/quickstart' },
      { text: 'Website', link: '/' },
      {
        text: 'GitHub',
        link: 'https://github.com/sir-vikk/devx-platform-enterprise'
      }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Quick Start', link: '/getting-started/quickstart' },
          { text: 'Docker Deployment', link: '/getting-started/docker' },
          { text: 'Installation', link: '/getting-started/installation' },
        ]
      },
      {
        text: 'Concepts',
        items: [
          { text: 'Editions & Quotas', link: '/concepts/editions' },
          { text: 'Organization Model', link: '/concepts/organization' },
        ]
      },
      {
        text: 'Portals',
        collapsed: false,
        items: [
          {
            text: 'DRM — Incident Tracker',
            collapsed: true,
            items: [
              { text: 'Dashboard', link: '/portals/drm/dashboard' },
              { text: 'Incidents', link: '/portals/drm/incidents' },
              { text: 'Maintenance', link: '/portals/drm/maintenance' },
              { text: 'Customers', link: '/portals/drm/customers' },
              { text: 'Products', link: '/portals/drm/products' },
              { text: 'Teams', link: '/portals/drm/teams' },
              { text: 'Reports', link: '/portals/drm/reports' },
            ]
          },
          {
            text: 'Platform Portal',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/portals/platform/overview' },
              { text: 'API Catalog', link: '/portals/platform/api-catalog' },
              { text: 'Change Requests', link: '/portals/platform/change-requests' },
              { text: 'Onboarding', link: '/portals/platform/onboarding' },
              { text: 'Pipelines', link: '/portals/platform/pipelines' },
              { text: 'Promotions', link: '/portals/platform/promotions' },
              { text: 'Status Page', link: '/portals/platform/status-page' },
              { text: 'Tech Radar', link: '/portals/platform/tech-radar' },
            ]
          },
          {
            text: 'DevX Portal',
            collapsed: true,
            items: [
              { text: 'Service Catalog', link: '/portals/devx/service-catalog' },
              { text: 'Scorecards', link: '/portals/devx/scorecards' },
              { text: 'Golden Path', link: '/portals/devx/golden-path' },
              { text: 'Dependency Graph', link: '/portals/devx/dependency-graph' },
              { text: 'Ops Dashboard', link: '/portals/devx/ops-dashboard' },
              { text: 'Workflows', link: '/portals/devx/workflows' },
            ]
          },
          {
            text: 'Runbook Portal',
            collapsed: true,
            items: [
              { text: 'Runbooks', link: '/portals/runbook/runbooks' },
              { text: 'Create Runbook', link: '/portals/runbook/create-runbook' },
              { text: 'Execution History', link: '/portals/runbook/history' },
              { text: 'MCP Servers', link: '/portals/runbook/mcp-servers' },
              { text: 'AI Chat', link: '/portals/runbook/ai-chat' },
            ]
          },
          {
            text: 'Cloud Portal',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/portals/cloud/overview' },
              { text: 'Costs', link: '/portals/cloud/costs' },
              { text: 'FinOps', link: '/portals/cloud/finops' },
              { text: 'Resources', link: '/portals/cloud/resources' },
            ]
          },
          {
            text: 'Security Portal',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/portals/security/overview' },
              { text: 'Compliance', link: '/portals/security/compliance' },
              { text: 'Secrets', link: '/portals/security/secrets' },
              { text: 'Vulnerabilities', link: '/portals/security/vulnerabilities' },
            ]
          },
          {
            text: 'Task Portal',
            collapsed: true,
            items: [
              { text: 'Dashboard', link: '/portals/task/dashboard' },
              { text: 'Jira Tickets', link: '/portals/task/jira-tickets' },
            ]
          },
        ]
      },
      {
        text: 'Administration',
        items: [
          { text: 'Users & Roles', link: '/admin/users-and-roles' },
          { text: 'SSO', link: '/admin/sso' },
          { text: 'Integrations', link: '/admin/integrations' },
          { text: 'Feature Flags', link: '/admin/feature-flags' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Configuration', link: '/reference/configuration' },
        ]
      },
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sir-vikk/devx-platform-enterprise' }
    ],

    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2025 Krado One'
    },

    editLink: undefined,
    lastUpdated: false,
  }
})
