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
        <div class="frog" v-on:mouseover="foundFrog" v-on:mouseleave="hideFrog">
            <img src="../assets/figma_components/logo.png" />
        </div>

        <div class="message" v-if="frogIsFound">
            <h3>Grattis!</h3>
            <p>Du hittade grodan!</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden; 
    
}
.frog {
    position: absolute;
    top: calc(50% + 100px); 
    right: 20%;
    opacity: 0;
    width: 64px;
    height: 64px;
    img {
        width: 100%;
        height: 100%;
    }
}
.frog:hover {
    opacity: 100;
}

.message {
    color: $text-color;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 22.76px;
    border: 3px solid $detail-color;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: center;
    width: 263px;
    height: 146.02px;
    padding: 2px 0px 0.02px 0px;
}
</style>
