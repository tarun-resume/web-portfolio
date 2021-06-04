<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ $t('workExperiences.title') }}</h2>

    <div
      v-for="work in $t('workExperiences.works')"
      :key="work.title"
      class="resume-item d-flex flex-column flex-md-row mb-5"
    >
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ work.position }}</h3>
        <div class="subheading mb-1">{{ work.companie }}</div>
        <div class="resume-date text-md-left">
          <span class="text-primary">{{ work.startEndDate }}</span>
        </div>
        <ul>
          <li v-for="responsabilitie in work.responsabilities" :key="responsabilitie">
           {{ responsabilitie }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { };
  }
};
</script>
