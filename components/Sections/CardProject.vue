<template>
  <div>
    <!-- Removed fixed inline style for width/text-align to allow better responsive behavior -->
    <div class="card shadow mb-5 bg-white rounded text-center custom-card-width">
      <!-- Changed standard <a> to <NuxtLink> for fast internal/external navigation transitions -->
      <NuxtLink :to="projectInfo.siteUrl" target="_blank" rel="noopener">
        <!-- Nuxt 3 looks for assets relative to the 'public' folder or via direct imports -->
        <img class="card-img-top" :src="projectInfo.image" :alt="projectInfo.name" />
      </NuxtLink>
      
      <div class="card-body">
        <h5 class="card-title">{{ projectInfo.name }}</h5>
        <p class="card-text">
          {{ projectInfo.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Added basic object typing for props (strongly recommended in Vue 3 / Nuxt 3)
  props: {
    projectInfo: {
      type: Object,
      required: true,
      default: () => ({ name: '', description: '', image: '', siteUrl: '#' })
    }
  }
};
</script>

<style scoped>
/* Added 'scoped' attribute so these styles don't leak into other parts of your website */
.card {
  border: none;
}
.custom-card-width {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>