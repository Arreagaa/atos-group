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
            if (scrollPos >= 100) {
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
    >
        <i
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 d-inline align-center ml-2"
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
    background-color: #feb302;
    z-index: 4;
    width: 45px;
    text-align: center;
    height: 45px;
    opacity: 0;
    visibility: hidden;
    font-size: 22px;
    transition: 0.6s;
    overflow: hidden;
}

i {
    position: relative;
    right: 0;
    left: 0;
    top: 45%;
    transform: translateY(-45%);
    align-items: center;
    text-align: center;
    font-size: 30px;
    margin-left: auto;
    margin-right: auto;
}
.go-top {
    opacity: 1;
    visibility: visible;
    bottom: 50px;
}
:hover {
    background-color: #feb302;
    color: #ffffff;
    transition: 0.6s;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    transform: translateY(-5px);
}
</style>
