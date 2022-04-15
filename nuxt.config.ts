import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // target : "static",git
    // ssr : false
    buildModules : [
        '@nuxtjs/vuetify'
    ],
    build: {
        babel: {
            "presets": [
                [
                    "@babel/preset-env",
                    {
                        "useBuiltIns": "entry"
                    }
                ]
            ]
        }
    }
})
