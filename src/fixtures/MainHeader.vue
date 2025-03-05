<script setup lang="js">
import { RouterLink } from "vue-router"

</script>

<template>
    <header>
    <nav>
        <div class="nav-bg">
            <RouterLink class="nav-btn" to="/start">Hem</RouterLink>
        </div>

        <div class="nav-bg">
        <RouterLink class="nav-btn" to="/startGame">Spel</RouterLink>
        </div>

        <div class="nav-bg">
         <RouterLink class="nav-btn" to="/contactView">Kontakt</RouterLink>
        </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
    display: flex; 
    justify-content: center;
    align-items: center;


    .nav-bg {
        background-image: url(../assets/figma_components/nav-button.png);
        background-size: cover; 
        background-position: center;
        width: 90px;
        height: 30px;
        alt: "white plank with rounded corners acting as a background to the navigation buttons";

        display: inline-block;
        margin-inline: 5px;
    

        .nav-btn {
        padding-top: 5px;
        display: flex;
        justify-content: center;
        padding-top: 9px;

        
        font-family: $link-font;
        font-size: $link-fontsize;
        color: $text-color;
        text-decoration: none;
        cursor: pointer;
        }
    }
}

</style>
