<script setup lang="js">
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';
import PopUp from '../components/PopUp.vue';
import HidingFrog from '../components/HidingFrog.vue';

onMounted(() => {
    document.body.classList.add('game-page');
});

onUnmounted(() => {
    document.body.classList.remove('game-page');
});

const frogIsFound = ref(false);
const hidingFrogRef = ref(null);

function foundFrog() {
    frogIsFound.value = true;
}

function playAgain() {
    frogIsFound.value = false;
    hidingFrogRef.value?.setRandomFrogPosition();
}
</script>

<template>
    <div class="container">
        <PopUp
            class="pop-up"
            v-if="frogIsFound"
            heading="Grattis!"
            content="Du hittade grodan!"
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
    height: 100vh;
    position: relative;
}

.pop-up {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
