<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
};
</script>
<template>
    <div class="swiper">
        <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide>
                <card
                    class="card bg-[url('/assets/4-Exportacion/fondoexport.png')] flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full pb-20"
                >
                    <div class="lg:block hidden px-40 ml-64 w-full lg:w-2/5">
                        <div
                            class="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left"
                        >
                            <div class="absolute -ml-48">
                                <img
                                    src="/assets/4-Exportacion/icon-export.png"
                                    alt=""
                                />
                            </div>
                            <h2
                                class="text-box mb-4 text-2xl font-normal text-left text-white"
                            >
                                Se está exportando alrededor de
                            </h2>

                            <h2
                                class="box mb-4 text-7xl font-bold text-left text-yellow-500"
                            >
                                1,632,000
                            </h2>

                            <h2
                                class="box mb-4 text-2xl font-bold text-left text-yellow-500"
                            >
                                Cajas por año.
                            </h2>

                            <p
                                class="text-box visible mx-0 mt-8 mb-0 text-lg leading-relaxed text-justify text-white -ml-44"
                            >
                                Actualmente contamos con 450 hectáreas con
                                producción de banano de la variedad Gran Enano
                                para la exportación a los diferentes puntos del
                                mundo.
                            </p>
                        </div>
                    </div>

                    <div class="lg:hidden px-4 ml-6 w-full lg:w-2/5">
                        <div
                            class="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left"
                        >
                            <h2
                                class="text-box mb-4 text-2xl font-normal text-left text-white"
                            >
                                Se está exportando alrededor de
                            </h2>

                            <h2
                                class="box mb-4 text-7xl font-bold text-left text-yellow-500"
                            >
                                1,632,000
                            </h2>

                            <h2
                                class="box mb-4 text-2xl font-bold text-left text-yellow-500"
                            >
                                Cajas por año.
                            </h2>

                            <p
                                class="text-box visible mx-0 mt-8 mb-0 text-lg leading-relaxed text-justify text-white"
                            >
                                Actualmente contamos con 450 hectáreas con
                                producción de banano de la variedad Gran Enano
                                para la exportación a los diferentes puntos del
                                mundo.
                            </p>
                        </div>
                    </div>
                </card>
            </swiper-slide>
            <swiper-slide
                ><card
                    class="card bg-[url('/assets/4-Exportacion/fondoexport.png')] flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full pb-20"
                >
                    <div class="lg:block hidden px-40 ml-64 w-full lg:w-2/5">
                        <div
                            class="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left"
                        >
                            <div class="absolute -ml-48">
                                <img
                                    src="/assets/4-Exportacion/icon-export.png"
                                    alt=""
                                />
                            </div>
                            <h2
                                class="text-box mb-4 text-2xl font-normal text-left text-white"
                            >
                                Se está exportando alrededor de
                            </h2>

                            <h2
                                class="box mb-4 text-7xl font-bold text-left text-yellow-500"
                            >
                                1,632,000
                            </h2>

                            <h2
                                class="box mb-4 text-2xl font-bold text-left text-yellow-500"
                            >
                                Cajas por año.
                            </h2>

                            <p
                                class="text-box visible mx-0 mt-8 mb-0 text-lg leading-relaxed text-justify text-white -ml-44"
                            >
                                Actualmente contamos con 450 hectáreas con
                                producción de banano de la variedad Gran Enano
                                para la exportación a los diferentes puntos del
                                mundo.
                            </p>
                        </div>
                    </div>

                    <div class="lg:hidden px-4 ml-6 w-full lg:w-2/5">
                        <div
                            class="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left"
                        >
                            <h2
                                class="text-box mb-4 text-2xl font-normal text-left text-white"
                            >
                                Se está exportando alrededor de
                            </h2>

                            <h2
                                class="box mb-4 text-7xl font-bold text-left text-yellow-500"
                            >
                                1,632,000
                            </h2>

                            <h2
                                class="box mb-4 text-2xl font-bold text-left text-yellow-500"
                            >
                                Cajas por año.
                            </h2>

                            <p
                                class="text-box visible mx-0 mt-8 mb-0 text-lg leading-relaxed text-justify text-white"
                            >
                                Actualmente contamos con 450 hectáreas con
                                producción de banano de la variedad Gran Enano
                                para la exportación a los diferentes puntos del
                                mundo.
                            </p>
                        </div>
                    </div>
                </card>
            </swiper-slide>
            <swiper-slide
                ><card
                    class="card bg-[url('/assets/4-Exportacion/fondoexport.png')] flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full pb-20"
                >
                    <div class="lg:block hidden px-40 ml-64 w-full lg:w-2/5">
                        <div
                            class="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left"
                        >
                            <div class="absolute -ml-48">
                                <img
                                    src="/assets/4-Exportacion/icon-export.png"
                                    alt=""
                                />
                            </div>
                            <h2
                                class="text-box mb-4 text-2xl font-normal text-left text-white"
                            >
                                Se está exportando alrededor de
                            </h2>

                            <h2
                                class="box mb-4 text-7xl font-bold text-left text-yellow-500"
                            >
                                1,632,000
                            </h2>

                            <h2
                                class="box mb-4 text-2xl font-bold text-left text-yellow-500"
                            >
                                Cajas por año.
                            </h2>

                            <p
                                class="text-box visible mx-0 mt-8 mb-0 text-lg leading-relaxed text-justify text-white -ml-44"
                            >
                                Actualmente contamos con 450 hectáreas con
                                producción de banano de la variedad Gran Enano
                                para la exportación a los diferentes puntos del
                                mundo.
                            </p>
                        </div>
                    </div>

                    <div class="lg:hidden px-4 ml-6 w-full lg:w-2/5">
                        <div
                            class="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left"
                        >
                            <h2
                                class="text-box mb-4 text-2xl font-normal text-left text-white"
                            >
                                Se está exportando alrededor de
                            </h2>

                            <h2
                                class="box mb-4 text-7xl font-bold text-left text-yellow-500"
                            >
                                1,632,000
                            </h2>

                            <h2
                                class="box mb-4 text-2xl font-bold text-left text-yellow-500"
                            >
                                Cajas por año.
                            </h2>

                            <p
                                class="text-box visible mx-0 mt-8 mb-0 text-lg leading-relaxed text-justify text-white"
                            >
                                Actualmente contamos con 450 hectáreas con
                                producción de banano de la variedad Gran Enano
                                para la exportación a los diferentes puntos del
                                mundo.
                            </p>
                        </div>
                    </div>
                </card>
            </swiper-slide>
        </swiper>
    </div>
</template>
<style>
.swiper {
    height: 100%;
    background: #eee;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-button-next,
.swiper-button-prev {
    color: #ffff;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card {
    background-size: cover;
    padding: 120px 0;
    height: 700px;
}

.box {
    font-family: Outfit-Black;
}
.text-box {
    font-family: Outfit-Regular;
}
</style>
