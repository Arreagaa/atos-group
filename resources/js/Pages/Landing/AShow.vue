<script setup>
import AppHeader from "../../Layouts/AppHeader.vue";
import ABagTitleHistory from "./utils/ABagTitleHistory.vue";
import ABagTitleProducts from "./utils/ABagTitleProducts.vue";
import AVideo from "./AVideo.vue";
import AHistory from "./AHistory.vue";
import AProducts from "./AProducts.vue";
import AHero from "./AHero.vue";
</script>
<template>
    <section id="Welcome" class="bg-[url('/assets/1-Principal/Principal.png')]">
        <div>
            <AppHeader />
            <AHero />
        </div>
    </section>

    <section>
        <div class="relative">
            <br />
            <ABagTitleHistory id="history" />
            <div class="bg-[url('/assets/2-historia/FondoHistoria.png')]">
                <AHistory />
                <ABagTitleProducts />
                <AProducts id="products" />
            </div>
            <div class="products pt-16">
                <div class="text-yellow-500 uppercase text-center mt-20 mb-8">
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
        </div>
    </section>
</template>

<style>
@font-face {
    font-family: Outfit-Black;
    src: url("../../../../public/assets/Font/Outfit-Black.ttf");
}
#welcome,
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
