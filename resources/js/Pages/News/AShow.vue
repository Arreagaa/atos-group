<script>
import AppWhiteHeader from "@/Layouts/AppWhiteHeader.vue";
import AppFooter from "@/Layouts/AppFooter.vue";
import AValidate from "@/Components/utils/AValidate.vue";
import ABtn from "@/Components/utils/ABtn.vue";
import ANews from "./ANews.vue";
export default {
    props: {
        posts: Array,
    },
    components: {
        AppWhiteHeader,
        AppFooter,
        AValidate,
        ANews,
        ABtn
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
                    class="lightFont mt-4 text-[#e7bd5f] lg:text-3xl text-xl font-bold"
                >
                    {{ $t("Entérate de todas nuestras") }}
                </p>
                <h1
                    class="boldFont text-gray-500 lg:text-9xl text-7xl font-bold"
                >
                    {{ $t("Noticias") }}
                </h1>
            </div>
            <div v-if="posts.length > 0">
                <div
                    v-if="$page.props.user"
                    class="flex flex-col items-center w-full md:flex-row md:w-1/2 pt-12"
                >
                    <ABtn
                        :href="route('posts.create')"
                        text="Agregar Noticia"
                    />
                </div>
                <ANews :posts="posts" />
            </div>
            <div v-else class="lg:py-32 py-24">
                <AValidate />
            </div>
        </div>
    </section>
    <div>
        <AppFooter />
    </div>
</template>
