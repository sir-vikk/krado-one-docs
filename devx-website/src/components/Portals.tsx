import styles from './Portals.module.css';

const portals = [
  { icon: '✅', title: 'Task Manager', desc: 'Jira-style task tracking with sprints, labels, priorities, and Kanban boards.', tier: 'free' },
  { icon: '📚', title: 'Service Catalog', desc: 'Document every service: ownership, SLOs, runbooks, health, and tech debt.', tier: 'free' },
  { icon: '📋', title: 'Runbook Portal', desc: 'Create and execute operational runbooks step-by-step with AI-driven selection.', tier: 'free' },
  { icon: '🚨', title: 'Incident Management', desc: 'Declare incidents, coordinate response, track timelines, and export post-mortems.', tier: 'free' },
  { icon: '🏗️', title: 'Platform Engineering', desc: 'Tech radar, CI/CD pipelines, onboarding flows, change requests, and API catalog.', tier: 'free' },
  { icon: '☁️', title: 'Cloud Visibility', desc: 'Multi-cloud resource overview (AWS, Azure, GCP) and cost analytics.', tier: 'free' },
  { icon: '🔒', title: 'Security Portal', desc: 'Secrets inventory, vulnerability tracking, compliance posture at a glance.', tier: 'free' },
  { icon: '🤖', title: 'AI Chatbot', desc: 'Ask questions about your services, trigger runbooks, and get instant answers.', tier: 'pro' },
  { icon: '🗂️', title: 'DRM Tracker', desc: 'Disaster recovery management with product impact mapping and SLA tracking.', tier: 'pro' },
  { icon: '⚙️', title: 'Portal Config', desc: 'Toggle portals, manage users, configure SSO, set feature flags.', tier: 'free' },
];

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
            <span className={`${styles.tag} ${p.tier === 'pro' ? styles.pro : ''}`}>
              {p.tier === 'pro' ? 'Pro' : 'Free'}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
