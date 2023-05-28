<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import AVImage from "../../../Components/utils/AVImage.vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.min.css";
export default {
    components: {
        AppLayout,
        AVImage,
    },
    data() {
        return {
            form: {
                title: null,
                description: null,
                image: null,
                pdf: null,
            },
            previewImageUrl: null,
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
                confirmButtonText: "¡Si, crear Noticia!",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$inertia.post(route("posts.store"), this.form, {
                        forceFormData: true,
                        preserveScroll: true,
                    });
                    Swal.fire({
                        title: "¡Actualización de Noticias!",
                        text: "Se ha agregado exitosamente.",
                        icon: "success",
                        confirmButtonColor: "#FFCC00",
                    });
                }
            });
        },
        previewImage(e) {
            this.form.image = e.target.files[0];
            const reader = new FileReader();

            reader.onload = (event) => {
                this.previewImageUrl = event.target.result;
            };

            reader.readAsDataURL(this.form.image);
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
                        v-if="previewImageUrl"
                        :src="previewImageUrl"
                        class="object-cover w-full max-w-2xl rounded-md"
                        alt=""
                    />
                    <div
                        v-else
                        class="object-cover w-full h-full max-w-2xl rounded-md opacity-60"
                    >
                        <AVImage />
                    </div>
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
                                >Título de la Noticia</label
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
                                >Descripción
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
                        <div class="mb-4">
                            <label
                                class="regularFont block text-gray-700 text-base font-bold mb-2"
                                for="pdf"
                                >Documento de la Noticia</label
                            >
                            <input
                                @change="(e) => (form.pdf = e.target.files[0])"
                                class="lightFont w-full px-3 py-2 border border-gray-300 rounded-md focus-form"
                                type="file"
                                id="pdf"
                                name="pdf"
                                accept="application/pdf"
                                required
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                class="regularFont block text-gray-700 text-base font-bold mb-2"
                                for="image"
                                >Imagen de la Noticia</label
                            >
                            <input
                                @change="previewImage"
                                class="lightFont w-full px-3 py-2 border border-gray-300 rounded-md focus-form"
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                required
                            />
                        </div>

                        <div class="pt-2">
                            <button
                                type="submit"
                                class="px-6 py-2 text-white bg-gray-600 hover:bg-[#e7bd5f] rounded-md focus:outline-none"
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
