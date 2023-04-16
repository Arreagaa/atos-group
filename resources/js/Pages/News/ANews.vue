<script>
import ABtn from "@/Components/utils/ABtn.vue";

export default {
    props: {
        posts: Array,
    },
    components: {
        ABtn,
    },
};
</script>
<template>
    <div
        v-if="$page.props.user"
        class="flex flex-col items-center w-full md:flex-row md:w-1/2 pt-12"
    >
        <ABtn :href="route('posts.create')" text="Agregar Noticia" />
    </div>
    <div
        class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 my-10"
    >
        <div
            v-for="post in posts"
            :key="post.id"
            class="max-w-xs md:max-w-none overflow-hidden"
        >
            <img
                class="h-56 lg:h-70  w-full object-cover rounded"
                :src="'/images/' + post.image"
                alt=""
            />
            <div class="py-3">
                <span class="lightFont text-sm text-primary">{{
                    post.created_at
                }}</span>
                <h3
                    class="lightFont font-semibold text-xl leading-6 text-gray-700 my-2"
                >
                    {{ post.title }}
                </h3>
                <p class="regularFont paragraph-normal text-gray-600">
                    {{ post.description }}
                </p>
                <a class="lightFont mt-3 block" href="#" target="_blank"
                    >{{ $t("Leer más") }} >></a
                >
            </div>
        </div>
    </div>
</template>
