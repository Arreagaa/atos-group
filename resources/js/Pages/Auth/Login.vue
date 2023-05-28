<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";
import Checkbox from "@/Components/Checkbox.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : "",
    })).post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <div class="bg-white">
        <div class="flex justify-center h-screen">
            <div
                class="bg-[url('/assets/Gallery/DSCN4914.jpeg')] bg-cover hidden lg:block lg:w-2/3"
            >
                <div
                    class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40 font-sans lg:px-56"
                >
                    <div>
                        <h2
                            class="boldFont text-6xl font-bold text-white uppercase"
                        >
                            {{ $t("Excelencia agrícola desde 1933") }}
                        </h2>

                        <p
                            class="text-2xl regularFont Fontmax-w-xl mt-3 font-sans text-white"
                        >
                            {{
                                $t(
                                    "Advertencia, este apartado es solo para personal Autorizado."
                                )
                            }}
                        </p>
                    </div>
                </div>
            </div>

            <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                {{ status }}
            </div>

            <div
                class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6"
            >
                <div class="flex-1">
                    <div class="text-center">
                        <a :href="route('landing')">
                            <img
                                src="/assets/1-Principal/LogoATOSGray.png"
                                class="scale-110"
                            />
                        </a>

                        <p class="mt-3 text-gray-500">
                            {{ $t("Inicia sesión para poder continuar") }}
                        </p>
                    </div>

                    <div class="mt-8">
                        <form @submit.prevent="submit">
                            <div>
                                <InputLabel
                                    for="email"
                                    :value="$t('Correo electrónico')"
                                />
                                <TextInput
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    class="mt-1 block w-full"
                                    required
                                    autofocus
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.email"
                                />
                            </div>

                            <div class="mt-6">
                                <div class="flex justify-between mb-2">
                                    <InputLabel
                                        for="password"
                                        :value="$t('Contraseña')"
                                    />
                                    <Link
                                        v-if="canResetPassword"
                                        :href="route('password.request')"
                                        class="underline text-sm text-gray-600 hover:text-gray-900"
                                    >
                                        {{ $t("¿Olvidaste tu contraseña?") }}
                                    </Link>
                                </div>

                                <TextInput
                                    id="password"
                                    v-model="form.password"
                                    type="password"
                                    class="mt-1 block w-full"
                                    required
                                    autocomplete="current-password"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.password"
                                />
                            </div>

                            <div class="block mt-4">
                                <label class="flex items-center">
                                    <Checkbox
                                        v-model:checked="form.remember"
                                        name="remember"
                                    />
                                    <span class="ml-2 text-sm text-gray-600">{{
                                        $t("Guardar Usuario")
                                    }}</span>
                                </label>
                            </div>

                            <div class="mt-6">
                                <button
                                    :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing"
                                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-zinc-900 rounded-md hover:bg-yellow-400 focus:outline-none"
                                >
                                    {{ $t("Iniciar Sesión") }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
