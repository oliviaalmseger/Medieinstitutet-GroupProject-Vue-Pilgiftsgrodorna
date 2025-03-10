<script setup>
import { useRouter } from 'vue-router';
import WoodButton from '../components/WoodButton.vue';

const router = useRouter();

const startGame = () => {
    router.push('/game');
};
</script>

<template>
    <main>
        <div class="infogame-container">
            <section class="info-game-card">
                <h2>Hitta pilgiftsgrodan!</h2>
                <p>
                    Som du fått lära dig så tycker pilgiftsgrodan om att
                    utforska. Någonstans i djungeln är det en som är på
                    upptäcktsfärd. Kan du hitta den?
                </p>
                <p>Dra med musen över djungeln för att leta efter grodan!</p>
                <img
                    src="../assets/figma_components/frog-blue.png"
                    class="blue-frog"
                    alt="Liten bild på en groda"
                />

                <div class="start-game-btn">
                    <WoodButton label="Starta spelet" @click="startGame" />
                </div>
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.infogame-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .info-game-card {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 284px;
        margin: 35px 0rem 70px 0rem;
        padding: 1rem;
        position: relative;

        h2 {
            margin-top: 1.5rem;
            margin-bottom: 2.5rem;
        }

        p {
            margin-bottom: 2rem;
        }

        .start-game-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url(../assets/figma_components/wood-sign-button.png);
            background-size: contain;
            background-position: center;
            width: 164px;
            height: 57px;
            margin-bottom: 1.5rem;
        }
    }
}

@media (min-width: 834px) {
    .infogame-container {
        .info-game-card {
            width: 445px;
            padding: 2rem;
            margin-top: 70px;

            p {
                margin-bottom: 3rem;
            }
        }
    }
}

@media (min-width: 1280px) {
    .infogame-container {
        .info-game-card {
            width: 825px;

            h2 {
                font-size: $h2-fs-desktop;
            }
        }
    }
}
</style>
