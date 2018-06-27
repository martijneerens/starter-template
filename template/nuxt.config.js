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
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script: [
            //     {
            //        innerHTML: '<!--    _      __   __   _ _       _                _\n' +
            //        '         __| |___  \\ \\ / /__| | |__ __| |___ _ __ _ _ _| |_\n' +
            //        '        / _` / -_)  \\ V / _ \\ | / /(_-< / / \'_/ _` | \' \\  _|\n' +
            //        '        \\__,_\\___|   \\_/\\___/_|_\\_\\/__/_\\_\\_| \\__,_|_||_\\__|\n' +
            //        '\n' +
            //        '        Made in Amsterdam\n' +
            //        '        (c) de Volkskrant Crossmedia < volkskrant.nl/kijkverder > -->',
            // body: false,
            //         __dangerouslyDisableSanitizers: ['script']
            //     },
            { innerHTML: '// Chartbeat\n' +
                'window._sf_startpt = +new Date();\n' +
                '\n' +
                '// Our own tracking\n' +
                'window.__headerstart__ = +new Date();\n',
                body: false }
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

        //Doc: https://github.com/nuxt-community/analytics-module
        '@nuxtjs/google-analytics',

        // Access to environment
        '@nuxtjs/dotenv',
    ],

    /*
    ** Axios module configuration
    ** See https://github.com/nuxt-community/axios-module#options
    */
    axios: {
        // proxy: false
        // prefix: '',
        baseURL: (process.env.NODE_ENV === 'production') ? './' : '/'
    },

    // proxy:{
    //
    // },

    'google-analytics': {
        id: 'UA-47135003-2'
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
        { src: '~/plugins/axios', ssr: false }
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
