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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $card-background-color;
    border-radius: 22px;
    border: 3px solid $border-color;
    padding: 2rem 1.9rem;

    h3 {
        margin-bottom: 1rem;
    }
}
</style>
