<script setup lang="js">
import InfoGameCard from '../components/InfoGameCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const startGame = () => {
  router.push('/game'); // Navigate to /game
};
</script>


<template>
    <InfoGameCard />
    <button @click="startGame">Start Game</button>
</template>
