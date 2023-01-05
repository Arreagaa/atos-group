<template>
    <div class="bg-transparent max-w-fill text-white font-bold">
        <nav id="header" class="w-full z-30 top-0 py-1">
            <div
                class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3"
            >
                <label
                    for="menu-toggle"
                    class="absolute top-6 right-4 cursor-pointer md:hidden block"
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
                    class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
                    id="menu"
                >
                    <nav class="lg:hidden">
                        <ul
                            class="md:flex items-center justify-between text-base text-white pt-8 md:pt-0"
                        >
                            <li>
                                <a
                                    class="inline-block text-lg no-underline py-2 px-4 hover:text-yellow-500"
                                    href="/#history"
                                    >¿Quiénes Somos?</a
                                >
                            </li>
                            <li>
                                <a
                                    class="inline-block text-lg no-underline py-2 px-4 hover:text-yellow-500"
                                    href="/#about"
                                    >¿Qué hacemos?</a
                                >
                            </li>
                            <li>
                                <a
                                    class="inline-block text-lg no-underline py-2 px-4 hover:text-yellow-500"
                                    href="/#products"
                                    >Productos</a
                                >
                            </li>
                            <li>
                                <a
                                    class="inline-block text-lg no-underline py-2 px-4 hover:text-yellow-500"
                                    href="/#media"
                                    >Media</a
                                >
                            </li>
                            <li>
                                <a
                                    class="inline-block text-lg no-underline py-2 px-4 hover:text-yellow-500"
                                    href="/#Contact"
                                    >Contáctanos</a
                                >
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <a
                        class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 mr-4"
                        href="/"
                    >
                        <img
                            src="/assets/Logos/LogoFooter.png"
                            alt="image"
                            class="rounded mx-auto d-block"
                        />
                    </a>
                </div>

                <div
                    class="order-2 md:order-3 flex items-center lg:block hidden"
                    id="nav-content"
                >
                    <a class="inline-block no-underline hover:text-zinc-900">
                        <a
                            class="inline-block text-lg no-underline py-2 px-4 hover:text-zinc-900"
                            href="/#history"
                            >¿Quiénes Somos?</a
                        >
                    </a>

                    <a class="inline-block no-underline hover:text-zinc-900">
                        <a
                            class="inline-block text-lg no-underline py-2 px-4 hover:text-zinc-900"
                            href="/#about"
                            >¿Qué hacemos?</a
                        >
                    </a>

                    <a class="inline-block no-underline hover:text-zinc-900">
                        <a
                            class="inline-block text-lg no-underline py-2 px-4 hover:text-zinc-900"
                            href="/#products"
                            >Productos</a
                        >
                    </a>

                    <a class="inline-block no-underline hover:text-zinc-900">
                        <a
                            class="inline-block text-lg no-underline py-2 px-4 hover:text-zinc-900"
                            href="/#media"
                            >Media
                        </a>
                    </a>

                    <a class="inline-block no-underline hover:text-zinc-900">
                        <a
                            class="inline-block text-lg no-underline py-2 px-4 hover:text-zinc-900"
                            href="/#Contact"
                            >Contáctanos
                        </a>
                    </a>
                </div>

                <div
                    class="order-2 md:order-3 flex items-center lg:hidden"
                    id="nav-content"
                ></div>
            </div>
        </nav>
    </div>
</template>

<style>
#menu,
#nav-content {
    font-family: Outfit-Regular;
}
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
</style>
