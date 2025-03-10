<script setup>
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
        <div class="play-again-btn">
            <button @click="emit('close')">{{ closeButton }}</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
div {
    width: 300px;
    height: 170px;
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

    .red-frog {
        position: absolute;
        width: 185px;
        height: auto;
        bottom: 120px;
        left: -60px;
    }
}

.play-again-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/figma_components/wood-sign-button.png);
    background-size: contain;
    background-position: center;
    width: 100px;
    height: 40px;
    border: 0;
    border-radius: 0;

    button {
        font-size: 1rem;
    }
}
@media (min-width: 834px) {
    div {
        border: 8px solid $border-color;
        width: 300px;
        height: 210px;

        .red-frog {
            width: 215px;
            bottom: 150px;
        }
    }
}

@media (min-width: 1280px) {
    div {
        width: 300px;
        height: 220px;

        .red-frog {
            bottom: 150px;
        }
    }
}
</style>
