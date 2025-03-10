<script setup>
import WoodButton from './WoodButton.vue';

defineProps({
    heading: String,
    content: String,
    timer: String, 
    image: String,
    imageClass: String,
    closeButton: String,
});

const emit = defineEmits(['close']);
</script>

<template>
    <div>
        <h3>{{ heading }}</h3>
        <p>{{ content }} {{ timer }}</p>
        <img :src="image" :class="imageClass" alt="Liten bild på en groda" />
        <WoodButton @click="emit('close')" :label="closeButton" />
    </div>
</template>

<style scoped lang="scss">
div {
    width: 300px;
    height: 200px;
    padding: 16px;
    color: $text-color;
    background-color: rgba(0, 0, 0, 0.8);
    border: 3px solid $border-color;
    border-radius: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        margin-bottom: 20px;
        margin-top: 15px;
    }
}

@media (min-width: 834px) {
    div {
        border: 8px solid $border-color;
        width: 340px;
        height: 210px;
    }
}

@media (min-width: 1280px) {
    div {
        width: 340px;
        height: 220px;
    }
}
</style>

 