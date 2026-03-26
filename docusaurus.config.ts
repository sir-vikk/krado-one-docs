import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

/** Cloudflare Pages serves at domain root — no subpath needed. */
const url = process.env.CF_PAGES_URL ?? 'http://localhost:3000';
const baseUrl = '/';

const config: Config = {
  title: 'Krado One',
  tagline: 'A DevX Platform — tasks, catalog, runbooks, incidents, cloud, and more.',
  favicon: 'img/favicon.ico',

  url,
  baseUrl,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Krado One',
      logo: {
        alt: 'Krado One',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/api-explorer', label: 'API (OpenAPI)', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Introduction', to: '/docs/'},
            {label: 'API Explorer', to: '/api-explorer'},
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'LinkedIn — Vivek Mishra',
              href: 'https://www.linkedin.com/in/vivek-mishra-devops/',
            },
            {
              label: 'vivmishra3678@gmail.com',
              href: 'mailto:vivmishra3678@gmail.com',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Krado One — Created by Vivek Mishra. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'yaml', 'docker', 'go', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
