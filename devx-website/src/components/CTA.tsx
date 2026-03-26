import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <h2 className={styles.heading}>Ready to ship faster?</h2>
        <p className={styles.sub}>
          Pull the Docker image, run the setup wizard, and have your entire
          engineering workflow in one place — today.
        </p>
        <div className={styles.ctas}>
          <a href="#pricing" className={styles.btnPrimary}>Get started free</a>
          <a href="https://docs.devxplatform.io" className={styles.btnGhost}>Read the docs →</a>
        </div>
      </div>
    </section>
  );
}
