<script setup>
import { ref } from "vue";

const isVideoPlaying = ref(false);

function playVideo() {
    isVideoPlaying.value = true;
}
</script>
<template>
    <div class="blackFont text-[#e7bd5f] uppercase text-center mt-20 mb-8">
        <h1 class="title-video font-bold lg:text-5xl text-4xl lg:px-0 px-2">
            {{ $t("Esto es lo que hacemos") }}
        </h1>
    </div>
    <div class="flex items-center justify-center mb-16">
        <div class="w-4/5 aspect-video -m-16 mt-8 relative">
            <div v-if="!isVideoPlaying">
                <img
                    @click="playVideo"
                    class="object-cover object-center cursor-pointer"
                    src="/assets/Gallery/IMG_1345.jpg"
                />
                <button
                    @click="playVideo"
                    class="bg-black opacity-transition bg-opacity-25 absolute inset-0 flex items-center justify-center hover:bg-opacity-50"
                >
                    <l-icon
                        icon="fa-solid fa-play"
                        class="text-[#e7bd5f] md:text-8xl text-4xl"
                    />
                </button>
            </div>
            <iframe
                v-else
                id="youtube-iframe"
                class="w-full h-full"
                src="https://www.youtube.com/embed/n4XloocUmX0?autoplay=1&rel=0"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>
