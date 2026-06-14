import { defineConfig } from 'vitepress'

const docsBase = '/discordlinkplus/'

export default defineConfig({
  title: 'DiscordLink+',
  description: 'Discord bridge plugin with account linking and voice chat bridging',
  lang: 'en-US',
  base: docsBase,
  outDir: '../website-discordlinkplus',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
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
    logo: '/logo.svg',
    siteTitle: 'DiscordLink+',

    nav: [
      { text: 'Docs', link: '/getting-started/introduction' },
      { text: 'Configuration', link: '/configuration/config-yml' },
      { text: 'Features', link: '/features/chat-bridge' },
      { text: 'Commands', link: '/commands/overview' },
      {
        text: 'GitHub',
        link: 'https://github.com/codingsushi79/discordlinkplus',
      },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Setup', link: '/getting-started/setup' },
          { text: 'Account Linking', link: '/getting-started/linking' },
        ],
      },
      {
        text: 'Features',
        collapsed: false,
        items: [
          { text: 'Chat Bridge', link: '/features/chat-bridge' },
          { text: 'Voice Bridge', link: '/features/voice-bridge' },
        ],
      },
      {
        text: 'Configuration',
        collapsed: false,
        items: [
          { text: 'config.yml', link: '/configuration/config-yml' },
        ],
      },
      {
        text: 'Commands',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/commands/overview' },
        ],
      },
      {
        text: 'Development',
        collapsed: true,
        items: [
          { text: 'Building', link: '/development/building' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codingsushi79/discordlinkplus' },
    ],

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
      label: 'On this page',
    },

    footer: {
      message: 'MIT Licensed · DiscordLink+ by SushiMC',
      copyright: 'SushiMC',
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
  },

})
