<template>
    <div class="bg-white max-w-fill text-white font-bold">
        <nav id="header" class="w-full z-30 top-0 py-1">
            <div
                class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3"
            >
                <label
                    for="menu-toggle"
                    class="absolute top-11 right-8 cursor-pointer md:hidden block"
                >
                    <svg
                        class="fill-current text-gray-500"
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
                            class="md:flex items-center justify-between text-base text-gray-500 pt-8 md:pt-0"
                        >
                            <li>
                                <a
                                    class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                                    href="/#history"
                                    >¿Quiénes Somos?</a
                                >
                            </li>
                            <li>
                                <a
                                    class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                                    href="/#about"
                                    >¿Qué hacemos?</a
                                >
                            </li>
                            <li>
                                <a
                                    class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                                    href="/products"
                                    >Productos</a
                                >
                            </li>
                            <li>
                                <div class="inline-flex no-underline relative">
                                    <input
                                        type="checkbox"
                                        id="sortbox"
                                        class="hidden absolute"
                                    />
                                    <label
                                        for="sortbox"
                                        class="flex items-center space-x-1 cursor-pointer"
                                    >
                                        <span
                                            class="inline-block text-xl no-underline py-2 pl-4 hover:text-amber-300"
                                            >Sostenibilidad</span
                                        >
                                        <svg
                                            class="h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </label>

                                    <div
                                        id="sortboxmenu"
                                        class="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-white border transition delay-75 ease-in-out z-10"
                                    >
                                        <ul
                                            class="block text-left text-gray-500"
                                        >
                                            <li>
                                                <a
                                                    href="/sustainability"
                                                    class="block px-3 py-2 hover:text-amber-300"
                                                    >Nuestro Enfoque</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    href="/socialWork"
                                                    class="block px-3 py-2 hover:text-amber-300"
                                                    >Trabajo social</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    href="/environment"
                                                    class="block px-3 py-2 hover:text-amber-300"
                                                    >Medio Ambiente
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/laboratory"
                                                    class="block px-3 py-2 hover:text-amber-300"
                                                    >Laboratorio</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    href="/bio-security"
                                                    class="block px-3 py-2 hover:text-amber-300"
                                                    >Bio-seguridad</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a
                                    class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                                    href="/news"
                                    >Noticias</a
                                >
                            </li>
                            <li>
                                <a
                                    class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                                    href="/#contact"
                                    >Contáctanos</a
                                >
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
                            src="/assets/1-Principal/LogoATOSGray.png"
                            alt="image"
                            class="rounded mx-auto d-block"
                        />
                    </a>
                </div>

                <div
                    class="regularFont order-2 md:order-3 text-gray-500 flex items-center lg:block hidden"
                    id="nav-content"
                >
                    <a class="inline-block no-underline">
                        <a
                            class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                            href="/#history"
                            >¿Quiénes Somos?</a
                        >
                    </a>

                    <a class="inline-block no-underline">
                        <a
                            class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                            href="/#about"
                            >¿Qué hacemos?</a
                        >
                    </a>

                    <a class="inline-block no-underline">
                        <a
                            class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                            href="/products"
                            >Productos</a
                        >
                    </a>

                    <div class="inline-flex no-underline relative">
                        <input
                            type="checkbox"
                            id="sortboxlg"
                            class="hidden absolute"
                        />
                        <label
                            for="sortboxlg"
                            class="flex items-center space-x-1 cursor-pointer"
                        >
                            <span
                                class="inline-block text-xl no-underline py-2 pl-4 hover:text-amber-300"
                                >Sostenibilidad</span
                            >
                            <svg
                                class="h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </label>

                        <div
                            id="sortboxmenulg"
                            class="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-white border transition delay-75 ease-in-out z-10"
                        >
                            <ul class="block text-left text-gray-500">
                                <li>
                                    <a
                                        href="/sustainability"
                                        class="block px-3 py-2 hover:text-amber-300"
                                        >Nuestro Enfoque</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="/socialWork"
                                        class="block px-3 py-2 hover:text-amber-300"
                                        >Trabajo social</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="/environment"
                                        class="block px-3 py-2 hover:text-amber-300"
                                        >Medio Ambiente
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/laboratory"
                                        class="block px-3 py-2 hover:text-amber-300"
                                        >Laboratorio</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="/bio-security"
                                        class="block px-3 py-2 hover:text-amber-300"
                                        >Bio-seguridad</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>

                    <a class="inline-block no-underline">
                        <a
                            class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                            href="/news"
                            >Noticias
                        </a>
                    </a>

                    <a class="inline-block no-underline">
                        <a
                            class="inline-block text-xl no-underline py-2 px-4 hover:text-amber-300"
                            href="/#contact"
                            >Contáctanos
                        </a>
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
