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
