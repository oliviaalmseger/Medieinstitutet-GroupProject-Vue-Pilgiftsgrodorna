<script setup lang="js">
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <img
            class="logo"
            src="../assets/figma_components/full-logo.svg"
            alt="Logga föreställande en blåsvart groda sittandes på en träplanka med texten Pilgiftsgrodan i samma färg som grodan på."
        />

        <nav>
            <div class="nav-bg">
                <RouterLink class="nav-btn" to="/">Hem</RouterLink>
            </div>

            <div class="nav-bg">
                <RouterLink class="nav-btn" to="/startGame">Spel</RouterLink>
            </div>

            <div class="nav-bg">
                <RouterLink class="nav-btn" to="/contactView"
                    >Kontakt</RouterLink
                >
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;

    .logo {
        display: inline-block;
        width: 288px;
        height: auto;
        margin-bottom: 15px;
    }

    .nav-bg {
        background-image: url(../assets/figma_components/nav-button.png);
        background-size: cover;
        background-position: center;
        width: 90px;
        height: 30px;
        alt: 'White plank with rounded corners acting as a background to the navigation buttons'; //Dubbelkolla alttext vid tillfälle

        display: inline-block;
        margin-inline: 5px;

        .nav-btn {
            padding-top: 5px;
            display: flex;
            justify-content: center;

            font-family: $link-font;
            font-size: $link-fontsize;
            color: $link-color;
            text-decoration: none;
            cursor: pointer;

            &:hover {
                font-weight: 400;
                color: $detail-color;
            }
        }
    }
}
</style>
