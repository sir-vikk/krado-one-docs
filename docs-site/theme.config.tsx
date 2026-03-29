import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <img src="/logo/logo.png" alt="Krado One" style={{ height: '28px' }} />
  ),
  project: {
    link: 'https://github.com/sir-vikk/krado-one',
  },
  docsRepositoryBase: 'https://github.com/sir-vikk/krado-one-docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    return { titleTemplate: asPath === '/' ? 'Krado One' : '%s – Krado One Docs' }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/logo/favicon.png" />
    </>
  ),
  primaryHue: 245,
  primarySaturation: 90,
  sidebar: {
    titleComponent({ title }) {
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: '© 2025 Krado One',
  },
  navbar: {
    extraContent: (
      <a
        href="https://krado.one"
        target="_blank"
        rel="noreferrer"
        style={{
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'inherit',
          marginRight: '0.5rem',
        }}
      >
        ← Website
      </a>
    ),
  },
  editLink: { text: '' },
  feedback: { content: '' },
  darkMode: true,
}

export default config
