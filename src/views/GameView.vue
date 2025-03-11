<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

import PopUp from '../components/PopUp.vue';
import GameTimer from '../components/GameTimer.vue';
import HidingFrog from '../components/HidingFrog.vue';


onMounted(() => {
    document.body.classList.add('game-page');
});

onUnmounted(() => {
    document.body.classList.remove('game-page');
});

const frogIsFound = ref(false);
const hidingFrogRef = ref(null);

const stopTimer = ref(false);
const timerValue = ref('00:00');

function foundFrog() {
    frogIsFound.value = true;
    stopTimer.value = true; 
}

function playAgain() {
    frogIsFound.value = false;
    hidingFrogRef.value?.setRandomFrogPosition();
    stopTimer.value = false;
}

const shouldTimerStart = computed(() => !stopTimer.value);
const updateTime = (newTime) => {
  timerValue.value = newTime;
};
</script>

<template>
    <div class="container">
        <GameTimer :startTimer="shouldTimerStart" @time-updated="updateTime" />
        <PopUp
            class="pop-up"
            v-if="frogIsFound"
            heading="Grattis!"
            content="Du hittade grodan!"
            :timer="'Det tog dig ' + timerValue + ' sekunder att hitta grodan!'" 
            image="src/assets/figma_components/frog-red.avif"
            imageClass="red-frog"
            closeButton="Spela igen"
            @close="playAgain"
        />
        <HidingFrog ref="hidingFrogRef" @found="foundFrog" />
    </div>
</template>

<style scoped lang="scss">
.container {
    width: 100vw;
    height: 65vh;
    position: relative;

    .pop-up {
    position: absolute;
    left: 50%;
    bottom: 30%;
    transform: translate(-50%, -50%);
    }
}
</style>