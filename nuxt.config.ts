// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss',
    'nuxt-icon',
    "@nuxtjs/cloudinary",
    '@nuxtseo/module',
    '@nuxtjs/google-fonts',
    'nuxt-gtag',
  ],
  ssr: true,
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {
        flexbox: true,
        grid: true,
      },
    },
  },
  googleFonts: {
    families: {
      'PT Serif': [400, 800],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://sample-knotsandepoch.rubymignot.com',
      siteName: 'Knots & Epoch | Timeless Timber',
      siteDescription: "Sample site for Ruby Mignot's portfolio.",
      language: 'en-US',
    },
    indexable: false,
  },
  gtag: {
    id: 'G-6V06Q3YR3B'
  },
})
