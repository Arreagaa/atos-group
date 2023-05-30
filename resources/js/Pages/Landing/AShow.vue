<script setup>
import AppHeader from "../../Layouts/AppHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
/* TITLE */
import ABagTitleHistory from "./utils/ABagTitleHistory.vue";
import ABagTitleProducts from "./utils/ABagTitleProducts.vue";
import ABagTitleGallery from "./utils/ABagTitleGallery.vue";
import AInformation from "./utils/AInformation.vue";
import AWidget from "./utils/AWidget.vue";
/* COMPONENTES */
import AContact from "./AContact.vue";
import AGallery from "./AGallery.vue";
import ACta from "./utils/ACta.vue";
import AVideo from "./AVideo.vue";
import AHistory from "./AHistory.vue";
import AProducts from "./AProducts.vue";
import ABack from "./utils/ABack.vue";
import AHero from "./AHero.vue";
import ACertifications from "./ACertifications.vue";
</script>
<template>
    <section
        id="Welcome"
        class="bg-[url('/assets/1-Principal/IMG_1221.jpg')] bg-cover"
    >
        <div>
            <AppHeader />
            <AHero />
        </div>
    </section>

    <section>
        <div class="view bg-white relative">
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
            <div id="about" class="bg-[#ebedef] pt-16">
                <AVideo />
            </div>
        </div>
    </section>

    <section>
        <div>
            <div class="py-4">
                <AInformation />
            </div>
            <ACta />
            <ACertifications />
        </div>
    </section>

    <section id="media" class="bg-[#ebedef]">
        <div class="py-12">
            <ABagTitleGallery />
            <AGallery />
        </div>
    </section>

    <section id="contact" class="bg-[#ebedef]">
        <div class="bg-[url('/assets/5-contacto/contacto.png')] bg-cover">
            <div class="py-4">
                <AContact />
            </div>
        </div>
    </section>
    <section>
        <AppFooter />
        <ABack />
        <AWidget />
    </section>
</template>
