<script setup>
import AppWhiteHeader from "../../Layouts/AppWhiteHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
</script>
<template>
    <AppWhiteHeader />
    <div
        class="lg:block hidden py-72 bg-[url('/assets/img/socialWork.jpeg')] bg-cover"
    >
        <div class="container items-center m-auto px-6 text-white">
            <p class="boldFont text-8xl font-bold text-center">
                Trabajo Social
            </p>
            <p class="lightFont text-xl font-base text-center mt-12">
                Estamos orientados a lograr calidad de vida laboral, compromiso
                y la <br />
                retención de talento, aspectos que impactan de forma positiva en
                la <br />
                productividad de la empresa.
            </p>
        </div>
    </div>

    <div
        class="lg:hidden py-48 bg-[url('/assets/img/socialWork.jpeg')] bg-cover bg-center"
    >
        <div class="container items-center m-auto px-6 text-white">
            <p class="boldFont text-5xl font-bold text-center">
                Trabajo Social
            </p>
            <p class="lightFont text-xl lightFont font-base text-center mt-12">
                Estamos orientados a lograr calidad de vida laboral, compromiso
                y la <br />
                retención de talento, aspectos que impactan de forma positiva en
                la <br />
                productividad de la empresa.
            </p>
        </div>
    </div>

    <div class="max-w-app my-12 items-left text-left">
        <h1 class="boldFont font-bold lg:text-4xl text-2xl text-amber-300">
            MAS DE 50 PROYECTOS CON <br />
            NUESTRAS COMUNIDADES:
        </h1>

        <div class="">
            <div class="container m-auto text-gray-800">
                <div
                    class="grid overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-2 xl:grid-cols-2 gap-x-20"
                >
                    <div class="relative group">
                        <div class="inline-flex items-center">
                            <img
                                src="/assets/TrabajoSocial/elementos-11.png"
                                class="scale-75"
                                alt=""
                            />

                            <div class="space-y-2">
                                <h5 class="lightFont text-xl text-gray-800">
                                    Alimentación.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="relative group">
                        <div class="inline-flex items-center">
                            <img
                                src="/assets/TrabajoSocial/elementos-15.png"
                                class="scale-75"
                                alt=""
                            />

                            <div class="space-y-2">
                                <h5 class="lightFont text-xl text-gray-800">
                                    Concientización, muestreos y seguimiento de
                                    VIH en la región.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="relative group">
                        <div class="inline-flex items-center">
                            <img
                                src="/assets/TrabajoSocial/elementos-12.png"
                                class="scale-75"
                                alt=""
                            />

                            <div class="space-y-2">
                                <h5 class="lightFont text-xl text-gray-800">
                                    Programa de maestros, educación para niños
                                    de comunidades aledañas.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="relative group">
                        <div class="inline-flex items-center">
                            <img
                                src="/assets/TrabajoSocial/elementos-16.png"
                                class="scale-75"
                                alt=""
                            />

                            <div class="space-y-2">
                                <h5 class="lightFont text-xl text-gray-800">
                                    Campeonatos internos futbol.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="relative group">
                        <div class="inline-flex items-center">
                            <img
                                src="/assets/TrabajoSocial/elementos-13.png"
                                class="scale-75"
                                alt=""
                            />

                            <div class="space-y-2">
                                <h5 class="lightFont text-xl text-gray-800">
                                    Cooperativa creada conjunto con
                                    colaboradores de la empresa.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="relative group">
                        <div class="inline-flex items-center">
                            <img
                                src="/assets/TrabajoSocial/elementos-17.png"
                                class="scale-75"
                                alt=""
                            />

                            <div class="space-y-2">
                                <h5 class="lightFont text-xl text-gray-800">
                                    Trabajos de salud con colaboradores y niños.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="grid overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-1 xl:grid-cols-1 gap-x-20"
                >
                    <div class="relative group">
                        <div class="inline-flex items-center">
                            <img
                                src="/assets/TrabajoSocial/elementos-11.png"
                                class="scale-75"
                                alt=""
                            />

                            <div class="space-y-2">
                                <h5
                                    class="lg:block hidden lightFont text-xl text-gray-800"
                                >
                                    <span class="font-bold">
                                        Reserva en Monterrico, costas del
                                        Pacifico de Guatemala:
                                    </span>
                                    Trabajo de limpieza de playas y
                                    mantenimiento de biodiversidad de especies
                                    locales. Reproducción y liberación de la
                                    tortuga Parlama (Lepidochelys olivacea) o la
                                    conservación del Mangle en la costa del
                                    Pacifico.
                                </h5>
                                <h5
                                    class="lg:hidden lightFont text-xl text-gray-800"
                                >
                                    Reserva en Monterrico, costas del Pacifico
                                    de Guatemala.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <AppFooter />
    </div>
</template>
