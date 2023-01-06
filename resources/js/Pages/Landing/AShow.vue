<script setup>
import AppHeader from "../../Layouts/AppHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
/* TITLE */
import ABagTitleHistory from "./utils/ABagTitleHistory.vue";
import ABagTitleProducts from "./utils/ABagTitleProducts.vue";
import ABagTitleGallery from "./utils/ABagTitleGallery.vue";
import AInformation from "./utils/AInformation.vue";
/* COMPONENTES */
import AContact from "./AContact.vue";
import AGallery from "./AGallery.vue";
import ACta from "./utils/ACta.vue";
import AVideo from "./AVideo.vue";
import AHistory from "./AHistory.vue";
import AProducts from "./AProducts.vue";
import AHero from "./AHero.vue";
</script>
<template>
    <section
        id="Welcome"
        class="bg-[url('/assets/1-Principal/Principal.png')] bg-cover"
    >
        <div>
            <AppHeader />
            <AHero />
        </div>
    </section>

    <section>
        <div class="relative">
            <br />
            <ABagTitleHistory id="history" />
            <div
                class="bg-[url('/assets/2-historia/FondoHistoria.png')] bg-cover"
            >
                <AHistory />
                <div id="products">
                    <ABagTitleProducts />
                    <AProducts />
                </div>
            </div>
            <div id="about" class="products pt-16">
                <div class="text-amber-300 uppercase text-center mt-20 mb-8">
                    <h1 class="title-video font-bold lg:text-5xl text-4xl">
                        Esto es lo
                    </h1>
                    <h1 class="title-video font-bold lg:text-5xl text-4xl">
                        que hacemos
                    </h1>
                </div>
                <AVideo />
            </div>
        </div>
    </section>

    <section>
        <div class="relative">
            <br />
            <AInformation />
            <br />
            <ACta />
            <br />
        </div>
    </section>

    <section id="media">
        <div class="relative">
            <ABagTitleGallery />
            <AGallery />
            <br />
        </div>
    </section>

    <section id="contact">
        <br />
        <div
            class="relative bg-[url('/assets/5-contacto/contacto.png')] bg-cover"
        >
            <br />
            <AContact />
            <br />
            <br />
        </div>
    </section>
    <section>
        <AppFooter />
    </section>
</template>

<style>
@font-face {
    font-family: Outfit-Black;
    src: url("../../../../public/assets/Font/Outfit-Black.ttf");
}
@font-face {
    font-family: Outfit-Regular;
    src: url("../../../../public/assets/Font/Outfit-Regular.ttf");
}
.title-video {
    font-family: Outfit-Black;
}
.relative {
    background-color: #fff;
}
.products {
    background-color: #ebedef;
}
</style>
