<script setup>
import InfoCard from './InfoCard.vue';
import WelcomeCard from './WelcomeCard.vue';
import { ref } from 'vue';

const targetReadMore = ref(null);

defineExpose({
    targetReadMore,
});
</script>

<template>
    <main>
        <div class="startpage-container">
            <WelcomeCard />
            <article class="infocard-container">
                <InfoCard
                    ref="targetReadMore"
                    heading="Visste du att?"
                    content="Grodornas gift kommer från insekter som grodorna äter. Om man har en pilgiftsgroda i fångenskap och ger den annan mat så blir den mindre giftig."
                />
                <InfoCard
                    heading="Visste du att?"
                    content="Pilgiftsgrodorna är nyfikna av sig och gärna utforskar sina omgivningar."
                />
                <InfoCard
                    heading="Visste du att?"
                    content="Giftet har traditionellt använts av indianer i Sydamerika för att förgifta pilar vid jakt och det är också därför de fått namnet pilgiftsgrodor."
                />
                <InfoCard
                    heading="Smarta färger"
                    content="En del av pilgiftsgrodorna är inte alls särskilt giftiga men drar nytta av giftgrodornas rykte – med starka färger och mönster ser man farlig ut."
                />
                <InfoCard
                    heading="Peta inte på en sån!"
                    content="Giftet från en enda gyllene kokoigiftgroda kan döda 10 000 möss eller mellan 10 och 20 människor!"
                />
            </article>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    display: flex;
    justify-content: center;

    .startpage-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 4rem;

        .infocard-container {
            display: flex;
            flex-direction: column;
            gap: 70px;
        }
    }
}

@media (min-width: 834px) {
    main {
        .startpage-container {
            width: 620px;
        }
    }
}

@media (min-width: 1280px) {
    main {
        box-sizing: border-box;

        .startpage-container {
            width: 1124px;

            .infocard-container {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                width: 1124px;

                h3 {
                    margin-bottom: 1.5rem;
                }
            }
        }
    }
}
</style>
