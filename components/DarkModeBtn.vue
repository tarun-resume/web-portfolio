<template>
  <div>
    <!-- REMOVED 'this' from the v-if condition -->
    <i v-if="!darkMode" style="font-size:35px; color:white;" class="fas fa-sun btn" @click="setDarkMode"></i>
    <i v-else style="font-size:35px;" class="fas fa-moon btn" @click="setLightMode"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
      colorMode: "light"
    };
  },
  mounted() {
    // Safely sync the initial visual state with Nuxt color mode on the client side
    if (this.$colorMode) {
      this.colorMode = this.$colorMode.preference;
      this.darkMode = this.$colorMode.preference === 'dark';
    }
  },
  methods: {
    setDarkMode() {
      this.darkMode = true;
      this.colorMode = "dark";
      if (this.$colorMode) {
        this.$colorMode.preference = "dark";
      }
    },
    setLightMode() {
      this.darkMode = false;
      this.colorMode = "light";
      if (this.$colorMode) {
        this.$colorMode.preference = "light";
      }
    }
  }
};
</script>