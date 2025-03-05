<script setup lang="js">
import { RouterView, RouterLink } from "vue-router";
import CookieBanner from "./components/CookieBanner.vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/start">Hem</RouterLink>
      <RouterLink to="/startGame">Spela</RouterLink>
      <RouterLink to="/contactView">Kontakt</RouterLink>
    </nav>
  </header>
  <CookieBanner />
  <RouterView />
</template>

<style scoped>
</style>
