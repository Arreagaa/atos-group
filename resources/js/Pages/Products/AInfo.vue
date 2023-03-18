<script setup>
import AProducts from "./AProducts.vue";

const products = [
    {
        name: "BANANO",
        image: "/assets/Productos/Bananogranenano.png",
        description: "Gran enano",
    },
    {
        name: "EPIPREMNUM POTHOS",
        image: "/assets/Productos/epipremnum.png",
        description: "TJade, Golden, Marbled, Golden, Silver Lady.",
    },
    {
        name: "PURÉ Y CONCENTRADOS",
        image: "/assets/Productos/pureyconcentrados.png",
        description: "de banano, maracuyá y pitaya.",
    },
    {
        name: "HARINA",
        image: "/assets/Productos/harina.png",
        description: "de banano",
    },
    {
        name: "BACTERIAS",
        image: "/assets/Productos/bacterias.png",
        description:
            "Chromobacteria, Bacillus thuringiensis (Bt), Bacillus subtilis, Pseudomonas fluorescens, Azospirillum brasilense.",
    },
    {
        name: "HONGOS",
        image: "/assets/Productos/hongos.png",
        description:
            "Trichoderma harzianum, Pochonia chlamydosporia, Paecilomyces lilacinus, Metarhizium anisopliae, Beauveria bassiana, Isaria fumosorosea.",
    },
];
</script>

<template>
    <div class="flex flex-wrap flex-row -mx-4 text-center">
        <AProducts
            v-for="(item, index) in products"
            :key="index"
            :id-item="index"
            :item="item"
        />
    </div>
</template>
