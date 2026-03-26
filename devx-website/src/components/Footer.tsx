import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src="/favicon.png" alt="Krado One" className={styles.brandImg} />
        </div>
        <div className={styles.links}>
          <a href="/docs/">Docs</a>
          <a href="https://github.com/sir-vikk/krado-one-docs">GitHub</a>
          <a href="mailto:vivmishra3678@gmail.com">Contact</a>
        </div>
        <div className={styles.copy}>© {new Date().getFullYear()} Krado One</div>
      </div>
    </footer>
  );
}
