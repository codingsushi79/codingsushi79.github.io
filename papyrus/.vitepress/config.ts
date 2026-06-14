import { defineConfig } from 'vitepress'

const docsBase = '/papyrus/'

export default defineConfig({
  title: 'Papyrus',
  description: 'Paper-compatible Minecraft server software by SushiMC',
  lang: 'en-US',
  base: docsBase,
  outDir: '../website-papyrus',
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
    siteTitle: 'Papyrus',

    nav: [
      { text: 'Docs', link: '/getting-started/introduction' },
      { text: 'Download', link: '/download' },
      { text: 'Configuration', link: '/configuration/overview' },
      { text: 'API', link: '/api/overview' },
      {
        text: 'GitHub',
        link: 'https://github.com/codingsushi79/Papyrus',
      },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Requirements', link: '/getting-started/requirements' },
          { text: 'Quick Start', link: '/getting-started/quick-start' },
          { text: 'Download', link: '/download' },
        ],
      },
      {
        text: 'Running',
        collapsed: false,
        items: [
          { text: 'Production', link: '/running/production' },
        ],
      },
      {
        text: 'Configuration',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/configuration/overview' },
          { text: 'Papyrus Options', link: '/configuration/papyrus-options' },
          { text: 'Performance', link: '/configuration/performance' },
          { text: 'Vanilla Preset', link: '/configuration/vanilla-preset' },
          { text: 'Redstone Presets', link: '/configuration/redstone-presets' },
        ],
      },
      {
        text: 'API',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/api/overview' },
          { text: 'Plugin Development', link: '/api/plugin-development' },
          { text: 'Packages', link: '/api/packages' },
          { text: 'Branding & Compatibility', link: '/api/branding' },
        ],
      },
      {
        text: 'Development',
        collapsed: true,
        items: [
          { text: 'Building', link: '/development/building' },
          { text: 'Project Structure', link: '/development/project-structure' },
          { text: 'Contributing', link: '/development/contributing' },
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
      { icon: 'github', link: 'https://github.com/codingsushi79/Papyrus' },
    ],

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
      label: 'On this page',
    },

    footer: {
      message: 'GPL/MIT · Papyrus by SushiMC',
      copyright: 'SushiMC',
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
  },

})
