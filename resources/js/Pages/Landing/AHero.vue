<script></script>
<template>
    <section
        id="hero"
        class="w-full h-screen overflow-hidden relative md:h-screen-150vh md:aspect-w-100 md:aspect-h-150"
    >
        <div class="hero-container">
            <path d="M51,267 C243,25 254,26 459,283" />
            <div id="heroCarousel" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div
                            class="carousel-container absolute top-40 lg:left-52"
                        >
                            <section
                                class="flex flex-wrap items-center lg:-mx-6 lg:px-4 lg:py-4 -mx-3 px-3 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md"
                            >
                                <div class="flex lg:px-3 px-1 w-full">
                                    <div
                                        class="text-amber-300 mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left"
                                    >
                                        <h2
                                            class="blackFont atos mb-4 font-semibold text-left lg:text-8xl max-[375px]:text-6xl"
                                            :class="
                                                $i18n.locale === 'es'
                                                    ? 'text-7xl'
                                                    : 'text-6xl'
                                            "
                                        >
                                            {{
                                                $t(
                                                    "Excelencia agrícola desde 1933"
                                                )
                                            }}
                                        </h2>

                                        <p
                                            class="lightFont visible mx-0 mt-3 mb-0 lg:text-2xl text-xl leading-relaxed text-left text-slate-200 max-[375px]:pr-0 pr-8"
                                        >
                                            {{
                                                $t(
                                                    "450 hectáreas con producción de banano de la variedad Gran Enano."
                                                )
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
