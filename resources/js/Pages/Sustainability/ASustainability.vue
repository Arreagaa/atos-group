<script setup>
import AppWhiteHeader from "../../Layouts/AppWhiteHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
</script>
<template>
    <AppWhiteHeader />
    <div
        class="lg:block hidden py-48 bg-[url('/assets/img/Sostenibillidad.jpg')] bg-cover"
    >
        <div class="container items-center m-auto px-6 text-white">
            <p class="boldFont mt-48 text-8xl font-bold text-center">
                Sostenibillidad
            </p>
            <p class="lightFont text-4xl font-base text-center mt-12">
                Nos enfocamos en crear valor a largo plazo para los accionistas
                mediante <br />
                el aprovechamiento de oportunidades y la gestión eficaz de los
                riesgos <br />
                inherentes al desarrollo económico, medioambiental y social.
            </p>
        </div>
    </div>

    <div
        class="lg:hidden py-48 bg-[url('/assets/img/Sostenibillidad.jpg')] bg-cover"
    >
        <div class="container items-center m-auto px-6 text-white">
            <p class="boldFont text-5xl font-bold text-center">
                Sostenibillidad
            </p>
            <p class="lightFont text-xl font-base text-center mt-12">
                Nos enfocamos en crear valor a largo plazo para los accionistas
                mediante <br />
                el aprovechamiento de oportunidades y la gestión eficaz de los
                riesgos <br />
                inherentes al desarrollo económico, medioambiental y social.
            </p>
        </div>
    </div>

    <div class="max-w-app lg:my-40 items-left text-left">
        <div class="lg:block hidden container max-w-5xl mx-auto m-8 uppercase">
            <span
                class="boldFont leading-tight mx-auto w-full my-2 text-5xl font-bold leading-tight text-amber-400"
            >
                NUESTRA META:
            </span>
            <h1
                class="boldFont leading-tight mx-auto w-full my-2 text-8xl font-bold leading-tight text-zinc-600"
            >
                REUTILIZAR EL <br />
                100% DE MATERIALES
            </h1>
            <p
                class="lightFont text-5xl leading-tight mx-auto w-full my-2 leading-tight text-zinc-600"
            >
                EN NUESTROS PROCESOS <br />
                PARA EL 2025
            </p>
        </div>

        <div
            class="lg:hidden container max-w-5xl mx-auto m-12 px-3 py-8 uppercase"
        >
            <span
                class="boldFont leading-tight mx-auto w-full my-2 text-3xl font-bold leading-tight text-amber-400"
            >
                NUESTRA META:
            </span>
            <h1
                class="boldFont leading-tight mx-auto w-full my-2 text-4xl font-bold leading-tight text-zinc-600"
            >
                REUTILIZAR EL <br />
                100% DE MATERIALES
            </h1>
            <p
                class="lightFont text-2xl leading-tight mx-auto w-full my-2 font-bold leading-tight text-zinc-600"
            >
                EN NUESTROS PROCESOS <br />
                PARA EL 2025
            </p>
        </div>
    </div>
    <div>
        <AppFooter />
    </div>
</template>
