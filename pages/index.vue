<template>
  <section>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Resume Tarun</span>
        <span class="d-none d-lg-block">
          <img
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="/profile.jpg"
            alt="Profile Image"
          />
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#about')"
              href="#"
              >{{ $t('links.about') }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#skills')"
              href="#"
              >{{ $t('links.skills') }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#experience')"
              href="#"
              >{{ $t('links.experience') }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#education')"
              href="#"
              >{{ $t('links.education') }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#interests')"
              href="#"
              >{{ $t('links.interests') }}</a
            >
          </li>
          <li class="nav-item">
            <div style="position:fixed; bottom:10px; left:10px; z-index:1000;">
              <DarkModeBtn />
            </div>
          </li>
          <li class="nav-item">
            <div style="position:fixed; bottom:10px; right: 10px;z-index:1000;">
              <!-- This will now evaluate correctly -->
              <NuxtLink class="btn btn-light" :to="switchLocalePath('en')">EN</NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div class="resume">
      <Resume />
    </div>
  </section>
</template>

<script>
import jump from "jump.js";

export default {
  // REMOVED: Explicit component imports (Nuxt 3 auto-imports Resume and DarkModeBtn)
  
  setup() {
    // Explicitly grab the routing composable context
    const switchLocalePath = useSwitchLocalePath()

    useHead({
      title: "Tarun Verma"
    })

    return {
      switchLocalePath
    }
  },
  methods: {
    jumpTo(element) {
      if (process.client) {
        jump(element);
      }
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
  line-height: 5.5rem;
}
@media (min-width: 992px) {
  .resume {
    padding-top: 0;
    padding-left: 17rem;
  }
}
</style>
