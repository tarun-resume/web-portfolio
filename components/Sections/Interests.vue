<template>
  <div class="my-auto">
    <!-- Keep $t here because the title is a flat text string -->
    <h2 class="mb-5">{{ $t('interests.title') }}</h2>
    <ul>
      <!-- CHANGED: Switched to $tm for iterating over the array -->
      <li v-for="hobby in $tm('interests.hobbies')" :key="hobby">
        <!-- CHANGED: Wrapped hobby variable in $rt() for clean runtime evaluation -->
        {{ $rt(hobby) }}
      </li>
    </ul>
    <!-- <ul>
      <li>
        {{ $t('interests.firstBlock') }}
      </li>
      <li class="mb-0">
        {{ $t('interests.secondBlock') }}
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data() {
    return { };
  }
};
</script>
