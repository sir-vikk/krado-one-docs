import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <div className={styles.badge}>⬡ Internal Developer Platform</div>
        <h1 className={styles.headline}>
          One platform for every<br />
          <span className={styles.grad}>engineering workflow</span>
        </h1>
        <p className={styles.sub}>
          Self-hosted portals for tasks, service catalog, runbooks, incident management,
          cloud visibility, and more — all unified under one roof.
        </p>
        <div className={styles.ctas}>
          <a href="#pricing" className={styles.btnPrimary}>Get started free</a>
          <a href="#how-it-works" className={styles.btnGhost}>See how it works →</a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNum}>10+</div>
            <div className={styles.statLabel}>Built-in portals</div>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <div className={styles.statNum}>Self-hosted</div>
            <div className={styles.statLabel}>Your infra, your data</div>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <div className={styles.statNum}>Free</div>
            <div className={styles.statLabel}>Community edition</div>
          </div>
        </div>
      </div>
    </section>
  );
}
