import styles from './HowItWorks.module.css';

const steps = [
  { n: '1', title: 'Pull the Docker image', desc: 'One compose file. No build tooling, no Node or Go runtime needed on your host.' },
  { n: '2', title: 'Run the setup wizard', desc: 'Create your org and owner account in under 60 seconds on first launch.' },
  { n: '3', title: 'Configure integrations', desc: 'Connect Jira, Slack, GitHub, and cloud providers via environment variables.' },
  { n: '4', title: 'Invite your team', desc: 'Add members, assign roles, and enable the portals your team needs.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>How it works</div>
        <h2 className={styles.heading}>Up and running in minutes</h2>
        <div className={styles.steps}>
          {steps.map(s => (
            <div key={s.n} className={styles.step}>
              <div className={styles.stepNum}>{s.n}</div>
              <div className={styles.stepTitle}>{s.title}</div>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
