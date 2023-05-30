<script setup>
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import ATranslate from "./utils/ATranslate.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { ref, watch } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

watch(isMenuOpen, (newIsMenuOpen) => {
    const body = document.body;

    if (newIsMenuOpen) {
        body.classList.add("overflow-hidden");
        body.classList.remove("overflow-auto");
    } else {
        body.classList.add("overflow-auto");
        body.classList.remove("overflow-hidden");
    }
});
</script>
<template>
    <div class="bg-white max-w-fill font-bold">
        <nav id="header" class="w-full z-30 top-0 py-1">
            <div
                class="w-full xl:container mx-auto flex flex-wrap items-center justify-between mt-0 px-3 py-6"
            >
                <label
                    for="menu-toggle"
                    class="absolute top-9 right-6 cursor-pointer lg:hidden block"
                >
                    <l-icon
                        v-if="!isMenuOpen"
                        icon="fa-solid fa-bars"
                        class="text-gray-500 text-2xl"
                        @click="toggleMenu"
                    />
                    <l-icon
                        v-else
                        icon="fa-solid fa-xmark"
                        class="text-gray-500 text-2xl"
                        @click="toggleMenu"
                    />
                </label>
                <input class="hidden" type="checkbox" id="menu-toggle" />

                <div
                    class="regularFont font-semibold text-2xl hidden lg:flex lg:items-center lg:w-auto w-full order-3 lg:order-1"
                    id="menu"
                >
                    <nav class="lg:hidden h-screen">
                        <ul
                            class="lg:flex items-center justify-between text-gray-500 pt-8 lg:pt-0"
                        >
                            <li>
                                <Link
                                    class="inline-block py-3 px-4 hover:text-[#e7bd5f]"
                                    href="/#history"
                                    @click="toggleMenu"
                                    >{{ $t("¿Quiénes Somos?") }}</Link
                                >
                            </li>
                            <li>
                                <Link
                                    class="inline-block py-3 px-4 hover:text-[#e7bd5f]"
                                    href="/#about"
                                    @click="toggleMenu"
                                    >{{ $t("¿Qué hacemos?") }}</Link
                                >
                            </li>
                            <li>
                                <Link
                                    class="inline-block py-3 px-4 hover:text-[#e7bd5f]"
                                    :href="route('products')"
                                    @click="toggleMenu"
                                    >{{ $t("Productos") }}</Link
                                >
                            </li>
                            <li>
                                <div class="inline-block py-3">
                                    <Dropdown align="right" width="48">
                                        <template #trigger>
                                            <button
                                                class="inline-flex text-sm border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                                            ></button>

                                            <span
                                                class="inline-flex rounded-lg"
                                            >
                                                <button
                                                    type="button"
                                                    class="inline-flex items-center py-2 px-4 hover:text-[#e7bd5f] leading-4 transition"
                                                >
                                                    {{ $t("Sostenibilidad") }}

                                                    <svg
                                                        class="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </template>
                                        <template #content>
                                            <Link
                                                :href="route('sustainability')"
                                                @click="toggleMenu"
                                                class="block px-4 py-2 text-sm text-gray-400 hover:text-[#e7bd5f]"
                                            >
                                                {{ $t("Nuestro Enfoque") }}
                                            </Link>
                                            <DropdownLink
                                                :href="route('environment')"
                                                @click="toggleMenu"
                                            >
                                                {{
                                                    $t(
                                                        "Agricultura Regenerativa"
                                                    )
                                                }}
                                            </DropdownLink>
                                            <DropdownLink
                                                :href="route('socialWork')"
                                                @click="toggleMenu"
                                            >
                                                {{ $t("Trabajo social") }}
                                            </DropdownLink>
                                            <DropdownLink
                                                :href="route('laboratory')"
                                                @click="toggleMenu"
                                            >
                                                {{ $t("Laboratorio") }}
                                            </DropdownLink>
                                            <DropdownLink
                                                :href="route('bio-security')"
                                                @click="toggleMenu"
                                            >
                                                {{ $t("Bio-seguridad") }}
                                            </DropdownLink>
                                            <DropdownLink
                                                :href="route('certifications')"
                                                @click="toggleMenu"
                                            >
                                                {{ $t("Certificaciones") }}
                                            </DropdownLink>

                                            <div
                                                class="border-t border-gray-100"
                                            />
                                        </template>
                                    </Dropdown>
                                </div>
                            </li>
                            <li>
                                <div class="inline-block py-3">
                                    <Dropdown align="right" width="48">
                                        <template #trigger>
                                            <button
                                                class="inline-flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                                            ></button>

                                            <span
                                                class="inline-flex rounded-lg"
                                            >
                                                <button
                                                    type="button"
                                                    class="inline-flex items-center py-2 px-4 hover:text-[#e7bd5f] leading-4 transition"
                                                >
                                                    {{ $t("Noticias") }}

                                                    <svg
                                                        class="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </template>
                                        <template #content>
                                            <DropdownLink
                                                :href="route('posts.index')"
                                                @click="toggleMenu"
                                            >
                                                {{ $t("Nuestras Noticias") }}
                                            </DropdownLink>
                                            <DropdownLink
                                                v-if="$page.props.user"
                                                :href="route('dashboard')"
                                                @click="toggleMenu"
                                            >
                                                {{ $t("Cuenta") }}
                                            </DropdownLink>
                                            <DropdownLink
                                                v-else
                                                :href="route('login')"
                                                @click="toggleMenu"
                                            >
                                                {{ $t("Iniciar Sesión") }}
                                            </DropdownLink>

                                            <div
                                                class="border-t border-gray-100"
                                            />
                                        </template>
                                    </Dropdown>
                                </div>
                            </li>
                            <li>
                                <Link
                                    class="inline-block py-3 px-4 hover:text-[#e7bd5f]"
                                    href="/#contact"
                                    @click="toggleMenu"
                                >
                                    {{ $t("Contáctanos") }}</Link
                                >
                            </li>
                            <li>
                                <div class="inline-block py-3">
                                    <ATranslate />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <Link
                        class="flex items-center mx-4"
                        :href="route('landing')"
                    >
                        <img
                            src="/assets/1-Principal/LogoATOSGray.png"
                            alt="image"
                            class="rounded mx-auto d-block lg:w-80 w-72"
                        />
                    </Link>
                </div>

                <div
                    class="regularFont font-semibold min-[1372px]:text-xl text-lg order-2 lg:order-3 text-gray-500 flex items-center lg:block hidden"
                    id="nav-content"
                >
                    <a class="inline-block">
                        <Link
                            class="inline-block py-2 px-4 hover:text-[#e7bd5f]"
                            href="/#history"
                            >{{ $t("¿Quiénes Somos?") }}</Link
                        >
                    </a>

                    <a class="inline-block">
                        <Link
                            class="inline-block py-2 px-4 hover:text-[#e7bd5f]"
                            href="/#about"
                            >{{ $t("¿Qué hacemos?") }}</Link
                        >
                    </a>

                    <a class="inline-block">
                        <Link
                            class="inline-block py-2 px-4 hover:text-[#e7bd5f]"
                            :href="route('products')"
                            >{{ $t("Productos") }}</Link
                        >
                    </a>

                    <div class="inline-block">
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                <button
                                    class="inline-flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                                ></button>

                                <span class="inline-flex rounded-lg">
                                    <button
                                        type="button"
                                        class="inline-flex items-center py-2 px-4 hover:text-[#e7bd5f] leading-4 transition"
                                    >
                                        {{ $t("Sostenibilidad") }}

                                        <svg
                                            class="ml-2 -mr-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </template>
                            <template #content>
                                <Link
                                    :href="route('sustainability')"
                                    class="block px-4 py-2 text-sm text-gray-400 hover:text-[#e7bd5f]"
                                >
                                    {{ $t("Nuestro Enfoque") }}
                                </Link>
                                <DropdownLink :href="route('environment')">
                                    {{ $t("Agricultura Regenerativa") }}
                                </DropdownLink>
                                <DropdownLink :href="route('socialWork')">
                                    {{ $t("Trabajo social") }}
                                </DropdownLink>
                                <DropdownLink :href="route('laboratory')">
                                    {{ $t("Laboratorio") }}
                                </DropdownLink>
                                <DropdownLink :href="route('bio-security')">
                                    {{ $t("Bio-seguridad") }}
                                </DropdownLink>
                                <DropdownLink :href="route('certifications')">
                                    {{ $t("Certificaciones") }}
                                </DropdownLink>

                                <div class="border-t border-gray-100" />
                            </template>
                        </Dropdown>
                    </div>

                    <div class="inline-block">
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                <button
                                    class="inline-flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                                ></button>

                                <span class="inline-flex rounded-lg">
                                    <button
                                        type="button"
                                        class="inline-flex items-center py-2 px-4 hover:text-[#e7bd5f] leading-4 transition"
                                    >
                                        {{ $t("Noticias") }}

                                        <svg
                                            class="ml-2 -mr-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </template>
                            <template #content>
                                <DropdownLink :href="route('posts.index')">
                                    {{ $t("Nuestras Noticias") }}
                                </DropdownLink>
                                <DropdownLink
                                    v-if="$page.props.user"
                                    :href="route('dashboard')"
                                >
                                    {{ $t("Cuenta") }}
                                </DropdownLink>
                                <DropdownLink v-else :href="route('login')">
                                    {{ $t("Iniciar Sesión") }}
                                </DropdownLink>

                                <div class="border-t border-gray-100" />
                            </template>
                        </Dropdown>
                    </div>

                    <a class="inline-block">
                        <Link
                            class="inline-block py-2 px-4 hover:text-[#e7bd5f]"
                            href="/#contact"
                        >
                            {{ $t("Contáctanos") }}
                        </Link>
                    </a>

                    <a class="inline-block">
                        <ATranslate />
                    </a>
                </div>

                <div
                    class="regularFont order-2 lg:order-3 flex items-center lg:hidden"
                    id="nav-content"
                ></div>
            </div>
        </nav>
    </div>
</template>
