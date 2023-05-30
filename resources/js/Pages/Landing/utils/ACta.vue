<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Autoplay],
        };
    },
};
</script>
<template>
    <div class="swiper">
        <swiper
            :navigation="true"
            :loop="true"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide>
                <card
                    class="card bg-[url('/assets/4-Exportacion/fondoexport.png')] flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full pb-20"
                >
                    <div class="lg:block hidden px-40 ml-64 w-full lg:w-2/5">
                        <div
                            class="mx-auto mb-8 max-w-lg text-left lg:mx-0 lg:max-w-md lg:text-left"
                        >
                            <div class="absolute -ml-48">
                                <img
                                    src="/assets/4-Exportacion/Icon-export.png"
                                    alt=""
                                />
                            </div>
                            <h2
                                class="regularFont text-box mb-4 text-2xl font-normal text-left text-white"
                            >
                                {{ $t("Se está exportando alrededor de") }}
                            </h2>

                            <h2
                                class="blackFont box mb-4 text-7xl font-bold text-left text-[#e7bd5f]"
                            >
                                1,632,000
                            </h2>

                            <h2
                                class="blackFont box mb-4 text-2xl font-bold text-left text-[#e7bd5f]"
                            >
                                {{ $t("Cajas por año.") }}
                            </h2>

                            <p
                                class="regularFont text-box visible mx-2 mt-8 mb-0 text-xl leading-relaxed text-white -ml-44"
                            >
                                {{
                                    $t(
                                        "Actualmente contamos con 450 hectáreas con producción de banano de la variedad Gran Enano para la exportación a los diferentes puntos del mundo."
                                    )
                                }}
                            </p>
                        </div>
                    </div>

                    <div class="lg:hidden px-4 ml-3 w-full lg:w-2/5">
                        <div
                            class="mx-auto mb-8 max-w-lg lg:mx-0 lg:max-w-md text-left"
                        >
                            <h2
                                class="text-blackFont box mb-4 text-xl font-normal text-left text-white"
                            >
                                {{ $t("Se está exportando alrededor de") }}
                            </h2>

                            <h2
                                class="blackFont box mb-4 text-7xl font-bold text-left text-[#e7bd5f]"
                            >
                                1,632,000
                            </h2>

                            <h2
                                class="blackFont box mb-4 text-2xl font-bold text-left text-[#e7bd5f]"
                            >
                                {{ $t("Cajas por año.") }}
                            </h2>

                            <p
                                class="regularFont text-box visible mx-0 mt-8 mb-0 text-xl leading-relaxed text-white mr-4"
                            >
                                {{
                                    $t(
                                        "Actualmente contamos con 450 hectáreas con producción de banano de la variedad Gran Enano para la exportación a los diferentes puntos del mundo."
                                    )
                                }}
                            </p>
                        </div>
                    </div>
                </card>
            </swiper-slide>
            <swiper-slide
                ><card
                    class="card bg-[url('/assets/banners/banner_trazabilidad.png')] bg-center flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full pb-20"
                >
                    <div class="lg:block hidden px-40 ml-64 w-full lg:w-2/5">
                        <div
                            class="mx-auto mb-8 max-w-lg text-left lg:mx-0 lg:max-w-md lg:text-left"
                        >
                            <p
                                class="regularFont text-box visible mx-0 mt-8 mb-0 text-2xl leading-relaxed text-zinc-600 -ml-44"
                            >
                                {{ $t("Contamos con equipo experto en") }}
                            </p>
                            <span
                                class="blackFont text-box visible mx-0 mb-0 text-7xl leading-relaxed text-[#e7bd5f] -ml-44"
                            >
                                {{ $t("Trazabilidad") }}
                            </span>
                            <p
                                class="regularFont text-box visible mx-0 mb-0 text-xl leading-relaxed text-zinc-600 -ml-44"
                            >
                                {{
                                    $t(
                                        "Que se dedica a conocer el origen, la ubicación y el historial de un producto en cualquier momento de su ciclo de vida."
                                    )
                                }}
                            </p>
                        </div>
                    </div>

                    <div class="lg:hidden px-4 ml-6 w-full lg:w-2/5">
                        <div
                            class="mx-auto mb-40 max-w-lg text-left lg:mx-0 lg:max-w-md lg:text-left"
                        >
                            <p
                                class="regularFont text-box visible mx-0 mb-0 text-xl leading-relaxed text-zinc-600"
                            >
                                {{ $t("Contamos con equipo experto en") }}
                            </p>
                            <p
                                class="blackFont text-box visible mx-0 mb-0 text-5xl leading-relaxed text-[#e7bd5f]"
                            >
                                {{ $t("Trazabilidad") }}
                            </p>
                            <p
                                class="regularFont text-box visible mx-0 mb-0 text-xl leading-relaxed text-zinc-600"
                            >
                                {{
                                    $t(
                                        "Que se dedica a conocer el origen, la ubicación y el historial de un producto en cualquier momento de su ciclo de vida."
                                    )
                                }}
                            </p>
                        </div>
                    </div>
                </card>
            </swiper-slide>
            <swiper-slide
                ><card
                    class="card bg-[url('/assets/banners/banner_sostenibilidad.png')] flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full pb-20"
                >
                    <div class="lg:block hidden px-36 ml-64 w-full lg:w-2/5">
                        <div
                            class="mx-auto mb-8 max-w-lg text-left lg:mx-0 lg:max-w-md lg:text-left"
                        >
                            <span
                                class="blackFont text-box visible mx-0 mb-0 text-7xl leading-relaxed text-white -ml-44"
                            >
                                {{ $t("Sostenibilidad") }}
                            </span>
                            <p
                                class="regularFont text-box visible mx-0 mb-0 text-xl leading-relaxed text-white -ml-44"
                            >
                                {{
                                    $t(
                                        "Nos enfocamos en crear valor a largo plazo para los accionistas mediante el aprovechamiento de oportunidades y la gestión eficaz de los riesgos inherentes al desarrollo económico, medioambiental y social."
                                    )
                                }}
                            </p>
                        </div>
                    </div>

                    <div class="lg:hidden px-4 ml-6 w-full lg:w-2/5">
                        <div
                            class="mx-auto mb-40 max-w-lg text-left lg:mx-0 lg:max-w-md lg:text-left"
                        >
                            <p
                                class="blackFont text-box visible mx-0 mb-0 text-5xl leading-relaxed text-white"
                            >
                                {{ $t("Sostenibilidad") }}
                            </p>
                            <p
                                class="regularFont text-box visible mx-0 mb-0 text-lg leading-relaxed text-white"
                            >
                                {{
                                    $t(
                                        "Nos enfocamos en crear valor a largo plazo para los accionistas mediante el aprovechamiento de oportunidades y la gestión eficaz de los riesgos inherentes al desarrollo económico, medioambiental y social."
                                    )
                                }}
                            </p>
                        </div>
                    </div>
                </card>
            </swiper-slide>
        </swiper>
    </div>
</template>
<style>
.swiper-button-next,
.swiper-button-prev {
    color: #ebebeb;
}
</style>
