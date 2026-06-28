export default defineNuxtConfig({
  // 1. Replaces 'mode: universal'
  ssr: true,

  // 2. Fixed colorMode configuration to stop the 'darkMode' undefined error
  colorMode: {
    preference: 'system', // Options: 'system' | 'light' | 'dark'
    fallback: 'light',
    classSuffix: ''
  },

  // 3. Replaces Nuxt 2 'head' with Nuxt 3 'app.head'
  app: {
    head: {
      title: "My Resume Portfolio", // process.env.npm_package_name is not natively mapped in Nuxt 3
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "My Portfolio description" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/title.ico" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css" },
        { rel: "stylesheet", href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" },
        { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css" }
      ],
      script: [
        { src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/solid.min.js", defer: true },
        { src: "https://code.jquery.com/jquery-3.2.1.slim.min.js", defer: true },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js", defer: true },
        { src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js", defer: true }
      ]
    }
  },

  // 4. Global CSS remains the same
  css: ["@/assets/css/resume.css"],

  // 5. App Modules
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode"
  ],

  // 6. i18n Configuration
  i18n: {
    restructureDir: '.',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' }
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    lazy: true,
    vueI18n: './i18n.config.ts'
  },

  compatibilityDate: '2026-06-28',

  // Note: Nuxt 2 plugins config `{ src, ssr: false }` is deprecated.
  // To make swiper and vueTyper client-only, rename files to:
  // ~/plugins/swiper.client.js and ~/plugins/vueTyper.client.js
  plugins: [
    "~/plugins/swiper.js",
    "~/plugins/vueTyper.js"
  ]
  
  // Removed 'loading' (Not native in Nuxt 3)
  // Removed 'build.extend' webpack modifiers (Nuxt 3 uses Vite by default)
})