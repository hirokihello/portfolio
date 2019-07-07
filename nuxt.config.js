
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'hirokihello.xyz | hirokihelloのポートフォリオ',
    meta: [
      { httpEquiv: "x-ua-compatible", content: "ie=edge"},
      { name: "description", content: "Max Yasuda（hirokihello）のポートフォリオ。terraformとdocker好きの駆け出しエンジニアです"},
      { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no"},
      { property: "og:locale", content: "ja_JP" },
      { property: "og:title", content: "hirokihello.xyz | hirokihelloのポートフォリオ" },
      { property: "og:description", content: "Max Yasuda（hirokihello）のポートフォリオ。terraformとdocker好きの駆け出しエンジニアです" },
      { property: "og:url", content: "https://hirokihello.xyz" },
      { property: "og:image", content: "http://hirokihello.xyz/hiroki.jpg" },
      { property: "og:image:secure_url", content: "https://hirokihello.xyz/hiroki.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:description", content: "Max Yasuda（hirokihello）のポートフォリオ。terraformとdocker好きの駆け出しエンジニアです" },
      { name: "twitter:title", content: "hirokihello.xyz | hirokihelloのポートフォリオ" },
      { name: "twitter:image", content: "http://hirokihello.xyz/hiroki.jpg" },
      { name: "twitter:creator", content: "@maxyasuda" },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-reboot.min.css"},
      { href: "//fonts.googleapis.com/css?family=Noto+Sans+JP:500,700", rel: "stylesheet"},
      { href: "//unpkg.com/ionicons@4.5.0/dist/css/ionicons.min.css", rel: "stylesheet"},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
