<script setup>
import AppWhiteHeader from "../../Layouts/AppWhiteHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
</script>
<template>
    <AppWhiteHeader />
    <div
        class="lg:py-72 py-48 lg:bg-[url('/assets/img/laboratory.jpeg')] bg-[url('/assets/img/laboratoryrs.jpeg')] bg-cover bg-center"
    >
        <div class="container items-center m-auto md:px-6 px-4 text-white">
            <p
                class="res-title boldFont lg:text-8xl text-5xl boldFont font-bold text-center"
            >
                {{ $t("Laboratorio") }}
            </p>
            <p
                class="lightFont lg:text-2xl text-xl font-base text-center lg:mt-4 mt-6"
            >
                {{ $t("Control de plagas y enfermedades.") }}
            </p>
        </div>
    </div>
    <section class="py-20 bg-white">
        <div class="flex flex-col px-8 mx-auto space-y-8 max-w-7xl xl:px-12">
            <div class="lightFont relative items-left">
                <p class="w-full mx-auto text-xl text-blueGray-600">
                    {{
                        $t(
                            "El laboratorio lo hicimos para controlar plagas y enfermedades que tenemos en las plantaciones para reducir el uso de cargas químicas que se aplicaban anterior mente y en la mayoría del sector."
                        )
                    }}
                    <br />
                    <br />
                    <span class="boldFont font-bold">
                        {{
                            $t(
                                "Con esto hemos eliminado o reducido las aplicaciones químicas para el control de: Nematodos, Cochinilla algodonosa, Tortuguilla, Aphidos, Picudo, Gallina ciega, Hormigas, etc."
                            )
                        }}
                        <br />
                    </span>
                    <br />
                    <span>{{
                        $t(
                            "Beneficios secundarios que se obtienen de las liberaciones como: Aumento de las poblaciones de enemigos naturales, mejora la disponibilidad de nutrientes en el suelo, disminuye la necesidad de regar, mejora el sistema radicular de la planta, acelera la descomposicion de la materia orgánica, etc."
                        )
                    }}</span>
                </p>
            </div>
            <div class="flex flex-col animated fadeIn sm:flex-row">
                <div class="flex items-center sm:w-1/2 md:w-5/12 sm:order-last">
                    <img src="/assets/laboratory/hongos.png" alt="" />
                </div>
                <div
                    class="flex flex-col justify-center mt-2 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16"
                >
                    <p
                        class="boldFont mb-2 text-3xl leading-none text-left text-blueGray-600 uppercase"
                    >
                        {{ $t("HONGOS") }}
                    </p>
                    <p
                        class="lightFont mt-5 text-xl text-blueGray-600 text md:text-justify"
                    >
                        {{
                            $t(
                                "Trichoderma harzianum es un hongo saprofito, ampliamente utilizado como agente de control biológico contra diversos patógenos. Se utiliza en aplicaciones foliares, tratamiento de semillas y suelo para el control de diversas enfermedades."
                            )
                        }}
                    </p>
                    <br />
                    <p
                        class="lightFont mt-5 text-xl text-blueGray-600 text md:text-justify"
                    >
                        <span class="boldFont font-bold"
                            >Pochonia chlamydosporia:</span
                        >
                        {{
                            $t(
                                "es un parásito facultativo de huevos de nematodos endoparásitos sedentarios, como: formadores de quistes (Heterodera, Globodera), agalladores (Meloidogyne), Rotylenchulus reniformis y el falso agallador Nacobbus aberrans."
                            )
                        }}
                    </p>
                </div>
            </div>
            <div class="lightFont relative items-left">
                <p class="w-full mx-auto text-xl text-blueGray-600">
                    {{
                        $t(
                            "Paecilomyces lilacinus es un hongo que controla fitonematodos, principalmente especies del nematodo agallador Meloidogyne spp. Este hongo parasita huevos, adultos y quistes de nematodos. También puede afectar nematodos móviles que están fuera de las raíces."
                        )
                    }}
                    <br />
                    <br />
                    <span class="boldFont font-bold"
                        >Metarhizium anisopliae:</span
                    >
                    {{
                        $t(
                            "es un género de hongos con especies capaces de generar enfermedad en insectos y matarlos, el cual ha demostrado ser efectivo en el control de plagas como palomilla dorso de diamante (Plutella xylostella), Tortuguilla (Colasspis spp) y gallina ciega (Phyllophaga spp.) etc."
                        )
                    }}
                    <br />
                    <br />
                    <span class="boldFont font-bold">Beauveria bassiana:</span>
                    {{
                        $t(
                            "es un hongo saprofito de la clase Deuteromycetes, capaz de infectar a más de 200 especies de insectos. Es de apariencia polvosa, de color blanco o amarillento cremoso. es un poderoso aliado para el control de plagas de insectos, como picudo, trips, mosca blanca, pulgón, araña roja, etc."
                        )
                    }}
                    <br />
                    <br />
                    <span class="boldFont font-bold">Isaria fumosorosea:</span>
                    {{
                        $t(
                            "es un hongo entomopatógeno, anteriormente conocido como Paecilomyces fumosoroseus. Se muestra prometedor como pesticida biológico con una amplia gama de huéspedes como mosca blanca, Araña roja, Lepidopteros, etc."
                        )
                    }}
                </p>
            </div>
            <div class="flex flex-col animated fadeIn sm:flex-row">
                <div class="flex items-center sm:w-1/2 md:w-5/12 sm:order-last">
                    <img src="/assets/laboratory/bacterias.png" alt="" />
                </div>
                <div
                    class="flex flex-col justify-center mt-2 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16"
                >
                    <p
                        class="boldFont mb-2 text-3xl font-bold leading-none text-left text-blueGray-600 uppercase"
                    >
                        {{ $t("BACTERIAS") }}
                    </p>
                    <p
                        class="lightFont mt-5 text-xl text-blueGray-600 text md:text-justify"
                    >
                        <span class="boldFont font-bold">Chromobacteria:</span>
                        {{
                            $t(
                                "Es una bacteria insecticida que controla insectos como cochinilla algodonosa, Pulgon, Trips, Mosca Blanca."
                            )
                        }}
                    </p>
                    <br />
                    <p
                        class="lightFont mt-5 text-xl text-blueGray-600 text md:text-justify"
                    >
                        <span class="boldFont font-bold"
                            >Bacillus thuringiensis (Bt):</span
                        >
                        {{
                            $t(
                                "es una bacteria natural grampositiva que habita en el suelo, de esta se extrae la toxina Cry que actúa como insecticida y que se ha utilizado desde la década de 1950 para el control natural de insectos. Presenta toxicidad contra larvas de insectos-plaga de los órdenes Lepidóptera, Coleóptera y Díptera, entre otros."
                            )
                        }}
                    </p>
                </div>
            </div>
            <div class="lightFont relative items-left">
                <p class="w-full mx-auto text-xl text-blueGray-600">
                    <span class="boldFont font-bold">Bacillus subtilis:</span>
                    {{
                        $t(
                            "es una bacteria cosmopolita presente en numerosos hábitats y resulta ser un excelente agente de control biológico de enfermedades causadas por hongos y bacterias. Es de aplicación foliar y radicular combatiendo un amplio espectro de patógenos como: Sigatoka Negra, Fusarium , Pythium, Phytophthora, Rhizoctonia solani, Sclerotinia, Botrytis, Alternaría y Erwinia."
                        )
                    }}
                    <br />
                    <br />
                    <span class="boldFont font-bold"
                        >Pseudomonas fluorescens:</span
                    >
                    {{
                        $t(
                            "es un bacilo Gram-negativo, recto o ligeramente curvado pero no vibrioide, es saprofito. Se puede encontrar en suelo y agua. Es incapaz de formar esporas y crece aeróbicamente Azospirillum brasilense: fija nitrógeno dejándolo disponible para las raíces y promover el crecimiento y desarrollo radicular."
                        )
                    }}
                    <br />
                    <br />
                    {{
                        $t(
                            "Como parte del Manejo Integrado de Plagas que implementamos, Importamos un Acaro depredador ( Neoseiulus Californicus ) para control de la plaga, Araña Roja ( Tetranychus urticae ) y con esto reducimos a 0 aplicaciones de químicos para el control de la plaga."
                        )
                    }}
                </p>
            </div>
        </div>
    </section>
    <div>
        <AppFooter />
    </div>
</template>
