module.exports = {
  publicDir: 'public',
  title: 'BackAppX',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: {
      light: '/logo.png',
      dark: '/logo-dark.png'
    },


    colors: {
      accent: '#FF6347', // Example: change accent color to coral
      textColor: '#333', // Example: change text color to dark grey
      primary: '#1E90FF' // Example: change primary color to dodger blue
    },

    siteTitle: "",

    nav: [
      { text: 'BackAppX', link: 'http://localhost:3000', target: '_self' },
      { text: 'Dashboard', link: 'http://localhost:3000/dashboard', target: '_self' },
    ],

    sidebar: [
      {
        text: "BackAppX",
        collapsible: true,
        items: [
          { text: "Getting Started", link: "/" },
        ],
      },
      {
        text: "Project Setup",
        collapsible: true,
        items: [
          { text: "Prerequisites", link: "/projectsetup/prerequisites" },
          { text: "Create your application", link: "/projectsetup/create-application" },
        ],
      },
      {
        text: "Authentification",
        collapsible: true,
        items: [
          { text: "Getting Started", link: "/authentification/getting-started-auth" },
          { text: "Sign in", link: "/authentification/signin" },

        ],
      },
      {
        text: "Storage",
        collapsible: true,
        items: [
          { text: "Getting Started", link: "/storage/getting-started-Strg" },
          { text: "Upload files", link: "/storage/uploadfiles" },
        ],
      },
      {
        text: "Payment",
        collapsible: true,
        items: [
          { text: "Getting Started", link: "/payment/getting-started-payment" },
          { text: "Payment", link: "/payment/payment" },
        ],
      },
      {
        text: "API (REST)",
        collapsible: true,
        items: [
          { text: "Getting Started", link: "/apirest/getting-started-api" },
          { text: "Crud Api", link: "/apirest/crudapi" },
        ],
      },


      {
        text: "Flutter SDK",
        collapsible: true,
        items: [
          { text: "Getting Started", link: "/fluttersdk/getting-started-sdk" },
          { text: "Sdk setup", link: "/fluttersdk/sdk-setup" },
        ],
      },

    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/BackAppX" },
    ],



  },



}