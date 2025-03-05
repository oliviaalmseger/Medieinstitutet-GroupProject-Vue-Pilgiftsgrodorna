<template>
    <section class="welcome-card">
        <h2>Välkommen till Pilgiftsgrodornas fantastiska paradis!</h2>
        <p>Här kan du upptäcka den färgsprakande världen av pilgiftsgrodor!</p>
        <p>Utforska, spela och fascineras av naturens små mästare!</p>
    </section>
</template>

<style scoped lang="scss">
.welcome-card {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 300px;
    margin: 20px 0rem 70px 0rem;
    padding: 1rem;

    h2 {
        margin: 0.5rem 0px;
    }
}

@media (min-width: 834px) {
    .welcome-card {
        width: 100%;
        padding: 2rem 3rem;

        h3 {
            margin-bottom: 1.5rem;
        }
    }
}

@media (min-width: 1280px) {
    .welcome-card {
        display: flex;
        align-items: center;
        width: 1124px;
        padding: 1rem 1rem;
        margin-bottom: 90px;

        h2 {
            width: 700px;
        }
        p {
            width: 700px;
            margin-bottom: 1rem;
        }
    }
}
</style>
