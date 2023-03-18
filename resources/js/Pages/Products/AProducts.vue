<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
    idItem: {
        type: Number,
        default: 0,
    },
});
</script>
<template>
    
        <div
            class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style="
                visibility: visible;
                animation-duration: 1s;
                animation-name: fadeInUp;
            "
        >
            <div
                class="py-8 px-12 mb-12 transform transition duration-300 ease-in-out hover:-translate-y-2"
            >
                <div class="inline-block text-gray-900 text-lg mb-4">
                    <img
                        :src="item.image"
                        alt="image"
                        class="rounded mx-auto d-block"
                    />
                </div>
                <h3
                    class="boldFont title text-xl leading-normal mb-2 font-bold text-black"
                >
                    {{ item.name }}
                </h3>
                <p
                    class="lightFont font-semibold paragraph text-gray-900 text-lg"
                >
                    {{ item.description }}
                </p>
            </div>
        </div>
   
</template>
