import type {SidebarsConfig} from '@docusaurus/types';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'getting-started/quick-start',
        'getting-started/docker',
        'getting-started/installation',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/organization-and-setup',
        'concepts/editions-and-quotas',
      ],
    },
    {
      type: 'category',
      label: 'Task Management',
      items: [
        'portals/task/dashboard',
        'portals/task/jira-tickets',
      ],
    },
    {
      type: 'category',
      label: 'Disaster & Maintenance (DRM)',
      items: [
        'portals/drm/dashboard',
        'portals/drm/incidents',
        'portals/drm/products',
        'portals/drm/teams',
        'portals/drm/customers',
        'portals/drm/maintenance',
        'portals/drm/reports',
      ],
    },
    {
      type: 'category',
      label: 'DevX Portal',
      items: [
        'portals/devx/service-catalog',
        'portals/devx/golden-path',
        'portals/devx/ops-dashboard',
        'portals/devx/scorecards',
        'portals/devx/dependency-graph',
        'portals/devx/workflows',
      ],
    },
    {
      type: 'category',
      label: 'Runbook Portal',
      items: [
        'portals/runbook/runbooks',
        'portals/runbook/create-runbook',
        'portals/runbook/history',
        'portals/runbook/mcp-servers',
        'portals/runbook/ai-chat',
      ],
    },
    {
      type: 'category',
      label: 'Platform Engineering',
      items: [
        'portals/platform/overview',
        'portals/platform/tech-radar',
        'portals/platform/pipelines',
        'portals/platform/api-catalog',
        'portals/platform/change-requests',
        'portals/platform/promotions',
        'portals/platform/status-page',
        'portals/platform/onboarding',
      ],
    },
    {
      type: 'category',
      label: 'Cloud & FinOps',
      items: [
        'portals/cloud/overview',
        'portals/cloud/resources',
        'portals/cloud/costs',
        'portals/cloud/finops',
      ],
    },
    {
      type: 'category',
      label: 'Security & Compliance',
      items: [
        'portals/security/overview',
        'portals/security/vulnerabilities',
        'portals/security/secrets',
        'portals/security/compliance',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'features/users-and-roles',
        'features/sso-enterprise',
        'features/portal-feature-flags',
        'features/integrations',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: ['reference/configuration'],
    },
  ],
};

export default sidebars;
