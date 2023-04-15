<template>
    <body>
        <section>
            <div class="container max-w-app">
                <div class="img-container-grid">
                    <div class="img-space">
                        <img
                            src="/assets/Gallery/bananasworks1.jpg"
                            class="img-grid"
                        />
                    </div>
                    <div class="img-space">
                        <img
                            src="/assets/Gallery/bananaworks.jpg"
                            class="img-grid"
                        />
                    </div>
                    <div class="h_rectangle">
                        <img src="/assets/Gallery/IMG_1226.jpg" class="img-grid" />
                    </div>
                    <div class="img-space">
                        <img
                            src="/assets/Gallery/workmachine.jpg"
                            class="img-grid"
                        />
                    </div>
                    <div class="bigsquare">
                        <img src="/assets/Gallery/work.jpg" class="img-grid" />
                    </div>
                    <div class="bigsquare_blank">
                        <div class="inner_square">
                            <img
                                src="/assets/Gallery/IMG_1184.jpg"
                                class="img-grid"
                            />
                        </div>
                        <div class="inner_square">
                            <img
                                src="/assets/Gallery/siembra.png"
                                class="img-grid"
                            />
                        </div>
                        <div class="inner_square">
                            <img
                                src="/assets/Gallery/Algodon.jpg"
                                class="img-grid"
                            />
                        </div>
                        <div class="inner_square">
                            <img
                                src="/assets/Gallery/Tomate.png"
                                class="img-grid"
                            />
                        </div>
                    </div>
                    <div class="v_rectangle">
                        <img
                            src="/assets/Gallery/IMG_1345.jpg"
                            class="img-grid object-left"
                        />
                    </div>
                </div>
            </div>
        </section>
    </body>
</template>
<style>
.img-container-grid {
    display: flex;
    flex-wrap: wrap;
}

.img-space {
    max-width: 20%;
    height: auto;
    flex: 0 0 20%;
    padding-top: 20%;
    display: grid;
    position: relative;
}

.h_rectangle {
    max-width: 40%;
    flex: 0 0 40%;
    padding-top: 20%;
    position: relative;
}

.bigsquare {
    max-width: 40%;
    height: auto;
    flex: 0 0 40%;
    padding-top: 40%;
    display: grid;
    position: relative;
}
.bigsquare_blank {
    max-width: 40%;
    height: auto;
    flex: 0 0 40%;
    display: flex;
    flex-wrap: wrap;
}
.inner_square {
    max-width: 50%;
    flex: 0 0 50%;
    height: 50%;
    position: relative;
}
.v_rectangle {
    max-width: 20%;
    flex: 0 0 20%;
    padding-top: 40%;
    position: relative;
}

.img-grid {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    object-fit: cover;
    padding: 2.5px;
}
</style>
