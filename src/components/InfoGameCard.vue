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
                    src="../assets/figma_components/frog-yellow-blue.png"
                    class="blueyellow-frog"
                />

                <div class="start-game-btn">
                    <button>Starta spelet</button>
                </div>
            </section>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    display: flex;
    justify-content: center;

    .info-game-card {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 284px;
        margin: 35px 0rem 70px 0rem;
        padding: 1rem;
        position: relative;

        .blueyellow-frog {
            width: 120px;
            height: auto;
            position: absolute;
            right: -20px;
            top: -30px;
        }

        h2 {
            font-size: 1.1rem;
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
            align-items: center;
            width: 445px;
            padding: 2rem;
            margin-top: 70px;

            .blueyellow-frog {
                width: 170px;
                height: auto;
                position: absolute;
                right: -30px;
                top: -50px;
            }

            h2 {
                font-size: $h3-fs-tablet;
            }

            p {
                margin-bottom: 3rem;
            }
        }
    }
}

@media (min-width: 1124px) {
    .infogame-container {
        .info-game-card {
            align-items: center;
            width: 825px;

            padding: 2rem;
            margin-top: 70px;

            .blueyellow-frog {
                width: 250px;
                height: auto;
                position: absolute;
                right: -60px;
                top: -50px;
            }

            h2 {
                font-size: $h2-fs-desktop;
            }
        }
    }
}
</style>
