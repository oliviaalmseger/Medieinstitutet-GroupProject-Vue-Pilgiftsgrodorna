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
    <!-- Ingen rubriksnivå matchar "Acceptera cookie" texten. I designen ska det vara h2, men det matchar inte den grafiska profilen, har improviserat lite-->
    <p>Acceptera cookies</p>
    <div class="cookie-button-container">
        <div class="cookie-button" @click="handleClick">Acceptera</div>
        <div class="cookie-button" @click="handleClick">Neka</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: $detail-color; 
  padding: 40px 16px 32px 16px; 
  
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

p {
  font-size: $h2-fs-mobile;
  font-family: 'Luckiest Guy', sans-serif;
  color:#000 ;
}

.cookie-button-container {
  display: flex;
  gap: 30px;
  justify-content: center;
}

.cookie-button {
  background-image: url('/src/assets/figma_components/wood-sign-button.png');
  background-size: cover;
  background-position: center; 
  border: none;
  width: 117px;
  height: 57px;
  padding: 0; 
  
  display: flex; 
  align-items: center; 
  justify-content: center;
  
  cursor: pointer;
  text-align: center;

  font-size: $h2-fs-mobile;
  font-family: 'Luckiest Guy', sans-serif;
  color: #000;
}

@media (min-width: 1024px) {
    p {
      font-size: $h2-fs-desktop; 
    }
}
</style>

