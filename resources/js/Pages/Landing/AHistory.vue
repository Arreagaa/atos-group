<template>
    <div>
        <div
            class="container mx-auto md:flex justify-center items-center px-4 md:px-10 pb-10"
        >
            <div
                class="lightFont text-history bg-transparent text-xl text-black font-normal px-3 md:px-4 py-2 flex flex-col justify-center items-center"
            >
                <p class="mt-2 leading-normal text-center md:w-9/12 lg:w-7/12">
                    {{
                        $t(
                            "Somos una empresa familiar que desde 1933 nos hemos dedicado a producir artículos agrícolas de la mejor calidad para su exportación a los diferentes destinos del mundo."
                        )
                    }}
                </p>
                <br />
                <p class="mt-2 leading-normal text-center md:w-9/12 lg:w-7/12">
                    {{
                        $t(
                            "Gracias a las enseñanzas transmitidas por nuestros fundadores, nos enfocamos en contribuir al desarrollo social y económico, de nuestros colaboradores, sus familias y comunidades donde trabajamos. Y asi, poder ser una compania agroindustrial de clase mundial."
                        )
                    }}
                </p>
                <br />
                <p class="mt-10 leading-normal text-center md:w-9/12 lg:w-7/12">
                    {{
                        $t(
                            "Somos una empresa líder en la región, cumpliendo con los valores y requisitos de ser una empresa exportadora. Distinguiéndonos por:"
                        )
                    }}
                </p>
                <br />
                <div class="flex flex-wrap mt-10 justify-center uppercase">
                    <div class="w-full lg:w-3/12 md:px-32 py-6 text-center">
                        <div
                            class="text-lightBlue-300 p-3 w-24 h-24 inline-flex items-center justify-center"
                        >
                            <img
                                src="/assets/2-historia/Icon-calidad.png"
                                alt="image"
                                class="rounded mx-auto d-block"
                            />
                        </div>
                        <h6 class="text-xl mt-5 font-normal text-black">
                            {{ $t("Calidad") }}
                        </h6>
                    </div>
                    <div class="w-full lg:w-3/12 px-4 py-6 text-center">
                        <div
                            class="text-lightBlue-300 p-3 w-24 h-24 inline-flex items-center justify-center"
                        >
                            <img
                                src="/assets/2-historia/Icon-Transparencia.png"
                                alt="image"
                                class="rounded mx-auto d-block"
                            />
                        </div>
                        <h5 class="text-xl mt-5 font-normal text-black">
                            {{ $t("Transparencia") }}
                        </h5>
                    </div>
                    <div class="w-full lg:w-3/12 px-4 py-6 text-center">
                        <div
                            class="text-lightBlue-300 p-3 w-24 h-24 inline-flex items-center justify-center"
                        >
                            <img
                                src="/assets/2-historia/Icon-Honestidad.png"
                                alt="image"
                                class="rounded mx-auto d-block"
                            />
                        </div>
                        <h5 class="text-xl mt-5 font-normal text-black">
                            {{ $t("Honestidad") }}
                        </h5>
                    </div>
                    <div class="w-full lg:w-3/12 px-4 py-6 text-center">
                        <div
                            class="text-lightBlue-300 p-3 w-24 h-24 inline-flex items-center justify-center"
                        >
                            <img
                                src="/assets/2-historia/Icon-ResSocial.png"
                                alt="image"
                                class="rounded mx-auto d-block"
                            />
                        </div>
                        <h5 class="text-xl mt-5 font-normal text-black">
                            {{ $t("Responsabilidad social y ambiental") }}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
