<script>
import { i18n } from "@/i18n";
import Dropdown from "@/Components/Dropdown.vue";

export default {
    data() {
        return {
            currentLanguage: i18n.global.locale,
            supportedLanguages: {
                es: "Es",
                en: "En",
            },
        };
    },
    components: {
        Dropdown,
    },
    methods: {
        setLanguage(languageCode) {
            i18n.global.locale = languageCode;
            this.currentLanguage = this.supportedLanguages[languageCode];
        },
    },
};
</script>

<template>
    <Dropdown align="right" width="20">
        <template #trigger>
            <button
                class="inline-flex text-sm border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
            ></button>

            <span class="inline-flex rounded-md">
                <button
                    type="button"
                    class="inline-flex items-center py-2 px-4 hover:text-[#e7bd5f] leading-4 transition capitalize"
                >
                    {{ currentLanguage }}
                    <svg
                        class="ml-2 -mr-0.5 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </span>
        </template>
        <template #content>
            <a
                href="#"
                class="block px-3 py-2 text-sm text-gray-700 no-underline hover:text-[#e7bd5f]"
                @click.prevent="setLanguage('es')"
            >
                {{ $i18n.t("Español") }}
            </a>
            <a
                href="#"
                class="block px-3 py-2 text-sm text-gray-700 no-underline hover:text-[#e7bd5f]"
                @click.prevent="setLanguage('en')"
            >
                {{ $i18n.t("English") }}
            </a>
            <div class="border-t border-gray-100" />
        </template>
    </Dropdown>
</template>
