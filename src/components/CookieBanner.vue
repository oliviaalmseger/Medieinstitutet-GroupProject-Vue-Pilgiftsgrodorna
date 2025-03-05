<script setup>
import { ref } from 'vue';

const emit = defineEmits(['btnClick']);
const showCookie = ref(true);

function handleClick() {
  console.log('click');
  emit('btnClick'); 
  acceptCookies(); 
}

function acceptCookies() {
  showCookie.value = false;  
}
</script>

<template>
  <div v-if="showCookie" class="cookie-banner">
    <!-- Ska inte vara en h1 här, men ingen rubriksnivå matchar "Acceptera cookie" texten. -->
    <h1>Acceptera cookies</h1>
    <div>
        <button @click="handleClick">Acceptera</button>
    <!-- Vad ska hända när man trycker på neka knappen? -->
        <button>Neka</button>
    </div>
  </div>
</template>

<style>
.cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #ff2700; 
}
</style>

