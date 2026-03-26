import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.heroLabel}>A DevX Platform</p>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroCta}>
          <Link className="button button--primary button--lg" to="/docs/">
            Explore Documentation
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/api-explorer">
            API Explorer
          </Link>
        </div>
      </div>
    </header>
  );
}

function EditionsTable() {
  return (
    <section className={styles.editions}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Editions
        </Heading>
        <p className={styles.sectionSubtitle}>
          One codebase, three tiers — pick what fits your team.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.editionsTable}>
            <thead>
              <tr>
                <th></th>
                <th>
                  Free
                  <span className={styles.badge}>Coming Soon</span>
                </th>
                <th>
                  Pro
                  <span className={styles.badge}>Coming Soon</span>
                </th>
                <th>
                  Enterprise
                  <span className={styles.badge}>Coming Soon</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Task Management &amp; Kanban</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>DRM / Incident Tracker</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>DevX (IDP) Portal</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Platform Engineering Portal</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>AI Assistant</td>
                <td>&mdash;</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Runbook Portal</td>
                <td>&mdash;</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Cloud &amp; FinOps</td>
                <td>&mdash;</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Security &amp; Compliance</td>
                <td>&mdash;</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>SSO (SAML / OIDC)</td>
                <td>&mdash;</td>
                <td>&mdash;</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Multi-org Admin</td>
                <td>&mdash;</td>
                <td>&mdash;</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Managed Hosting</td>
                <td>&mdash;</td>
                <td>&mdash;</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Availability</td>
                <td>Coming Soon</td>
                <td>Coming Soon</td>
                <td>Coming Soon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function DocsCallout() {
  return (
    <section className={styles.docsCallout}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Explore the Documentation
        </Heading>
        <p className={styles.sectionSubtitle}>
          Architecture guides, feature walkthroughs, configuration reference,
          and a full OpenAPI spec — everything you need to get started.
        </p>
        <div className={styles.docsCalloutButtons}>
          <Link className="button button--primary button--lg" to="/docs/">
            Read the Docs
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/api-explorer">
            OpenAPI Explorer
          </Link>
        </div>
      </div>
    </section>
  );
}

function OwnerSection() {
  return (
    <section className={styles.owner}>
      <div className="container">
        <p className={styles.ownerName}>Created by Vivek Mishra</p>
        <div className={styles.ownerLinks}>
          <a
            href="https://www.linkedin.com/in/vivek-mishra-devops/"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className={styles.ownerSep}>|</span>
          <a href="mailto:vivmishra3678@gmail.com">vivmishra3678@gmail.com</a>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Home" description="Krado One — A DevX Platform for tasks, catalog, runbooks, incidents, cloud, and more.">
      <HomepageHero />
      <main>
        <HomepageFeatures />
        <EditionsTable />
        <DocsCallout />
        <OwnerSection />
      </main>
    </Layout>
  );
}
