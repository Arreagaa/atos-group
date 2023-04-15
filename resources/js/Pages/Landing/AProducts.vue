<template>
    <div
        class="blackFont cards-products max-w-app grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-20 -m-16 uppercase"
    >
        <div
            class="w-full bg-white rounded p-3 flex flex-col justify-center items-center hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
        >
            <div class="mb-8">
                <img
                    class="object-center object-cover"
                    src="/assets/3-Productos/Icon-Algodon.png"
                    alt="photo"
                />
            </div>
            <div class="text-center">
                <p class="text-xl text-black">{{ $t("Algodón") }}</p>
            </div>
        </div>
        <div
            class="w-full bg-white rounded p-3 flex flex-col justify-center items-center hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
        >
            <div class="mb-8">
                <img
                    class="object-center object-cover"
                    src="/assets/3-Productos/Icon-Platano.png"
                    alt="photo"
                />
            </div>
            <div class="text-center">
                <p class="text-xl text-black">{{ $t("Plátano") }}</p>
            </div>
        </div>
        <div
            class="w-full bg-white rounded p-3 flex flex-col justify-center items-center hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
        >
            <div class="mb-6">
                <img
                    class="object-center object-cover"
                    src="/assets/3-Productos/Icon-Pimiento.png"
                    alt="photo"
                />
            </div>
            <div class="text-center">
                <p class="text-xl text-black">{{ $t("Pimiento Morrón") }}</p>
            </div>
        </div>
        <div
            class="w-full bg-white rounded p-3 flex flex-col justify-center items-center hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
        >
            <div class="mb-8">
                <img
                    class="object-center object-cover"
                    src="/assets/3-Productos/Icon-Tomate.png"
                    alt="photo"
                />
            </div>
            <div class="text-center">
                <p class="text-xl text-black">{{ $t("Tomate") }}</p>
            </div>
        </div>
        <div
            class="w-full bg-white rounded p-3 flex flex-col justify-center items-center hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
        >
            <div class="mb-8">
                <img
                    class="object-center object-cover"
                    src="/assets/3-Productos/Icon-Banano.png"
                    alt="photo"
                />
            </div>
            <div class="text-center">
                <p class="text-xl text-black">{{ $t("Banano") }}</p>
            </div>
        </div>
    </div>
</template>
