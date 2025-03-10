<script setup>
import InfoCard from './InfoCard.vue';
import { ref } from 'vue';
import frogBlue from 'src/assets/figma_components/frog-blue.avif';
import frogPurple from 'src/assets/figma_components/frog-purple.avif';
import frogYellowBlue from 'src/assets/figma_components/frog-yellow-blue.avif';
import frogRed from 'src/assets/figma_components/frog-red.avif';
import frogYellow from 'src/assets/figma_components/frog-yellow.avif';

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
                    :image="frogBlue"
                    imageClass="blue-frog"
                />

                <InfoCard
                    heading="Visste du att?"
                    content="Pilgiftsgrodorna är nyfikna av sig och gärna utforskar sina omgivningar."
                    :image="frogPurple"
                    imageClass="purple-frog"
                />

                <InfoCard
                    heading="Visste du att?"
                    content="Giftet har traditionellt använts av indianer i Sydamerika för att förgifta pilar vid jakt och det är också därför de fått namnet pilgiftsgrodor."
                    :image="frogYellowBlue"
                    imageClass="yellow-blue-frog"
                />
                <InfoCard
                    heading="Smarta färger"
                    content="En del av pilgiftsgrodorna är inte alls särskilt giftiga men drar nytta av giftgrodornas rykte – med starka färger och mönster ser man farlig ut."
                    :image="frogRed"
                    imageClass="red-frog"
                />
                <InfoCard
                    heading="Peta inte på en sån!"
                    content="Giftet från en enda gyllene kokoigiftgroda kan döda 10 000 möss eller mellan 10 och 20 människor!"
                    :image="frogYellow"
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
