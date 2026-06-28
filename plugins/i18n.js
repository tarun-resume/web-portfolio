export default defineNuxtPlugin((nuxtApp) => {
  // Use the helper injected globally by the i18n module
  const localePath = nuxtApp.$localePath('index')
  const switchLocalePath = nuxtApp.$switchLocalePath('es')
  
  // Your plugin logic here
})