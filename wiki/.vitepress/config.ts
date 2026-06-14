import { defineConfig } from 'vitepress'

const docsBase = '/essentialsy/'

export default defineConfig({
  title: 'EssentialsY',
  description: 'Unified Essentials plugin documentation',
  lang: 'en-US',
  base: docsBase,
  outDir: '../website',
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
    siteTitle: 'EssentialsY',

    nav: [
      { text: 'Docs', link: '/getting-started/introduction' },
      { text: 'Configuration', link: '/configuration/overview' },
      { text: 'Modules', link: '/modules/overview' },
      { text: 'Commands', link: '/commands/overview' },
      {
        text: 'GitHub',
        link: 'https://github.com/codingsushi79/EssentialsY',
      },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Quick Start', link: '/getting-started/quick-start' },
          { text: 'Migrating from EssentialsX', link: '/getting-started/migration' },
        ],
      },
      {
        text: 'Configuration',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/configuration/overview' },
          { text: 'Split Config Files', link: '/configuration/split-config' },
          { text: 'modules.yml', link: '/configuration/modules-yml' },
          { text: 'commands.yml', link: '/configuration/commands-yml' },
          { text: 'core.yml', link: '/configuration/core-yml' },
          { text: 'economy.yml', link: '/configuration/economy-yml' },
          { text: 'chat.yml', link: '/configuration/chat-yml' },
          { text: 'protect.yml', link: '/configuration/protect-yml' },
          { text: 'spawn.yml', link: '/configuration/spawn-yml' },
        ],
      },
      {
        text: 'Modules',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/modules/overview' },
          { text: 'Chat', link: '/modules/chat' },
          { text: 'Spawn', link: '/modules/spawn' },
          { text: 'Protect', link: '/modules/protect' },
          { text: 'AntiBuild', link: '/modules/antibuild' },
          { text: 'GeoIP', link: '/modules/geoip' },
        ],
      },
      {
        text: 'Commands',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/commands/overview' },
          { text: 'Categories', link: '/commands/categories' },
          { text: 'Permissions', link: '/commands/permissions' },
        ],
      },
      {
        text: 'Development',
        collapsed: true,
        items: [
          { text: 'Building', link: '/development/building' },
          { text: 'Architecture', link: '/development/architecture' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codingsushi79/EssentialsY' },
    ],

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
      label: 'On this page',
    },

    footer: {
      message: 'GPL-3.0 Licensed · EssentialsY by SushiMC',
      copyright: 'SushiMC',
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
  },

})
