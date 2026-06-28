<template>
  <div class="my-auto">
    <!-- $t is perfect here because the title is a flat string -->
    <h2 class="mb-5">{{ $t('workExperiences.title') }}</h2>

    <!-- CHANGED: Switched to $tm for loop parsing -->
    <div
      v-for="work in $tm('workExperiences.works')"
      :key="work.title"
      class="resume-item d-flex flex-column flex-md-row mb-5"
    >
      <div class="resume-content mr-auto">
        <!-- CHANGED: Wrapped text variables with $rt() -->
        <h3 class="mb-0">{{ $rt(work.position) }}</h3>
        <div class="subheading mb-1">{{ $rt(work.companie) }}</div>
        <div class="resume-date text-md-left">
          <span class="text-primary">{{ $rt(work.startEndDate) }}</span>
        </div>
        <ul>
          <!-- CHANGED: Embedded loops also must pass values through $rt() -->
          <li v-for="responsabilitie in work.responsabilities" :key="responsabilitie">
           {{ $rt(responsabilitie) }}
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