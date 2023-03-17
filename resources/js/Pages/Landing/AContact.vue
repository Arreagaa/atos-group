<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

const form = useForm({
    name: "",
    phone: "",
    email: "",
    body: "",
});

const showMessage = ref(false);

function setShowMessage(value) {
    showMessage.value = value;
}

function cleanForm() {
    form.reset();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
}

const submit = () => {
    form.post(route("contact"), {
        onSuccess: () => cleanForm(),
        preserveScroll: true,
    });
};
</script>
<template>
    <div class="regularFont contact max-w-app rounded px-8 pb-8 mb-16 flex flex-col mt-36">
        <div class="max-w-5xl mx-auto mb-20">
            <br />
            <div class="uppercase">
                <h1
                    class="container mx-auto w-full text-5xl font-bold text-center text-white"
                >
                    ¿Seguimos en contacto?
                </h1>
            </div>
        </div>
        <form @submit.prevent="submit" method="POST">
            <div class="-mx-3 md:flex mb-6">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                        v-if="form.errors.name"
                        v-model="form.name"
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 rounded-lg py-3 px-4 mb-3 focus-danger focus-form"
                        id="name"
                        type="text"
                        placeholder="Nombre y Apellido *"
                    />
                    <input
                        v-else
                        v-model="form.name"
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 focus-form"
                        id="name"
                        type="text"
                        placeholder="Nombre y Apellido *"
                    />
                </div>
                <div class="md:w-1/2 px-3">
                    <input
                        v-if="form.errors.phone"
                        v-model="form.phone"
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 rounded-lg py-3 px-4 mb-3 focus-danger focus-form"
                        id="phone"
                        type="phone"
                        placeholder="Teléfono *"
                    />
                    <input
                        v-else
                        v-model="form.phone"
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 focus-form"
                        id="phone"
                        type="phone"
                        placeholder="Teléfono *"
                    />
                </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
                <div class="md:w-full px-3">
                    <input
                        v-if="form.errors.email"
                        v-model="form.email"
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 rounded-lg py-3 px-4 mb-3 focus-danger focus-form"
                        id="email"
                        type="email"
                        placeholder="Correo Electrónico *"
                    />
                    <input
                        v-else
                        v-model="form.email"
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 focus-form"
                        id="email"
                        type="email"
                        placeholder="Correo Electrónico *"
                    />
                </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
                <div class="md:w-full px-3">
                    <textarea
                        v-if="form.errors.body"
                        v-model="form.body"
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 rounded-lg py-3 px-4 mb-3 focus-danger focus-form"
                        id="message"
                        type="text"
                        placeholder="Mensaje *"
                    />
                    <textarea
                        v-else
                        v-model="form.body"
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 focus-form"
                        id="message"
                        type="text"
                        placeholder="Mensaje *"
                    />
                </div>
            </div>
            <div class="inline-flex justify-end mb-6">
                <button
                    type="submit"
                    class="text-amber-300 bg-zinc-900 hover:bg-amber-300 hover:text-black font-bold rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center uppercase"
                >
                    Enviar
                </button>
            </div>
            <div class="inline-flex justify-end mb-6">
                <div v-if="showMessage" class="alert-success">
                    ¡El Mensaje fue enviado correctamente, pronto nos pondremos
                    en contacto!
                </div>
                <div
                    v-if="
                        (form.errors.name,
                        form.errors.phone,
                        form.errors.email || form.errors.body)
                    "
                    class="alert-danger"
                >
                    Debes completar la información del formulario para
                    continuar.
                </div>
            </div>
        </form>
    </div>
</template>
