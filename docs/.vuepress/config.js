module.exports = {
  title: 'Matheus Costa',
  description: 'desenvolvedor fullstack',
  base: '/site/',
  ga: 'UA-132697695-1',
  serviceWorker: true,
  themeConfig: {
    repo: 'mathewcst/site',
    repoLabel: 'Ver no Github',
    search: false,
    lastUpdated: true,
    locales: {
      '/': {
        selectText: 'Português',
        label: 'Português',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
      },
      '/en/': {
        selectText: 'English',
        label: 'English',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
      }
    }
  },
  markdown: {
    lineNumbers: true,
  },
  locales: {
    '/': {
      label: 'Português',
      lang: 'pt-BR',
    },
    '/en/': {
      label: 'English',
      lang: 'en-US',
      description: 'fullstack developer',
    }
  },
  evergreen: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@images': 'assets/images'
      }
    }
  }
}