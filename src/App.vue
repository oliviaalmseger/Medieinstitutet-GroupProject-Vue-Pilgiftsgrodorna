<script setup lang="js">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/start">Hem</RouterLink>
      <RouterLink to="/startGame">Spela</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
