<script setup>
import AppWhiteHeader from "../../Layouts/AppWhiteHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
</script>
<template>
    <AppWhiteHeader />
    <div
        class="lg:py-72 py-48 bg-[url('/assets/img/socialWork.jpeg')] bg-cover bg-center"
    >
        <div class="container items-center m-auto px-6 text-white">
            <p
                class="boldFont lg:text-8xl text-5xl font-bold text-center capitalize"
            >
                {{ $t("Trabajo social") }}
            </p>
            <p
                class="lightFont lg:text-2xl text-xl xl:mx-96 font-base text-center mt-12"
            >
                {{
                    $t(
                        "Estamos orientados a lograr calidad de vida laboral, compromiso y la retención de talento, aspectos que impactan de forma positiva en la productividad de la empresa."
                    )
                }}
            </p>
        </div>
    </div>

    <div class="max-w-app my-12 items-left text-left">
        <h1 class="boldFont font-bold lg:text-4xl text-2xl text-amber-300">
            {{ $t("MAS DE 50 PROYECTOS CON") }} <br />
            {{ $t("NUESTRAS COMUNIDADES:") }}
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
                                    {{ $t("Alimentación.") }}
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
                                    {{
                                        $t(
                                            "Concientización, muestreos y seguimiento de VIH en la región."
                                        )
                                    }}
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
                                    {{
                                        $t(
                                            "Programa de maestros, educación para niños de comunidades aledañas."
                                        )
                                    }}
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
                                    {{ $t("Campeonatos internos futbol.") }}
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
                                    {{
                                        $t(
                                            "Cooperativa creada conjunto con colaboradores de la empresa."
                                        )
                                    }}
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
                                    {{
                                        $t(
                                            "Trabajos de salud con colaboradores y niños."
                                        )
                                    }}
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
                                        {{
                                            $t(
                                                "Reserva en Monterrico, costas del Pacifico de Guatemala"
                                            )
                                        }}:
                                    </span>
                                    {{
                                        $t(
                                            "Trabajo de limpieza de playas y mantenimiento de biodiversidad de especies locales. Reproducción y liberación de la tortuga Parlama (Lepidochelys olivacea) o la conservación del Mangle en la costa del Pacifico."
                                        )
                                    }}
                                </h5>
                                <h5
                                    class="lg:hidden lightFont text-xl text-gray-800"
                                >
                                    {{
                                        $t(
                                            "Reserva en Monterrico, costas del Pacifico de Guatemala"
                                        )
                                    }}.
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
