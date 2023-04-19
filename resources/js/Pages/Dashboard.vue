<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import AValidate from "../Components/utils/AValidate.vue";
import ANews from "./News/ANews.vue";
export default {
    components: {
        AppLayout,
        AValidate,
        ANews,
    },
    props: {
        posts: Array,
    },
};
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-600 leading-tight">
                Noticias
            </h2>
        </template>

        <div class="lg:py-12 py-8">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <ANews :posts="posts" />
            </div>
        </div>
        <div v-if="!posts.length > 0">
            <AValidate />
        </div>
    </AppLayout>
</template>
