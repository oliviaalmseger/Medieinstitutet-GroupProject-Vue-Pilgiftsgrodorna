<script setup lang="js">
import { useRouter } from 'vue-router';
const router = useRouter();

const startGame = () => {
  router.push('/game'); // Navigate to /game
};
</script>

<template>
    <div class="background">Info om spel</div>
    <button @click="startGame">Start Game</button>
</template>

<style scoped>
.background {
    background-color: yellowgreen;
}
</style>