<script>
export default {
    name: "BackToTop",
    data() {
        return {
            isTop: false,
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    mounted() {
        const that = this;
        window.addEventListener("scroll", () => {
            let scrollPos = window.scrollY;
            if (scrollPos >= 5000) {
                that.isTop = true;
            } else {
                that.isTop = false;
            }
        });
    },
};
</script>
<template>
    <div
        @click="scrollToTop()"
        :class="['back-to-top-btn', { 'go-top': isTop }]"
        class="rounded-full z-50"
    >
        <i
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                class="ml-2.5"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                />
            </svg>
        </i>
    </div>
</template>
<style scoped>
.back-to-top-btn {
    position: fixed;
    cursor: pointer;
    bottom: -100px;
    right: 20px;
    color: #ffffff;
    background-color: #e7bd5f;
    width: 45px;
    height: 45px;
    opacity: 0;
    visibility: hidden;
    transition: 0.6s;
    overflow: hidden;
}

i {
    position: relative;
    top: 25%;
}
.go-top {
    opacity: 1;
    visibility: visible;
    bottom: 95px;
    margin-right: 5px;
}
:hover {
    background-color: #000;
    color: #ffffff;
    transition: 0.6s;
    transform: translateY(-2px);
}
</style>
