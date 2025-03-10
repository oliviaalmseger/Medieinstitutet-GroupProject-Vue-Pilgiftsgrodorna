<script setup>
import InfoCard from './InfoCard.vue';
import { ref } from 'vue';

const targetReadMore = ref(null);

defineExpose({
    targetReadMore,
});
</script>

<template>
            <article class="infocard-container">
                <InfoCard
                    ref="targetReadMore"
                    heading="Visste du att?"
                    content="Grodornas gift kommer från insekter som grodorna äter. Om man har en pilgiftsgroda i fångenskap och ger den annan mat så blir den mindre giftig."
                    image="../assets/figma_components/frog-blue.avif"
                    imageClass="blue-frog"
                />

                <InfoCard
                    heading="Visste du att?"
                    content="Pilgiftsgrodorna är nyfikna av sig och gärna utforskar sina omgivningar."
                    image="../assets/figma_components/frog-purple.avif"
                    imageClass="purple-frog"
                />

                <InfoCard
                    heading="Visste du att?"
                    content="Giftet har traditionellt använts av indianer i Sydamerika för att förgifta pilar vid jakt och det är också därför de fått namnet pilgiftsgrodor."
                    image="../assets/figma_components/frog-yellow-blue.avif"
                    imageClass="yellow-blue-frog"
                />
                <InfoCard
                    heading="Smarta färger"
                    content="En del av pilgiftsgrodorna är inte alls särskilt giftiga men drar nytta av giftgrodornas rykte – med starka färger och mönster ser man farlig ut."
                    image="../assets/figma_components/frog-red.avif"
                    imageClass="red-frog"
                />
                <InfoCard
                    heading="Peta inte på en sån!"
                    content="Giftet från en enda gyllene kokoigiftgroda kan döda 10 000 möss eller mellan 10 och 20 människor!"
                    image="../assets/figma_components/frog-yellow.avif"
                    imageClass="yellow-frog"
                />
            </article>
</template>

<style scoped lang="scss">
    .infocard-container {
        display: flex;
        flex-direction: column;
        gap: 70px;
    }

@media (min-width: 1280px) {

        .infocard-container {
            flex-direction: row;
            flex-wrap: wrap;
            width: 1124px;
    }
}
</style>
