<script setup lang="js">
import { ref } from 'vue';

const frogIsFound = ref(false);


function foundFrog(){
    frogIsFound.value=true;
}

function hideFrog(){
    frogIsFound.value=false;
}

</script>

<template>
    <div class="background">
        <h1>Spelsida</h1>
    </div>
    <div class="frog" v-on:mouseover="foundFrog" v-on:mouseleave="hideFrog">
        <img src="../assets/figma_components/logo.png">
    </div>

<div class="message" v-if="frogIsFound" >
    <p>Yay you found the frog!</p>
</div>
</template>

<style scoped>
.background {
    background-color: pink;
    width: 100%;
    height: 100px;
}
.frog {
    opacity: 0;
    width: 100px;
    height: 100px;
    img {
        width: 100%;
        height: 100%;
    }
}
.frog:hover {
    opacity: 100;
}


.message {
    color: #EAE0C8;
    background-color: rgba(0, 0, 0, 0.80);
    border-radius: 22.76px;
    border: 3px solid rgba(255, 39, 0, 0.80);
    width: 400px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>