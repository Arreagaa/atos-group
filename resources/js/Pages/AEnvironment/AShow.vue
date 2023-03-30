<script setup>
import AppWhiteHeader from "../../Layouts/AppWhiteHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
</script>
<template>
    <AppWhiteHeader />
    <div
        class="lg:block hidden py-72 bg-[url('/assets/img/Environment.jpeg')] bg-cover"
    >
        <div class="container items-center m-auto px-6 text-white">
            <p class="boldFont text-8xl font-bold text-center">
                Medio Ambiente
            </p>
            <p class="lightFont text-2xl font-base text-center mt-8">
                Manejo de los desechos de empacadoras.
            </p>
        </div>
    </div>

    <div
        class="lg:hidden py-48 bg-[url('/assets/img/Environment.jpeg')] bg-cover bg-center"
    >
        <div class="container items-center m-auto px-6 text-white">
            <p class="boldFont text-5xl font-bold text-center">
                Medio Ambiente
            </p>
            <p class="lightFont text-xl font-base text-center mt-12">
                Manejo de los desechos de empacadoras.
            </p>
        </div>
    </div>

    <div class="max-w-app my-12 items-left">
        <p
            class="lightFont lg:mx-40 text-xl font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
        >
            <span class="boldFont font-bold">El compost o la composta</span> es
            un producto obtenido a partir de diferentes materiales de origen
            orgánico obtenidos de nuestras plantas empacadoras, los cuales son
            sometidos a un proceso biológico controlado de descomposición
            denominado compostaje. <br />
            <br />

            Contribuye al incremento de materia orgánica de los suelos, y por
            tanto a la mejora de su fertilidad, estructura y retención hídrica,
            previniendo así su erosión y degradación.<br />
            <br />

            El humus de lombriz, también conocido como vermicompost o compost de
            lombriz, se obtiene de un proceso denominado vermicompostaje, en el
            cual las lombrices digieren material orgánico, descomponiéndolo
            gracias a la acción de sus enzimas digestivas y de la microflora
            presente en su organismo. <br />
            <br />

            Permite solubilizar, fijar y retener los nutrientes y los elementos
            fertilizantes. Mejora la estructura física del suelo, formando
            agregados y reduciendo a erosión. Favorece la absorción de los rayos
            solares debido a su color oscuro. Regula los intercambios de aire,
            agua y calor entre la tierra, el aire y la planta.<br />
            <br />

            Como el humus es muy estable, es decir que los microorganismos no lo
            transforman mucho más. Puede tener una vida útil de incluso 100 años
            o más. En cambio, el compost aún se está transformando.<br />
            <br />

            Con lo que normalmente tiene una vida útil de 3 años o más,
            apŕoximadamente.<br />
            <br />

            <span class="boldFont font-bold"> Cultivo de cobertura: </span
            ><br />

            Como parte de la Sostenibilidad que estamos buscando como empresa
            estamos implementando un cultivo de cobertura en las áreas de
            producción, para reducir a 0 el uso de herbicidas en las áreas de
            producción, mantener la húmedad en los suelos, mejorar la estructura
            de los suelos agregando materia orgánica y optimizando el microclima
            para los microorganismos, permitiendo un mejor desarrollo radicular
            de los cultivos.<br />
            <br />

            <span class="boldFont font-bold">Manejo del Cambio Climatico:</span
            ><br />

            Somos socios del Instituto de cambio climático ICC
            <a href="htps://icc.org.gt/es/icc-3/"
                >htps://icc.org.gt/es/icc-3/</a
            >
            intentando tener un impacto en el clima y manejo de las cuencas
            hidrológicas de todo el Pais de una manera positiva.
        </p>
    </div>
    <div>
        <AppFooter />
    </div>
</template>
