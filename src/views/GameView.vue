<script setup lang="js">
import { ref } from 'vue';

import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
    document.body.classList.add('game-page');
});

onUnmounted(() => {
    document.body.classList.remove('game-page');
});

const frogIsFound = ref(false);

function foundFrog() {
    frogIsFound.value = true;
}

function hideFrog() {
    frogIsFound.value = false;
}
</script>

<template>
    <div class="container">
        <div class="message" v-if="frogIsFound">
            <h3>Grattis!</h3>
            <p>Du hittade grodan!</p>
        </div>
        <div class="frog" v-on:mouseover="foundFrog" v-on:mouseleave="hideFrog">
            <img src="../assets/figma_components/logo.png" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    width: 100vw;
    height: 100vh;
    position: relative;
}

.message {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $text-color;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 22.76px;
    border: 3px solid $detail-color;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 263px;
    height: 146.02px;
    padding: 10px;
}

.frog {
    position: fixed;
    bottom: 20%;
    right: 10%;
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
