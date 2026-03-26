import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Task Management',
    description: (
      <>
        Kanban boards, JIRA sync, Slack &amp; email scanning, sprint statistics,
        and a full task lifecycle — all in one place.
      </>
    ),
  },
  {
    title: 'DRM / Incidents',
    description: (
      <>
        Disaster Recovery Management with incident timelines, RCA, action items,
        maintenance windows, and affected-entity tracking.
      </>
    ),
  },
  {
    title: 'DevX (IDP) Portal',
    description: (
      <>
        Service catalog, dependency graph, golden-path templates, GitHub &amp;
        Terraform config, DORA metrics, and scorecards.
      </>
    ),
  },
  {
    title: 'Runbooks',
    description: (
      <>
        Step-by-step runbook builder with MCP server execution, AI-driven
        suggestions, and webhook triggers.
      </>
    ),
  },
  {
    title: 'Platform Engineering',
    description: (
      <>
        Tech radar, CI/CD pipelines, API catalog, change requests, environment
        promotions, status page, and onboarding flows.
      </>
    ),
  },
  {
    title: 'Cloud & FinOps',
    description: (
      <>
        AWS / GCP / Azure resource inventory, cost views, budget alerts, and
        cost allocation reports.
      </>
    ),
  },
  {
    title: 'Security & Compliance',
    description: (
      <>
        CVE and vulnerability tracking, secrets inventory with rotation alerts,
        and compliance frameworks (SOC 2, ISO 27001, PCI-DSS).
      </>
    ),
  },
  {
    title: 'SSO & Multi-org',
    description: (
      <>
        SAML / OIDC identity provider configuration, multi-organization admin,
        and granular role-based access control.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3', styles.featureCol)}>
      <div className={styles.featureCard}>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          Everything your platform team needs
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
