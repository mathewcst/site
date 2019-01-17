module.exports = {
  title: 'Matheus Costa',
  description: 'Desenvolvedor Frontend',
  ga: 'UA-132697695-1',
  serviceWorker: true,
  themeConfig: {
    repo: 'mathewcst/site',
    repoLabel: 'Just my portfolio',
    search: false,
    navbar: false,
    lastUpdated: true,
  },
  locales: {
    '/': {
      lang: 'pt-BR',
      title: 'Matheus BR'
    },
    '/projetos': {
      lang: 'en-US',
      title: 'Matheus US'
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