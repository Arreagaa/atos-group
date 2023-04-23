<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import AVImage from "@/Components/utils/AVImage.vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";
export default {
    components: {
        AppLayout,
        AVImage,
    },
    props: {
        post: Object,
    },
    data() {
        return {
            form: {
                title: this.post.title,
                description: this.post.description,
            },
        };
    },
    methods: {
        submit() {
            Swal.fire({
                title: "¿Estás seguro?",
                text: "Asegúrate que la Noticia este correcta.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#FFCC00",
                cancelButtonColor: "#d33",
                confirmButtonText: "¡Si, actualizar Noticia!",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.put(
                        route("posts.update", this.post.id),
                        this.form,
                        {
                            preserveScroll: true,
                        }
                    );
                    Swal.fire({
                        title: "¡Actualización de Noticias!",
                        text: "Se ha actualizado exitosamente.",
                        icon: "success",
                        confirmButtonColor: "#FFCC00",
                    });
                }
            });
        },
    },
};
</script>
<template>
    <AppLayout title="Dashboard">
        <div class="lg:py-24 py-8">
            <div
                class="container flex flex-col px-6 py-4 mx-auto lg:space-y-2 space-y-8 md:h-128 md:py-16 md:flex-row md:items-center"
            >
                <div class="flex items-center justify-center w-full md:w-1/2">
                    <img
                        :src="'/storage/images/' + post.image"
                        class="object-cover w-full max-w-2xl rounded-md"
                        alt=""
                    />
                </div>
                <div
                    class="flex flex-col items-center w-full md:flex-row md:w-1/2"
                >
                    <form
                        @submit.prevent="submit"
                        enctype="multipart/form-data"
                        class="w-full mx-auto lg:px-16"
                    >
                        <div class="mb-4">
                            <label
                                class="regularFont block text-gray-700 text-base font-bold mb-2"
                                for="title"
                                >Nuevo Título de la Noticia</label
                            >
                            <input
                                v-model="form.title"
                                class="lightFont w-full px-3 py-2 border border-gray-300 rounded-md focus-form"
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Título de la Noticia"
                                required
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                class="regularFont block text-gray-700 text-base font-bold mb-2"
                                for="description"
                                >Nueva Descripción
                            </label>
                            <textarea
                                v-model="form.description"
                                class="lightFont w-full px-3 py-2 border border-gray-300 rounded-md focus-form"
                                type="description"
                                id="description"
                                name="description"
                                placeholder="Breve Descripción"
                                required
                            />
                        </div>

                        <div class="pt-2">
                            <button
                                type="submit"
                                class="px-6 py-2 text-white bg-gray-600 hover:bg-amber-300 rounded-md focus:outline-none"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
