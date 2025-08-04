export default defineNuxtConfig({
  modules: [
    "nuxt-swiper",
    "@nuxtjs/i18n",
    "nuxt-primevue",
    "@pinia/nuxt",
    "nuxt-delay-hydration",
  ],
  plugins: ["~/plugins/pinia"],
  i18n: {
    // lazy: true,
    langDir: "locales",
    strategy: "prefix_and_default",
    detectBrowserLanguage: false,
    locales: [
      {
        code: "en",
        iso: "en",
        dir: "ltr",
        name: "english",
        file: "en.json",
      },
      {
        code: "ar",
        iso: "ar",
        dir: "rtl",
        name: "عربي",
        file: "ar.json",
      },
    ],
    defaultLocale: "ar",
  },

  build: {
    transpile: ["vuetify"],
  },

  ssr: true,
  nitro: {
    // baseURL: "http://localhost:8000",
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },

  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    // NOTE: you should disable this once you've finished testing, it will break HMR
    debug: process.env.NODE_ENV === "development",
    mode: "init",
  },

  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },

      meta: [
        {
          name: "theme-color",
          content: "#1B395F",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/logo.png" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
          integrity:
            "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
        {
          rel: "stylesheet",
          href: "https://slider.alkathirimotors.com.sa/revslider/public/assets/css/settings.css",
          type: "text/css",
          media: "all",
        },
      ],
      script: [
        {
          async: true,
          innerHTML: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NQN2K7PF');
        `,
        },
        {
          async: true,
          innerHTML: `
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQN2K7PF"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        `,
        },
        {
          src: "/jquery.js",
        },
        {
          innerHTML: `
          var $ = jQuery.noConflict();
        `,
          type: "text/javascript",
        },
        {
          innerHTML: `
          var $ = jQuery.noConflict();

        `,
          type: "text/javascript",
        },
        {
          src: "https://slider.alkathirimotors.com.sa/revslider/public/assets/js/jquery.themepunch.tools.min.js",
        },
        {
          src: "https://slider.alkathirimotors.com.sa/revslider/public/assets/js/jquery.themepunch.revolution.min.js",
        },
        {
          src: "/bootstrap.bundle.min.js",
          async: true,
        },
        {
          src: "/lazy.js",
          async: true,
        },
        {
          src: "/moment.min.js",
          async: true,
        },
        {
          src: "/rome.js",
          async: true,
        },
        {
          src: "/rome.standalone.min.js",
          async: true,
        },
      ],
    },
  },

  // plugins: [{src:'~/plugins/jquery-no-conflict.js'}],

  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/css/bootstrap.css",
    "~/assets/rome/rome.css",
    "~/assets/style.css",
  ],
});
