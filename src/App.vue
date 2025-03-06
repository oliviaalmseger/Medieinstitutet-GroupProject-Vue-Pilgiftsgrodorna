<script setup lang="js">
import { RouterView } from 'vue-router';
import MainHeader from './fixtures/MainHeader.vue';
import MainFooter from './fixtures/MainFooter.vue';
</script>

<template>
  <MainHeader />
  <RouterView />
  <MainFooter /> 
</template>

<style scoped>
</style>