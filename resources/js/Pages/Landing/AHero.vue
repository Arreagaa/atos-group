<script></script>
<template>
    <section
        id="hero"
        class="w-full h-screen overflow-hidden relative md:h-screen-150vh md:aspect-w-100 md:aspect-h-150"
    >
        <div class="w-full 2xl:container md:mx-auto px-3 pt-20">
            <div
                class="flex flex-wrap items-center lg:-mx-6 lg:px-4 lg:py-4 -mx-3 px-3 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md"
            >
                <div class="flex lg:px-3 px-1 min-[1024px]:w-full">
                    <div
                        class="text-[#e7bd5f] mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left"
                    >
                        <h2
                            class="blackFont atos mb-4 font-semibold text-left lg:text-8xl max-[375px]:text-6xl res-size"
                            :class="
                                $i18n.locale === 'es' ? 'text-7xl' : 'text-6xl'
                            "
                        >
                            {{ $t("Excelencia agrícola desde 1933") }}
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
            </div>
        </div>
    </section>
</template>
