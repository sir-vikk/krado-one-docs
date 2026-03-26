import styles from './Portals.module.css';

const portals = [
  { icon: '✅', title: 'Task Manager', desc: 'Kanban boards, sprints, priorities, labels, JIRA sync, Slack & email scanning, and task statistics.', tier: 'free' },
  { icon: '📚', title: 'Service Catalog (DevX)', desc: 'Service ownership, dependency graph, golden-path templates, GitHub & Terraform config, DORA metrics, and scorecards.', tier: 'free' },
  { icon: '🚨', title: 'DRM / Incidents', desc: 'Incident lifecycle, timelines, RCA, action items, affected-entity tracking, and maintenance windows.', tier: 'free' },
  { icon: '🏗️', title: 'Platform Engineering', desc: 'Tech radar, CI/CD pipelines, API catalog, change requests, environment promotions, status page, and onboarding.', tier: 'free' },
  { icon: '📋', title: 'Runbook Portal', desc: 'Step-by-step runbooks with MCP server execution, AI-driven suggestions, webhook triggers, and execution history.', tier: 'pro' },
  { icon: '☁️', title: 'Cloud & FinOps', desc: 'AWS / GCP / Azure resource inventory, cost views, budget alerts, and cost allocation reports.', tier: 'pro' },
  { icon: '🔒', title: 'Security & Compliance', desc: 'CVE & vulnerability tracking, secrets inventory with rotation alerts, compliance frameworks (SOC 2, ISO 27001, PCI-DSS).', tier: 'pro' },
  { icon: '🤖', title: 'AI Assistant', desc: 'OpenAI-powered chatbot with session history — ask about services, trigger runbooks, get instant answers.', tier: 'pro' },
  { icon: '🔑', title: 'SSO & Multi-org', desc: 'SAML / OIDC identity provider configuration, multi-organization admin, and granular role-based access control.', tier: 'pro' },
  { icon: '⚙️', title: 'Portal Config', desc: 'Toggle portals, manage users & roles, configure feature flags, API keys, plugins, audit log, and notifications.', tier: 'free' },
];

function tierLabel(tier: string) {
  if (tier === 'enterprise') return 'Enterprise';
  if (tier === 'pro') return 'Pro';
  return 'Free';
}

export default function Portals() {
  return (
    <section id="portals" className={styles.section}>
      <div className={styles.label}>Portals</div>
      <h2 className={styles.heading}>Everything your team needs</h2>
      <p className={styles.sub}>
        10+ built-in portals ready on day one. No integrations to stitch together.
      </p>
      <div className={styles.grid}>
        {portals.map(p => (
          <div key={p.title} className={styles.card}>
            <span className={styles.cardIcon}>{p.icon}</span>
            <div className={styles.cardTitle}>{p.title}</div>
            <div className={styles.cardDesc}>{p.desc}</div>
            <span className={`${styles.tag} ${p.tier === 'pro' ? styles.pro : ''} ${p.tier === 'enterprise' ? styles.enterprise : ''}`}>
              {tierLabel(p.tier)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
