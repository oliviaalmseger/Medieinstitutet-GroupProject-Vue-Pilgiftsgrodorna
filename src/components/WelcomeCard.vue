<template>
    <section class="welcome-card">
        <h2>Välkommen till Pilgiftsgrodornas fantastiska paradis!</h2>
        <p>Här kan du upptäcka den färgsprakande världen av pilgiftsgrodor!</p>
        <p>Utforska, spela och fascineras av naturens små mästare!</p>

        <div class="welcome-frogs">
            <img
                src="../assets/figma_components/frog-red.png"
                class="red-frog"
            /><img
                src="../assets/figma_components/frog-yellow-blue.png"
                class="blueyellow-frog"
            />
        </div>
        <div class="read-more-btn">
            <button>Läs mer</button>
        </div>
    </section>
</template>

<style scoped lang="scss">
.welcome-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 300px;
    margin: 35px 0rem 70px 0rem;
    padding: 1rem;
    position: relative;

    h2 {
        margin: 0.5rem 0px;
    }

    .welcome-frogs {
        .red-frog {
            width: 80px;
            height: auto;
            position: absolute;
            left: 15px;
            bottom: 25px;
        }

        .blueyellow-frog {
            width: 80px;
            height: auto;
            position: absolute;
            right: 15px;
            bottom: 20px;
        }
    }

    .read-more-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(../assets/figma_components/wood-sign-button.png);
        background-size: contain;
        background-position: center;
        width: 80px;
        height: 40px;
        margin: 2rem 0rem 1rem 0rem;
    }
}

@media (min-width: 834px) {
    .welcome-card {
        align-items: center;
        width: 100%;
        padding: 2rem 3rem;
        margin-top: 70px;

        h2 {
            margin-bottom: 1.5rem;
            width: 450px;
        }

        p {
            width: 500px;
            margin-bottom: 1rem;
        }

        .welcome-frogs {
            .red-frog {
                width: 120px;
                left: 50px;
                bottom: 75px;
            }

            .blueyellow-frog {
                width: 140px;
                right: 50px;
                bottom: 60px;
            }
        }

        .read-more-btn {
            width: 170px;
            height: 62px;
            margin: 2rem 0rem 3rem 0rem;
        }
    }
}

@media (min-width: 1280px) {
    .welcome-card {
        display: flex;
        align-items: center;
        width: 1124px;
        padding: 2.5rem 1rem;
        margin: 70px 0px 90px 0px;

        h2 {
            width: 700px;
        }
        p {
            width: 700px;
            margin-bottom: 1rem;
        }

        .read-more-btn {
            display: none;
        }

        .welcome-frogs {
            .red-frog {
                width: 200px;
                left: 20px;
                bottom: 30px;
            }

            .blueyellow-frog {
                width: 200px;
                right: 50px;
                top: 30px;
            }
        }
    }
}
</style>
