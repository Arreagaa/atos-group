<script setup>
import AppHeader from "../../Layouts/AppHeader.vue";
import AHero from "./AHero.vue";
</script>
<template>
    <section id="Welcome" class="bg-[url('/assets/1-Principal/Principal.png')]">
        <div>
            <AppHeader />
            <AHero />
        </div>
    </section>
</template>

<style>
@font-face {
    font-family: Outfit-Black;
    src: url("../../../../public/assets/Font/Outfit-Black.ttf");
}
#welcome {
    font-family: Outfit-Black;
}
.relative {
    background-color: #ebedef;
}
</style>
