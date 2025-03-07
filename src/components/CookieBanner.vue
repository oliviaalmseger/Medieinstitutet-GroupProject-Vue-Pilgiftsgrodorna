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
}

p {
    font-size: $h2-fs-mobile;
    font-family: 'Luckiest Guy', sans-serif;
    color: #000;
}

.cookie-button-container {
    display: flex;
    gap: 30px;
    justify-content: center;
}

.cookie-button {
    background: url('/src/assets/figma_components/wood-sign-button.png')
        no-repeat center / cover;
    border: none;
    width: 117px;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    font-size: $h2-fs-mobile;
    font-family: 'Luckiest Guy', sans-serif;
    color: #000;
}

@media (min-width: 1024px) {
    p {
        font-size: $h2-fs-desktop;
    }
}
</style>
