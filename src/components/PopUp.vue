<script setup>
defineProps({
    heading: String,
    content: String,
});
</script>

<template>
    <div>
        <h3>{{ heading }}</h3>
        <p>{{ content }}</p>
    </div>
</template>

<style scoped lang="scss">
div {
    width: 300px;
    height: 146px;
    padding: 16px;
    color: $text-color;
    background-color: rgba(0, 0, 0, 0.8);
    border: 3px solid $border-color;
    border-radius: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
        margin-bottom: 20px;
    }
}

@media (min-width: 834px) {
    div {
        border: 8px solid $border-color;
        width: 367px;
        height: 199px;
    }
}

@media (min-width: 1280px) {
    div {
        width: 263px;
        height: 174px;
    }
}
</style>
