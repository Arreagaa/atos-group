<script setup>
import AppWhiteHeader from "../../Layouts/AppWhiteHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
import AInfo from "./AInfo.vue";
</script>
<template>
    <div>
        <AppWhiteHeader />
    </div>
    <div
        id="services"
        class="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
    >
        <div class="container xl:max-w-6xl mx-auto px-4">
            <AInfo />
        </div>
    </div>
    <div>
        <AppFooter />
    </div>
</template>
