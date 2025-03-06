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

function foundFrog() {
    frogIsFound.value = true;
}

function hideFrog() {
    frogIsFound.value = false;
}
</script>

<template>
    <div class="container">
        <div class="pop-up" v-if="frogIsFound">
            <PopUp 
                heading="Grattis!" 
                content="Du hittade grodan!" 
                image="src/assets/figma_components/frog-red.png"
                imageClass="red-frog" 
            />
        </div>
        <div class="frog" v-on:mouseover="foundFrog" v-on:mouseleave="hideFrog">
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
