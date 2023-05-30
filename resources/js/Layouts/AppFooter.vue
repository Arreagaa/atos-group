<script setup>
import { Link } from "@inertiajs/inertia-vue3";
</script>
<template>
    <footer class="regularFont bg-zinc-900 pt-8 pb-6">
        <div class="max-w-app mx-auto px-4">
            <div class="flex flex-wrap text-left lg:text-left">
                <div class="w-full lg:w-6/12 px-4">
                    <img
                        src="/assets/Logos/LogoFooter.png"
                        alt="image"
                        class="rounded inline-flex w-80 md:pl-0 pl-2"
                    />
                    <div class="icons mt-6 lg:mb-0 mb-6 md:px-0 px-3">
                        <a
                            class="inline-flex tracking-wide no-underline hover:no-underline"
                            href="/"
                            target="_blank"
                        >
                            <img
                                src="/assets/SocialMedia/Icon-FB.png"
                                alt="image"
                                class="rounded mx-auto h-8 w-8"
                            />
                        </a>
                        <a
                            class="inline-flex tracking-wide no-underline hover:no-underline"
                            href="https://www.instagram.com/grupoatosgt/?igshid=MzRlODBiNWFlZA%3D%3D"
                            target="_blank"
                        >
                            <img
                                src="/assets/SocialMedia/Icon-IG.png"
                                alt="image"
                                class="rounded mx-auto ml-2 h-8 w-8"
                            />
                        </a>
                        <a
                            class="inline-flex tracking-wide no-underline hover:no-underline"
                            href="https://www.youtube.com/@GrupoAtos-oy6ct"
                            target="_blank"
                        >
                            <img
                                src="/assets/SocialMedia/Icon-YTB.png"
                                alt="image"
                                class="rounded mx-auto ml-4 h-8 w-8"
                            />
                        </a>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="flex flex-wrap items-top mb-6">
                        <div
                            class="lightFont text-white text-base font-semibold w-full lg:w-4/12 mb-2 md:px-0 px-4 ml-auto"
                        >
                            <span class="block uppercase mb-2">{{
                                $t("Enlaces Web")
                            }}</span>
                            <ul class="list-unstyled">
                                <li>
                                    <Link
                                        class="hover:text-[#e7bd5f] block pb-2"
                                        href="/#history"
                                        >{{ $t("Historia") }}</Link
                                    >
                                </li>
                                <li>
                                    <Link
                                        class="hover:text-[#e7bd5f] block pb-2"
                                        href="/#about"
                                        >{{ $t("Nosotros") }}</Link
                                    >
                                </li>
                                <li>
                                    <Link
                                        class="hover:text-[#e7bd5f] block pb-2"
                                        href="/#products"
                                        >{{ $t("Productos") }}</Link
                                    >
                                </li>
                                <li>
                                    <Link
                                        class="hover:text-[#e7bd5f] block pb-2"
                                        href="/#media"
                                        >Media</Link
                                    >
                                </li>
                            </ul>
                        </div>
                        <div
                            class="w-full text-white font-semibold lg:w-4/12 md:px-0 px-4"
                        >
                            <span class="uppercase block mb-2">{{
                                $t("Recursos")
                            }}</span>
                            <ul class="list-unstyled">
                                <li>
                                    <Link
                                        class="hover:text-[#e7bd5f] block pb-2"
                                        href="https://policies.google.com/privacy?hl=es"
                                        target="_blank"
                                        >{{
                                            $t("Política de Privacidad")
                                        }}</Link
                                    >
                                </li>
                                <li>
                                    <Link
                                        class="hover:text-[#e7bd5f] block pb-2"
                                        href="/"
                                        >{{ $t("Acceso al Sitio Web") }}</Link
                                    >
                                </li>
                                <li>
                                    <Link
                                        class="hover:text-[#e7bd5f] block pb-2"
                                        href="/"
                                        target="_blank"
                                        >{{ $t("Mapa") }}</Link
                                    >
                                </li>
                                <li>
                                    <Link
                                        class="hover:text-[#e7bd5f] block pb-2"
                                        href="https://policies.google.com/privacy?hl=es"
                                        target="_blank"
                                        >{{
                                            $t("Términos y Condiciones")
                                        }}</Link
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-blueGray-300" />
            <div
                class="flex flex-wrap items-center md:justify-between justify-center"
            >
                <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div class="text-base text-white font-semibold py-1">
                        Copyright © <span id="get-current-year">2023,</span>
                        <a href="/" class="text-white hover:text-yellow-400">
                            Grupo Atos</a
                        >.
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
