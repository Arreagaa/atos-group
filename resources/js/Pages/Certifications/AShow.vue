<script setup>
import AppWhiteHeader from "../../Layouts/AppWhiteHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
</script>
<template>
    <div>
        <AppWhiteHeader />
    </div>
    <div class="px-3 md:lg:xl:px-32 lg:py-32 py-12 bg-opacity-10 bg-gray-500">
        <h2
            class="lg:pt-0 pt-8 mb-8 lg:mb-8 lg:text-4xl text-2xl boldFont tracking-tight leading-tight text-center text-gray-900 uppercase"
        >
            {{ $t("trabajamos de la mano") }}
        </h2>
        <div class="grid grid-cols-1 md:lg:xl:grid-cols-4 group">
            <div
                class="p-8 flex flex-col items-center text-center group ease-in-out hover:-translate-y-2"
            >
                <a class="flex justify-center items-center">
                    <img
                        src="/assets/alianzas/RFA.png"
                        class="lg:w-32 w-28 lg:pb-0 pb-2"
                        alt=""
                    />
                </a>
            </div>

            <div
                class="p-10 flex flex-col items-center text-center group ease-in-out hover:-translate-y-2"
            >
                <a class="flex justify-center items-center">
                    <img
                        src="/assets/alianzas/globalgap.png"
                        class="lg:w-52 w-48 lg:pb-0 py-10"
                        alt=""
                    />
                </a>
            </div>

            <div
                class="p-10 flex flex-col items-center text-center group ease-in-out hover:-translate-y-2"
            >
                <a class="flex justify-center items-center">
                    <img
                        src="/assets/alianzas/apib.png"
                        class="lg:w-32 w-28 lg:pb-0 pb-2"
                        alt=""
                    />
                </a>
            </div>

            <div
                class="p-10 flex flex-col items-center text-center group ease-in-out hover:-translate-y-2"
            >
                <a class="flex justify-center items-center">
                    <img
                        src="/assets/alianzas/fda.png"
                        class="lg:w-40 w-32 lg:pb-0 pt-8"
                        alt=""
                    />
                </a>
            </div>
        </div>
    </div>
    <div class="pt-24 bg-opacity-10 bg-gray-500">
        <AppFooter />
    </div>
</template>
