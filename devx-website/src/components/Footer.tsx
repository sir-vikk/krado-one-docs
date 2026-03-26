import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src="/logo.png" alt="Krado One" className={styles.brandImg} />
        </div>
        <div className={styles.links}>
          <a href="https://sir-vikk.github.io/devx-platform-enterprise/">Docs</a>
          <a href="https://github.com/sir-vikk/devx-platform-enterprise">GitHub</a>
          <a href="mailto:vivmishra3678@gmail.com">Contact</a>
        </div>
        <div className={styles.copy}>© {new Date().getFullYear()} Krado One</div>
      </div>
    </footer>
  );
}
