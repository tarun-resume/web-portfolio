<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <!-- CHANGED: Switched brand anchor link to NuxtLink -->
      <NuxtLink class="navbar-brand" to="/">Portfolio</NuxtLink>
      
      <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation"></button>
          
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <!-- CHANGED: Switched internal page routing link to NuxtLink -->
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          
          <li class="nav-item">
            <!-- KEEP: Standard anchors are perfectly fine for external domain links like your blog -->
            <a class="nav-link" href="https://www.ivangreve.com.ar" target="_blank" rel="noopener">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav {
  background-color: paleturquoise;
  padding: 10px;
}

h1 {
  font-size: 3rem;
  line-height: 5.5rem;
}
</style>
