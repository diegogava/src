import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    },
    //...
  ],
  vite: {

    build: {

        cssCodeSplit: true
    },

    // vue: {
    //   template: {
    //     transformAssetUrls,
    //   },
    // },
  },
})