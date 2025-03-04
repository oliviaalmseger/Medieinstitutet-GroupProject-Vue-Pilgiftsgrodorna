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
    <div class="frog" v-on:mouseover="foundFrog" v-on:mouseleave="hideFrog"></div>

<div v-if="frogIsFound" >
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
    background-color: red;
    width: 40px;
    height: 40px;
    opacity: 0;

}
.frog:hover {
    opacity: 100;
}
p{
    background-color: antiquewhite;
}

</style>