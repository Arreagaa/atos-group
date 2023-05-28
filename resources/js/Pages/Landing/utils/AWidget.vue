<script>
export default {
    data() {
        return {
            call: "+502 2295 6100",
            call_color: "#666666",
            whatsapp: "+(502) 4005 1798",
            whatsapp_color: "#666666",
            button_color: "#e7bd5f",
            position: "right",
            order: "call,whatsapp",
            pre_filled_message: "Contacto de WhatsApp",
        };
    },
    mounted() {
        var options = {
            call: this.call,
            call_color: this.call_color,
            whatsapp: this.whatsapp,
            whatsapp_color: this.whatsapp_color,
            call_to_action: this.$t("¡Ponte en contacto!"),
            button_color: this.button_color,
            position: this.position,
            order: this.order,
            pre_filled_message: this.pre_filled_message,
        };
        var proto = "https:";
        var host = "getbutton.io";
        var url = proto + "//static." + host;
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = url + "/widget-send-button/js/init.js";
        s.onload = function () {
            WhWidgetSendButton.init(host, proto, options);
        };
        var x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
    },
};
</script>

<style>
.sc-1au8ryl-0 {
    visibility: hidden;
}
.r8rfzx-2 {
    background-color: #666666 !important;
}
</style>
