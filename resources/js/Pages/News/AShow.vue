<script>
import AppWhiteHeader from "../../Layouts/AppWhiteHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
import ANews from "./ANews.vue";
export default {
    props: {
        posts: Array,
    },
    components: {
        AppWhiteHeader,
        AppFooter,
        ANews,
    },
};
</script>
<template>
    <div>
        <AppWhiteHeader />
    </div>
    <section class="bg-white">
        <div class="container px-6 lg:py-16 py-8 mx-auto">
            <div class="text-center">
                <p
                    class="lightFont mt-4 text-amber-300 lg:text-3xl text-xl font-bold"
                >
                    {{ $t("Entérate de todas nuestras") }}
                </p>
                <h1
                    class="boldFont text-gray-500 lg:text-9xl text-7xl font-bold"
                >
                    {{ $t("Noticias") }}
                </h1>
            </div>
            <div>
                <ANews :posts="posts" />
            </div>
        </div>
    </section>
    <div>
        <AppFooter />
    </div>
</template>
