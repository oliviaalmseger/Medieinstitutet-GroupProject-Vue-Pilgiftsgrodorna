<script setup>
defineProps({
    heading: String,
    content: String,
    image: String,
    imageClass: String, 
});
</script>

<template>
    <section class="info-card">
        <h3>{{ heading }}</h3>
        <p>{{ content }}</p>
        <img :src="image" :class="imageClass" alt="Liten bild på en groda" />
    </section>
</template>

<style scoped lang="scss">
.info-card {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 1.5rem;

    h3 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 2.5rem;
    }

    .blue-frog {
        width: 100px;
        height: auto;

        position: absolute;
        left: 330px;
        top: 600px;
    }

    .purple-frog {
        transform: scaleX(-1); 
        width: 100px;
        height: auto;

        position: absolute;
        left: 355px;
        top: 1117px;
    }

        .yellow-blue-frog {
        transform: scaleX(-1);
        width: 120px;
        height: auto;

        position: absolute;
        left: 130px;
        bottom: 978px;
    }

    .red-frog {
        transform: scaleX(-1); 
        width: 170px;
        height: auto;

        position: absolute;
        left: 290px;
        bottom: 365px;
    }
    
    .yellow-frog {
        width: 110px;
        height: auto;

        position: absolute;
        left: 150px;
        bottom: 325px;        
    }
}

@media (min-width: 834px) {
    .info-card {
        width: 620px;
        padding: 2rem 3rem;

        p {
            margin-bottom: 1.5rem;
        }

        .blue-frog {
        width: 130px;
        height: auto;

        position: absolute;
        left: 580px;
        top: 780px;
        }

        .purple-frog {
        transform: scaleX(-1); 
        width: 130px;
        height: auto;

        position: absolute;
        left: 600px;
        top: 1240px;
        }

        .yellow-blue-frog {
        transform: scaleX(-1);
        width: 180px;
        height: auto;

        position: absolute;
        left: 40px;
        bottom: 810px;
        }

        .red-frog {
        transform: scaleX(-1); 
        width: 170px;
        height: auto;

        position: absolute;
        left: 565px;
        bottom: 350px;
        }
    
        .yellow-frog {
        width: 175px;
        height: auto;

        position: absolute;
        left: 110px;
        bottom: 255px;        
        }
    }
}

@media (min-width: 1280px) {
    .info-card {
        width: 320px;
        height: 270px;
        padding: 1.5rem 1rem 0 1rem;
        margin-bottom: 20px;
        margin-right: 8px;

        .blue-frog {
        width: 150px;
        height: auto;

        position: absolute;
        left: 250px;
        top: 582px;
        }

        .purple-frog {
        transform: scaleX(-1); 
        width: 150px;
        height: auto;

        position: absolute;
        left: 680px;
        top: 790px;
        }

        .yellow-blue-frog {
        transform: scaleX(-1);
        width: 180px;
        height: auto;

        position: absolute;
        left: 840px;
        bottom: 700px;
        }

        .red-frog {
        transform: scaleX(-1); 
        width: 200px;
        height: auto;

        position: absolute;
        left: 215px;
        bottom: 70px;
        }
    
        .yellow-frog {
        width: 160px;
        height: auto;

        position: absolute;
        left: 395px;
        bottom: 335px;        
        }
    }
}
</style>
