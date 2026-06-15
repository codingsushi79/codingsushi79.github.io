import { defineConfig } from 'vitepress'

const docsBase = '/papyrus-client/'

export default defineConfig({
  title: 'Papyrus Client',
  description: 'Fabric-only Minecraft launcher with client integrity for Papyrus servers',
  lang: 'en-US',
  base: docsBase,
  outDir: '../website-papyrus-client',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
    }],
    ['meta', { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' }],
    ['meta', { name: 'theme-color', content: '#09090b', media: '(prefers-color-scheme: dark)' }],
  ],

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Papyrus Client',

    nav: [
      { text: 'Docs', link: '/getting-started/introduction' },
      { text: 'Download', link: '/download' },
      { text: 'Server Setup', link: '/server/configuration' },
      { text: 'Papyrus Server', link: 'https://docs.sushii.dev/papyrus/' },
      {
        text: 'GitHub',
        link: 'https://github.com/codingsushi79/Papyrus-Client',
      },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Requirements', link: '/getting-started/requirements' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Quick Start', link: '/getting-started/quick-start' },
          { text: 'Download', link: '/download' },
        ],
      },
      {
        text: 'Launcher',
        collapsed: false,
        items: [
          { text: 'Microsoft Sign-In', link: '/launcher/microsoft-auth' },
          { text: 'Profiles & Mods', link: '/launcher/profiles-mods' },
        ],
      },
      {
        text: 'Server',
        collapsed: false,
        items: [
          { text: 'Configuration', link: '/server/configuration' },
          { text: 'Banned Mods', link: '/server/banned-mods' },
        ],
      },
      {
        text: 'Reference',
        collapsed: true,
        items: [
          { text: 'FAQ', link: '/faq' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codingsushi79/Papyrus-Client' },
    ],

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
      label: 'On this page',
    },

    footer: {
      message: 'MIT · Papyrus Client by SushiMC',
      copyright: 'SushiMC',
    },
  },
})
