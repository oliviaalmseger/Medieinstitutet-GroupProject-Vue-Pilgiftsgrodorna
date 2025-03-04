<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import StartPageView from "./views/StartPageView.vue";
import ContactView from "./views/ContactView.vue";
</script>


<template>
  <StartPageView />

  <HelloWorld msg="Vite + Vue" />
  <StartPageView />
  <ContactView />
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
