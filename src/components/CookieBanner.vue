<script setup>
import WoodButton from './WoodButton.vue';
import { ref } from 'vue';

const emit = defineEmits(['btnClick']);
const showCookie = ref(true);

const handleClick = () => {
    emit('btnClick');
    showCookie.value = false;
};
</script>

<template>
    <div v-if="showCookie" class="cookie-banner">
        <p>Acceptera cookies</p>
        <div class="cookie-button-container">
            <WoodButton
                label="Acceptera"
                @click="handleClick"
                aria-label="Acceptera cookies"
            />
            <WoodButton
                label="Neka"
                @click="handleClick"
                aria-label="Neka cookies"
            />
        </div>
        <div class="frog-cage">
            <img
                src="../assets/figma_components/frog-red.png"
                class="red-frog"
            />
            <img
                src="../assets/figma_components/frog-yellow-blue.png"
                class="yellow-blue-frog"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: $detail-color;
    padding: 40px 16px 32px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 32px;
    z-index: 1000;

    .cookie-button-container {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
    .frog-cage {
        position: fixed;
        bottom: 60px;
        left: 50%;

        .red-frog {
            position: absolute;
            transform: scaleX(-1);
            width: 80px;
            height: auto;
            bottom: 1px;
            left: 63px;
            rotate: 10deg;
        }

        .yellow-blue-frog {
            width: 80px;
            height: auto;
            transform: scaleX(-1);
            position: absolute;
            left: -135px;
            bottom: 10px;
            rotate: 10deg;
        }
    }
}

p {
    font-size: $h2-fs-mobile;
    font-family: 'Luckiest Guy', sans-serif;
    color: #000;
}

@media (min-width: 1280px) {
    p {
        font-size: $h2-fs-desktop;
    }
}
</style>
