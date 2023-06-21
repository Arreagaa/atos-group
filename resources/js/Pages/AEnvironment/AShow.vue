<script setup>
import AppWhiteHeader from "../../Layouts/AppWhiteHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
</script>
<template>
    <AppWhiteHeader />
    <div
        class="lg:py-72 py-48 bg-[url('/assets/img/Environment.jpeg')] bg-cover bg-center"
    >
        <div class="container items-center m-auto md:px-6 px-4 text-white">
            <p class="res-title boldFont lg:text-8xl text-5xl font-bold text-center">
                {{ $t("Agricultura Regenerativa") }}
            </p>
            <p
                class="lightFont lg:text-2xl text-xl font-base text-center lg:mt-8 mt-12"
            >
                {{ $t("Manejo de los desechos de empacadoras.") }}
            </p>
        </div>
    </div>

    <div class="max-w-app my-12 items-left">
        <p
            class="lightFont lg:mx-40 text-xl font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
        >
            <span class="boldFont font-bold">{{
                $t("El compost o la composta")
            }}</span>
            {{
                $t(
                    "es un producto obtenido a partir de diferentes materiales de origen orgánico obtenidos de nuestras plantas empacadoras, los cuales son sometidos a un proceso biológico controlado de descomposición denominado compostaje."
                )
            }}
            <br />
            <br />

            {{
                $t(
                    "Contribuye al incremento de materia orgánica de los suelos, y por tanto a la mejora de su fertilidad, estructura y retención hídrica, previniendo así su erosión y degradación"
                )
            }}<br />
            <br />

            {{
                $t(
                    "El humus de lombriz, también conocido como vermicompost o compost de lombriz, se obtiene de un proceso denominado vermicompostaje, en el cual las lombrices digieren material orgánico, descomponiéndolo gracias a la acción de sus enzimas digestivas y de la microflora presente en su organismo."
                )
            }}
            <br />
            <br />

            {{
                $t(
                    "Permite solubilizar, fijar y retener los nutrientes y los elementos fertilizantes. Mejora la estructura física del suelo, formando agregados y reduciendo a erosión. Favorece la absorción de los rayos solares debido a su color oscuro. Regula los intercambios de aire, agua y calor entre la tierra, el aire y la planta."
                )
            }}<br />
            <br />

            {{
                $t(
                    "Como el humus es muy estable, es decir que los microorganismos no lo transforman mucho más. Puede tener una vida útil de incluso 100 años o más. En cambio, el compost aún se está transformando."
                )
            }}<br />
            <br />

            {{
                $t(
                    "Con lo que normalmente tiene una vida útil de 3 años o más, apŕoximadamente."
                )
            }}<br />
            <br />

            <span class="boldFont font-bold">
                {{ $t("Cultivo de cobertura:") }} </span
            ><br />

            {{
                $t(
                    "Como parte de la Sostenibilidad que estamos buscando como empresa estamos implementando un cultivo de cobertura en las áreas de producción, para reducir a 0 el uso de herbicidas en las áreas de producción, mantener la húmedad en los suelos, mejorar la estructura de los suelos agregando materia orgánica y optimizando el microclima para los microorganismos, permitiendo un mejor desarrollo radicular de los cultivos."
                )
            }}<br />
            <br />

            <span class="boldFont font-bold">{{
                $t("Manejo del Cambio Climático:")
            }}</span
            ><br />

            {{ $t("Somos socios del Instituto de cambio climático ICC") }}
            <a target="_blank" href="https://icc.org.gt/es/icc-3/"
                >https://icc.org.gt/es/icc-3/</a
            >
            {{
                $t(
                    "intentando tener un impacto en el clima y manejo de las cuencas hidrológicas de todo el Pais de una manera positiva."
                )
            }}
        </p>
    </div>
    <div>
        <AppFooter />
    </div>
</template>
