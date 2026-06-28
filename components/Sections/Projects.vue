<template>
  <div class="my-auto">
    <!-- Keep $t here because the title is a plain text string -->
    <h2 class="mb-5">{{ $t('projects.title') }}</h2>

    <!-- CHANGED: Switched to $tm for iterating over the projects array -->
    <!-- Nuxt 3 auto-resolves your component name to <SectionsCardProject> or <CardProject> -->
    <SectionsCardProject 
      v-for="project in $tm('projects.projectsInfo')" 
      :key="project.name" 
      :projectInfo="project" 
      class="mb-5"
    />
  </div>
</template>

<script>
export default {
  // REMOVED: Explicit CardProject import and components property.
  // Nuxt 3 automatically imports files inside your components/ directory.
  data() {
    return { };
  }
};
</script>
