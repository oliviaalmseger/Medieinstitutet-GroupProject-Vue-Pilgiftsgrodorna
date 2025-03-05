<script setup lang="js">
import { RouterView } from 'vue-router';
import CookieBanner from "./components/CookieBanner.vue";
import MainHeader from './fixtures/MainHeader.vue';

</script>

<template>

  <MainHeader />
  <CookieBanner />
  <RouterView />
</template>

<style scoped>
</style>
