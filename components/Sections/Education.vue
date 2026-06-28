<template>
  <div class="my-auto">
    <!-- Keep $t for simple flat strings -->
    <h2 class="mb-5">{{ $t("educationDegrees.title") }}</h2>

    <!-- CHANGED: Used $tm for the array loop -->
    <div
      v-for="degree in $tm('educationDegrees.degrees')"
      :key="degree.name"
      class="resume-item d-flex flex-column flex-md-row mb-5"
    >
      <div class="resume-content mr-auto">
        <!-- CHANGED: Wrapped loop values in $rt() -->
        <h3 class="mb-0">{{ $rt(degree.collage) }}</h3>
        <div class="subheading mb-1">{{ $rt(degree.name) }}</div>
        <div class="resume-date text-md-left">
          <span class="text-primary">{{ $rt(degree.startEndDate) }}</span>
        </div>
        
        <!-- CHANGED: Wrapped sub-loop arrays in $rt() -->
        <div v-for="item in degree.itemList" :key="item">{{ $rt(item) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>