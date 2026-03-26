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
            <div className={styles.price}>Coming Soon</div>
            <div className={styles.priceSub}>Self-hosted · no license key</div>
            <ul className={styles.features}>
              <li>All core portals (Tasks, Catalog, Runbooks, Incidents…)</li>
              <li>Platform Engineering portal</li>
              <li>Cloud Visibility</li>
              <li>Security portal</li>
              <li>Unlimited users</li>
              <li>SQLite or PostgreSQL</li>
              <li className={styles.dim}>AI chatbot</li>
              <li className={styles.dim}>DRM Tracker</li>
            </ul>
            <a href="/docs/" className={`${styles.btn} ${styles.btnOutline}`}>
              Get started →
            </a>
          </div>

          {/* Pro */}
          <div className={`${styles.card} ${styles.featured}`}>
            <div className={styles.featuredBadge}>Coming Soon</div>
            <div className={styles.tier}>Pro</div>
            <div className={styles.price}>Coming Soon</div>
            <div className={styles.priceSub}>Self-hosted · license key required</div>
            <ul className={styles.features}>
              <li>Everything in Free</li>
              <li>AI chatbot (OpenAI)</li>
              <li>DRM Tracker</li>
              <li>Priority support</li>
              <li>License validated via LicenseGate</li>
            </ul>
            <a href="/docs/" className={`${styles.btn} ${styles.btnPrimary}`}>
              Get started →
            </a>
          </div>

          {/* Enterprise */}
          <div className={styles.card}>
            <div className={styles.tier}>Enterprise</div>
            <div className={styles.price}>Coming Soon</div>
            <div className={styles.priceSub}>Fully managed cloud · we handle everything</div>
            <ul className={styles.features}>
              <li>Everything in Pro</li>
              <li>Managed cloud deployment</li>
              <li>Multi-org / multi-tenant</li>
              <li>SAML / OIDC SSO</li>
              <li>SLA & dedicated support</li>
              <li>Custom integrations</li>
            </ul>
            <a href="/docs/" className={`${styles.btn} ${styles.btnOutline}`}>
              Get started →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
