<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";

export default {
    props: {
        posts: Array,
    },
    methods: {
        deletePost(id) {
            Swal.fire({
                title: "¿Estás seguro?",
                text: "Asegúrate que sea la Noticia correcta.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#e7bd5f",
                cancelButtonColor: "#d33",
                confirmButtonText: "¡Si, eliminar Noticia!",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.delete(route("posts.destroy", id), {
                        preserveScroll: true,
                    });
                    Swal.fire({
                        title: "¡Actualización de Noticias!",
                        text: "Se ha eliminado exitosamente.",
                        icon: "success",
                        confirmButtonColor: "#e7bd5f",
                    });
                }
            });
        },
    },
};
</script>
<template>
    <div
        class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 my-10"
    >
        <div
            v-for="post in posts"
            :key="post.id"
            class="max-w-xs md:max-w-none overflow-hidden"
        >
            <img
                class="h-56 lg:h-80 w-full object-cover rounded"
                :src="'/storage/images/' + post.image"
                alt=""
            />
            <div class="py-3 lg:px-2">
                <span class="lightFont text-sm text-primary">{{
                    post.created_at
                }}</span>
                <h3
                    class="lightFont font-semibold text-xl leading-6 text-gray-700 my-2"
                >
                    {{ post.title }}
                </h3>
                <p
                    class="regularFont paragraph-normal text-gray-600 xl:h-14 h-16"
                >
                    {{ post.description }}
                </p>
                <div class="flex mt-3">
                    <a
                        class="lightFont"
                        :href="'/storage/pdf/' + post.pdf"
                        target="_blank"
                    >
                        {{ $t("Leer más") }} >>
                    </a>
                </div>
                <div v-if="$page.props.user" class="flex items-center py-4">
                    <a :href="route('posts.edit', post.id)"
                        ><l-icon
                            icon="fa-regular fa-pen-to-square"
                            class="text-[#e7bd5f] text-2xl font-bold"
                    /></a>

                    <a @click="deletePost(post.id)" class="px-4"
                        ><l-icon
                            icon="fa-regular fa-trash-can"
                            class="text-red-400 text-2xl font-bold cursor-pointer"
                    /></a>
                </div>
            </div>
        </div>
    </div>
</template>
