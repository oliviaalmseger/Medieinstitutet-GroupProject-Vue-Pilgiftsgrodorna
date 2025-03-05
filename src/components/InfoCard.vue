<script setup>
defineProps({
    heading: String,
    content: String,
});
</script>

<template>
    <section class="info-card">
        <h3>{{ heading }}</h3>
        <p>{{ content }}</p>
    </section>
</template>

<style scoped lang="scss">
section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    background-color: $card-background-color;
    border-radius: 22px;
    border: 4px solid $border-color;
    padding: 2rem 2.5rem;

    h3 {
        margin-bottom: 1rem;
    }
}

@media (min-width: 834px) {
    section {
        max-width: 620px;
        padding: 2rem 3rem;

        border: 8px solid $border-color;

        h3 {
            margin-bottom: 1.5rem;
        }
    }
}

@media (min-width: 1280px) {
    section {
        width: 320px;
        height: 270px;
        padding: 1rem 1rem;
    }
}
</style>
