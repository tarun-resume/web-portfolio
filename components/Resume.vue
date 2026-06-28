<template>
  <section id="page-top">
    <div class="container-fluid p-0">
      <!-- FIXED: Nuxt 3 matches files in components/Sections/* automatically -->
      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <SectionsPresentation />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <SectionsSkills />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <SectionsExperience />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <SectionsEducation />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <SectionsInterests />
      </section>

      <!--section class="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
        <SectionsProjects />
      </section-->
    </div>
  </section>
</template>

<script>
export default {
  // REMOVED: Every single component import and the 'components' declaration object.
  // Nuxt 3 auto-resolves your directory paths natively.
  methods: {}
};
</script>

<style>
/* Kept clean for global global layout scope variations */
</style>
