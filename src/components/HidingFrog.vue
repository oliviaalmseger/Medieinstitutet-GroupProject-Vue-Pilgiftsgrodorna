<script setup>
import { ref, defineEmits, defineExpose } from 'vue';

const emit = defineEmits(['found']);

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
    emit('found');
}

// Expose function so GameView.vue can call it
defineExpose({ setRandomFrogPosition });
</script>

<template>
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
</template>

<style scoped lang="scss">
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
