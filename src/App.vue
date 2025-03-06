<script setup lang="js">
import { RouterView } from 'vue-router';
import CookieBanner from "./components/CookieBanner.vue";
import MainHeader from './fixtures/MainHeader.vue';
import MainFooter from './fixtures/MainFooter.vue';
</script>

<template>
  <MainHeader />
  <CookieBanner />
  <RouterView />
  <MainFooter /> 
</template>

<style scoped>
</style>