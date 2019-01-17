module.exports = {
  title: 'Matheus Costa',
  description: 'My Portfolio',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Other Nav', link: '/other'}
    ],
  },
  plugins: [
    '@vuepress/google-analytics',
    {
      'ga': 'UA-132697695-1'
    }
  ],
  evergreen: true
}