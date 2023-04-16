<script setup>
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import ATranslate from "./utils/ATranslate.vue";
</script>
<template>
    <div class="bg-transparent max-w-fill text-white font-bold">
        <nav id="header" class="w-full z-30 top-0 py-1">
            <div
                class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-3 py-3"
            >
                <label
                    for="menu-toggle"
                    class="absolute top-6 right-6 cursor-pointer md:hidden block"
                >
                    <svg
                        class="fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                        ></path>
                    </svg>
                </label>
                <input class="hidden" type="checkbox" id="menu-toggle" />

                <div
                    class="regularFont hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
                    id="menu"
                >
                    <nav class="lg:hidden">
                        <ul
                            class="md:flex items-center justify-between text-base text-white pt-8 md:pt-0"
                        >
                            <li>
                                <a
                                    class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                                    href="/#history"
                                    >{{ $t("¿Quiénes Somos?") }}</a
                                >
                            </li>
                            <li>
                                <a
                                    class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                                    href="/#about"
                                    >{{ $t("¿Qué hacemos?") }}</a
                                >
                            </li>
                            <li>
                                <a
                                    class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                                    href="/products"
                                    >{{ $t("Productos") }}</a
                                >
                            </li>
                            <li>
                                <div class="inline-block py-2 no-underline">
                                    <Dropdown align="right" width="48">
                                        <template #trigger>
                                            <button
                                                class="inline-flex text-sm border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                                            ></button>

                                            <span
                                                class="inline-flex rounded-md"
                                            >
                                                <button
                                                    type="button"
                                                    class="inline-flex items-center text-xl no-underline py-2 px-4 hover:text-amber-300 leading-4 transition"
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
                                            <a
                                                href="/sustainability"
                                                class="block px-4 py-2 text-sm text-gray-400 no-underline hover:text-amber-300"
                                            >
                                                {{ $t("Nuestro Enfoque") }}
                                            </a>
                                            <DropdownLink
                                                :href="route('environment')"
                                            >
                                                {{
                                                    $t(
                                                        "Agricultura Regenerativa"
                                                    )
                                                }}
                                            </DropdownLink>
                                            <DropdownLink
                                                :href="route('socialWork')"
                                            >
                                                {{ $t("Trabajo social") }}
                                            </DropdownLink>
                                            <DropdownLink
                                                :href="route('laboratory')"
                                            >
                                                {{ $t("Laboratorio") }}
                                            </DropdownLink>
                                            <DropdownLink
                                                :href="route('bio-security')"
                                            >
                                                {{ $t("Bio-seguridad") }}
                                            </DropdownLink>
                                            <DropdownLink
                                                :href="route('certifications')"
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
                                <div class="inline-block py-2 no-underline">
                                    <Dropdown align="right" width="48">
                                        <template #trigger>
                                            <button
                                                class="inline-flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                                            ></button>

                                            <span
                                                class="inline-flex rounded-md"
                                            >
                                                <button
                                                    type="button"
                                                    class="inline-flex items-center text-xl no-underline py-2 px-4 hover:text-amber-300 leading-4 transition"
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
                                            <DropdownLink
                                                v-else
                                                :href="route('login')"
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
                                <a
                                    class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                                    href="/#contact"
                                >
                                    {{ $t("Contáctanos") }}</a
                                >
                            </li>
                            <li>
                                <div class="inline-block py-2 no-underline">
                                    <ATranslate />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <a
                        class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 mr-8"
                        href="/"
                    >
                        <img
                            src="/assets/Logos/LogoFooter.png"
                            alt="image"
                            class="rounded mx-auto d-block scale-90"
                        />
                    </a>
                </div>

                <div
                    class="regularFont order-2 md:order-3 flex items-center lg:block hidden"
                    id="nav-content"
                >
                    <a class="inline-block no-underline">
                        <a
                            class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                            href="/#history"
                            >{{ $t("¿Quiénes Somos?") }}</a
                        >
                    </a>

                    <a class="inline-block no-underline">
                        <a
                            class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                            href="/#about"
                            >{{ $t("¿Qué hacemos?") }}</a
                        >
                    </a>

                    <a class="inline-block no-underline">
                        <a
                            class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                            href="/products"
                            >{{ $t("Productos") }}</a
                        >
                    </a>

                    <div class="inline-block no-underline">
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                <button
                                    class="inline-flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                                ></button>

                                <span class="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        class="inline-flex items-center text-xl no-underline py-2 px-4 hover:text-amber-300 leading-4 transition"
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
                                <a
                                    href="/sustainability"
                                    class="block px-4 py-2 text-sm text-gray-400 no-underline hover:text-amber-300"
                                >
                                    {{ $t("Nuestro Enfoque") }}
                                </a>
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

                    <div class="inline-block no-underline">
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                <button
                                    class="inline-flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                                ></button>

                                <span class="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        class="inline-flex items-center text-xl no-underline py-2 px-4 hover:text-amber-300 leading-4 transition"
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

                    <a class="inline-block no-underline">
                        <a
                            class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                            href="/#contact"
                        >
                            {{ $t("Contáctanos") }}
                        </a>
                    </a>

                    <a class="inline-block no-underline">
                        <ATranslate />
                    </a>
                </div>

                <div
                    class="regularFont order-2 md:order-3 flex items-center lg:hidden"
                    id="nav-content"
                ></div>
            </div>
        </nav>
    </div>
</template>

<style>
#menu-toggle:checked + #menu {
    display: block;
}

.hover\:grow {
    transition: all 0.3s;
    transform: scale(1);
}
.hover\:grow:hover {
    transform: scale(1.02);
}
#sortbox:checked ~ #sortboxmenu {
    opacity: 1;
}
#sortboxlg:checked ~ #sortboxmenulg {
    opacity: 1;
}
</style>
