<script setup>
import { RouterView, RouterLink } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

</script>


<template>

  <HelloWorld msg="Vite + Vue" />

  <div>
    <nav>
      <RouterLink to="/start">Start</RouterLink> 
    </nav>
  </div>
  <div>
    <RouterView />
  </div>
  
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
