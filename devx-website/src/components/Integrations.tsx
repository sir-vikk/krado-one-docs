import styles from './Integrations.module.css';

const integrations = [
  { icon: '🔵', name: 'Jira' },
  { icon: '💬', name: 'Slack' },
  { icon: '🐙', name: 'GitHub' },
  { icon: '🟡', name: 'PagerDuty' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🔷', name: 'Azure' },
  { icon: '🟠', name: 'Google Cloud' },
  { icon: '🤖', name: 'OpenAI' },
  { icon: '🔑', name: 'HashiCorp Vault' },
  { icon: '🏗️', name: 'Terraform' },
  { icon: '⚙️', name: 'Kubernetes' },
  { icon: '🔗', name: 'MCP Servers' },
  { icon: '📊', name: 'Grafana' },
  { icon: '🔒', name: 'SAML / OIDC SSO' },
];

export default function Integrations() {
  return (
    <section id="integrations" className={styles.section}>
      <div className={styles.label}>Integrations</div>
      <h2 className={styles.heading}>Connects to your stack</h2>
      <p className={styles.sub}>
        Configure via environment variables. No webhook gymnastics.
      </p>
      <div className={styles.grid}>
        {integrations.map(i => (
          <div key={i.name} className={styles.chip}>
            <span className={styles.chipIcon}>{i.icon}</span>
            {i.name}
          </div>
        ))}
      </div>
    </section>
  );
}
