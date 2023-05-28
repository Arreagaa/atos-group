<script setup>
import AppWhiteHeader from "../../Layouts/AppWhiteHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
</script>
<template>
    <AppWhiteHeader />
    <div
        class="lg:py-72 py-48 bg-[url('/assets/img/Sostenibillidad.jpg')] bg-cover"
    >
        <div class="container items-center m-auto px-6 text-white">
            <p class="boldFont lg:text-8xl text-5xl font-bold text-center">
                {{ $t("Sostenibilidad") }}
            </p>
            <p
                class="lightFont lg:text-2xl text-xl font-base text-center mt-12 2xl:px-96 xl:px-72"
            >
                {{
                    $t(
                        "Nos enfocamos en crear valor a largo plazo para los accionistas mediante el aprovechamiento de oportunidades y la gestión eficaz de los riesgos inherentes al desarrollo económico, medioambiental y social."
                    )
                }}
            </p>
        </div>
    </div>

    <div class="max-w-app lg:my-40 items-left text-left">
        <div
            class="container max-w-5xl mx-auto lg:m-8 m-12 px-3 py-8 uppercase"
        >
            <span
                class="boldFont leading-tight mx-auto w-full my-2 lg:text-5xl text-3xl font-bold leading-tight text-[#e7bd5f]"
            >
                {{ $t("NUESTRA META:") }}
            </span>
            <h1
                class="boldFont leading-tight mx-auto w-full my-2 lg:pr-12 lg:text-8xl text-4xl font-bold leading-tight text-zinc-600"
            >
                {{ $t("REUTILIZAR O RECICLAR EL 100% DE MATERIALES") }}
            </h1>
            <p
                class="lightFont lg:text-5xl text-2xl leading-tight lg:pr-80 mx-auto w-full my-2 leading-tight text-zinc-600 pr-12"
            >
                {{ $t("EN NUESTROS PROCESOS PARA EL 2025") }}
            </p>
        </div>
    </div>
    <div>
        <AppFooter />
    </div>
</template>
