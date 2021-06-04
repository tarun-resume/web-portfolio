<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ $t('interests.title') }}</h2>
    <ul>
      <li v-for="hobby in $t('interests.hobbies')" :key="hobby">
        {{ hobby }}
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
