module.exports = {    
    publicDir: 'public',
    title: 'BackAppX',
    themeColor: '#0077FF',
    accentColor: '#0077FF',
    head: [
      [
         'link',
        {
          rel: 'stylesheet',
        }
      ],
    ],

    themeConfig:{
      logo: {
        light: '/logo.png',
        dark: '/logo-dark.png'
       },
        
        siteTitle: "",
        
        
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
              collapsible: false,
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
                { text: "Social sign-in", link:"/authentification/socialSignin"},

              ],
            },
            {
              text: "Storage",
              collapsible: true,
              items: [
                { text: "Getting Started", link: "/storage/getting-started-Strg" },
                { text: "Upload files", link: "/storage/uploadfiles" },
                { text: "Download files", link:"/storage/downloadfiles"},
              ],
            },
            {
              text: "API (REST)",
              collapsible: true,
              items: [
                { text: "Getting Started", link: "/apirest/getting-started-api" },
                { text: "Crud Api", link: "/apirest/crudapi" },
                { text: "Payement Api", link: "/apirest/payementapi" },

              ],
            },

            {
              text: "Extensions",
              collapsible: true,
              items: [
                { text: "Getting Started", link: "/extensions/getting-started-ext" },
                { text: "Trigger Email", link: "/extensions/triggeremail" },
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
            { icon: "github", link: "https://github.com/medyassin-khabthani/BackAppX-Front" },
            { icon: "twitter", link: "" },
            { icon: "discord", link: "", target: "_blank" },
          ],

          

    },
    
    
    
}