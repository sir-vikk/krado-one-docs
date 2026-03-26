'use client';
import { useState } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <img src="/favicon.png" alt="Krado One" className={styles.logoImg} />
        </a>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          <li><a href="#portals">Portals</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#integrations">Integrations</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="/docs" className={styles.docsLink}>Docs ↗</a></li>
        </ul>

        <div className={styles.actions}>
          <a href="#pricing" className={styles.btnPrimary}>Get started</a>
          <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </header>
  );
}
