<template>
  <div class="my-auto">
    <!-- Flat text strings stay as $t -->
    <h2 class="mb-5">{{ $t('skills.title') }}</h2>

    <div class="subheading mb-3">{{ $t('skills.iconsTitle') }}</div>
    <ul class="list-inline list-icons" style="text-align:center">
      <!-- CHANGED: Switched to $tm for the devIcons array -->
      <li v-for="icon in $tm('skills.devIcons')" :key="icon" class="list-inline-item">
        <!-- CHANGED: Wrapped class attribute lookup in $rt() -->
        <i :class="$rt(icon)"></i>
      </li>
    </ul>

    <div class="subheading mb-3">{{ $t('skills.workflow') }}</div>
    <ul>
      <!-- CHANGED: Switched to $tm for the workflow items array -->
      <li v-for="item in $tm('skills.itemList')" :key="item">
        <!--i class="fa-li fa fa-minus"></i-->
        <!-- CHANGED: Wrapped item text evaluation in $rt() -->
        {{ $rt(item) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { };
  }
};
</script>
