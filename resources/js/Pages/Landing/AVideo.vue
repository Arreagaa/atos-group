<script setup></script>
<template>
    <div class="blackFont text-amber-300 uppercase text-center mt-20 mb-8">
        <h1 class="title-video font-bold lg:text-5xl text-4xl lg:px-0 px-2">
            {{ $t("Esto es lo que hacemos") }}
        </h1>
    </div>
    <div class="flex items-center justify-center mb-16">
        <video
            class="w-4/5 aspect-video -m-16 mt-8"
            src="/assets/Gallery/GrupoAtos.mp4"
            poster="/assets/Gallery/IMG_1345.jpg"
            controls
            preload
            loop
            style="object-fit: cover; object-position: center"
        ></video>
        <br />
    </div>
</template>
