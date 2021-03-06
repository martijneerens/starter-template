const pkg = require('./package')
// const axios = require('axios')

require('dotenv').config();


module.exports = {
    mode: 'spa',

    /*
    ** Transition setup
    */
    transition: {
        name: 'page',
        mode: 'out-in'
    },

    /*
    ** App config
    */
    env: {
        items : [
            {
                api: 'productions',
                id: '{{ directus_project_id }}',
                name: 'meta'
            },
            '{{ directus_table }}'
        ]
    },

    /*
    ** Router setup
    */
    router: {
        mode: 'hash',
        base: (process.env.NODE_ENV === 'production') ? './' : '/'
    },

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.title,
        htmlAttrs: {
            lang : "nl",
            prefix : "og: http://ogp.me/ns#"
        },
        bodyAttrs: {
            'data-track-app' : pkg.name
        },
        base: { target: '_blank'},
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description},
            {hid: 'ogtitle', name: 'og:title', content: pkg.title},
            {hid: 'ogdescription', name: 'og:description', content: pkg.description},
            {hid: 'ogimage', name: 'og:image', content: 'http://www.volkskrant.nl/kijkverder/' +  pkg.year + '/' + pkg.name + '/thumbnail.jpg'},
            {hid: 'ogurl', name: 'og:url', content: 'http://www.volkskrant.nl/kijkverder/' +  pkg.year + '/' + pkg.name + '/'},
            {hid: 'ogsitename', name: 'og:site_name', content: 'Volkskrant Kijk Verder'},
            {hid: 'twittercard', name: 'twitter:card', content: 'summary_large_image'},
            {hid: 'twittersite', name: 'twitter:site', content: '@volkskrant'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: 'favicon.ico'}
        ],
        script: [

        ]
    },

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',

        // Doc: https://github.com/nuxt-community/proxy-module
        '@nuxtjs/proxy',

        // Doc: https://github.com/nuxt-community/modules/tree/master/packages/google-tag-manager
        '@nuxtjs/google-tag-manager',

        // Access to environment
        '@nuxtjs/dotenv',

        // analytics
        '@nuxtjs/google-analytics',

        ['volkskrant-kijkverder-nuxt-paygate', {paygate: true}]
    ],

    /*
    ** Axios module configuration
    ** See https://github.com/nuxt-community/axios-module#options
    */
    axios: {
        // proxy: false
        // prefix: '',
        baseURL: (process.env.NODE_ENV === 'production') ? './' : 'http://localhost:3000/'
    },

    proxy: {
        // Simple proxy
        '/directus/': {target: 'https://labs.volkskrant.nl/'}

    },

    'google-tag-manager': {
        id: (process.env.NODE_ENV === 'production') ? 'GTM-TPHZL7D' : null,
        // layer: 'dataLayer',
        pageTracking: false,
        // query: {
        //     // query params...
        //     gtm_auth:        '...',
        //     gtm_preview:     '...',
        //     gtm_cookies_win: '...'
        // },
        // scriptURL: '//example.com'
    },

    'google-analytics': {
        id: 'UA-100383833-5',
        // debug: {
        //     enabled: true,
        //     sendHitTask: true
        // }
    },

    /*
    ** Global CSS
    */
    css: [
        'assets/styles/style.scss'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~/plugins/polyfills', ssr: false },
        { src: '~/plugins/vklib', ssr: false },
        { src: '~/plugins/axios', ssr: false },
        {src: '~/plugins/log-event', ssr: false}
    ],

    /*
    ** Customize the progress bar color
    */
    loading: {color: '#000'},

    /*
    ** Customize loading indicator
    */
    loadingIndicator: {
        name: '~/loader/vk.html',
        textColor: 'black',
        color: 'black',
        background: '#d3d3d3'
    },

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
