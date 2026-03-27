import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Pricing</div>
        <h2 className={styles.heading}>Simple, transparent pricing</h2>
        <div className={styles.grid}>

          {/* Free */}
          <div className={styles.card}>
            <div className={styles.tier}>Free</div>
            <div className={styles.price}>$0</div>
            <div className={styles.priceSub}>Self-hosted · no license key needed</div>
            <ul className={styles.features}>
              <li>Task Management (Kanban, JIRA sync)</li>
              <li>DRM / Incident Tracker</li>
              <li>DevX Portal &amp; Service Catalog</li>
              <li>Golden Path &amp; Provisioning</li>
              <li>Platform Engineering portal</li>
              <li>DORA Metrics &amp; Scorecards</li>
              <li>Unlimited users</li>
              <li>SQLite or PostgreSQL</li>
              <li className={styles.dim}>AI Assistant</li>
              <li className={styles.dim}>Runbook Portal</li>
              <li className={styles.dim}>Cloud &amp; FinOps</li>
              <li className={styles.dim}>Security &amp; Compliance</li>
              <li className={styles.dim}>SSO (SAML / OIDC)</li>
            </ul>
            <a href="https://github.com/sir-vikk/devx-platform-enterprise" className={`${styles.btn} ${styles.btnOutline}`}>
              Get started →
            </a>
          </div>

          {/* Pro */}
          <div className={`${styles.card} ${styles.featured}`}>
            <div className={styles.featuredBadge}>Most Popular</div>
            <div className={styles.tier}>Pro</div>
            <div className={styles.price}>Coming Soon</div>
            <div className={styles.priceSub}>Self-hosted · license key required</div>
            <ul className={styles.features}>
              <li>Everything in Free</li>
              <li>AI Assistant (OpenAI)</li>
              <li>Runbook Portal &amp; MCP execution</li>
              <li>Cloud &amp; FinOps (AWS / GCP / Azure)</li>
              <li>Security &amp; Compliance portal</li>
              <li>SSO — SAML &amp; OIDC</li>
              <li>ArgoCD, PagerDuty, Prometheus</li>
              <li>Database backups &amp; DB Console</li>
              <li>Offline license — no external calls</li>
            </ul>
            <a href="mailto:vivmishra3678@gmail.com" className={`${styles.btn} ${styles.btnPrimary}`}>
              Get a license →
            </a>
          </div>

          {/* Enterprise */}
          <div className={styles.card}>
            <div className={styles.tier}>Enterprise</div>
            <div className={styles.price}>Contact us</div>
            <div className={styles.priceSub}>Managed cloud · we handle everything</div>
            <ul className={styles.features}>
              <li>Everything in Pro</li>
              <li>Managed cloud deployment</li>
              <li>Multi-org / multi-tenant</li>
              <li>SLA &amp; dedicated support</li>
              <li>Custom integrations</li>
              <li>Infrastructure, backups &amp; upgrades on us</li>
            </ul>
            <a href="mailto:vivmishra3678@gmail.com" className={`${styles.btn} ${styles.btnOutline}`}>
              Contact us →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
