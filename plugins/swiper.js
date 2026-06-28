// ~/plugins/swiper.client.js
// Note: Ensure you renamed this file to .client.js on your disk!

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css' // Ensure standard layout styles are imported

export default defineNuxtPlugin((nuxtApp) => {
  // Registers the swiper extension globally into the Vue 3 framework instance
  nuxtApp.vueApp.use(VueAwesomeSwiper)
})
