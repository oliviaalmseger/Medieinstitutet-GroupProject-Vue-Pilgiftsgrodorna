<script setup lang="js">
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';
import PopUp from '../components/PopUp.vue';

onMounted(() => {
    document.body.classList.add('game-page');
});

onUnmounted(() => {
    document.body.classList.remove('game-page');
});

const frogIsFound = ref(false);

// Randomize frogs position on load
const frogPosition = ref({
    bottom: `${Math.floor(Math.random() * 65) + 5}%`,
    right: `${Math.floor(Math.random() * 90) + 5}%`,
});

function setRandomFrogPosition() {
    frogPosition.value = {
        bottom: `${Math.floor(Math.random() * 65) + 5}%`,
        right: `${Math.floor(Math.random() * 90) + 5}%`,
    };
}

function foundFrog() {
    frogIsFound.value = true;
}

function playAgain() {
    frogIsFound.value = false;
    setRandomFrogPosition();
}
</script>

<template>
    <div class="container">
        <PopUp
            class="pop-up"
            v-if="frogIsFound"
            heading="Grattis!"
            content="Du hittade grodan!"
            image="src/assets/figma_components/frog-red.png"
            imageClass="red-frog"
            closeButton="Spela igen"
            @close="playAgain"
        />
        <div
            class="frog"
            v-on:mouseover="foundFrog"
            :style="{ bottom: frogPosition.bottom, right: frogPosition.right }"
        >
            <img
                src="../assets/figma_components/logo.png"
                alt="Groda för spelet 'Hitta grodan'"
            />
        </div>
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

.frog {
    position: fixed;
    opacity: 0;
    width: 64px;
    height: 64px;

    img {
        width: 100%;
        height: 100%;
    }
}
.frog:hover {
    opacity: 1;
}
</style>
