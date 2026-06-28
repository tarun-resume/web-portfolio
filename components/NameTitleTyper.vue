<template>
  <div>
    <h1 class="mb-0">
      <!-- FIXED: Wrapped in ClientOnly to prevent Server-Side Rendering (SSR) crashes -->
      <ClientOnly>
        <!-- FIXED: Removed 'this.' from text bindings -->
        <vue-typer
          :text="name"
          class="name"
          :repeat="0"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="20"
          :type-delay="82"
          :erase-on-complete="false"
          caret-animation="blink"
        ></vue-typer>

        <vue-typer
          :text="lastName"
          class="lastname custom-red-color"
          :repeat="0"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="1500"
          :type-delay="82"
          :pre-erase-delay="2000"
          :erase-delay="89"
          erase-style="backspace"
          :erase-on-complete="false"
          caret-animation="blink"
        ></vue-typer>
      </ClientOnly>
    </h1>
  </div>
</template>

<script>
export default {
  // FIXED: Explicit array definition for props (or object mapping)
  props: {
    name: {
      type: String,
      default: ""
    },
    lastName: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>
/* FIXED: Handled the text color via a clean, scoped style block instead of broken inline syntax */
:deep(.custom-red-color .vue-typer .custom.char) {
  color: red !important;
}
</style>
