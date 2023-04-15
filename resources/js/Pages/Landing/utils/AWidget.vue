<script>
(function () {
    var options = {
        call: "+502 2295 6100",
        call_color: "#666666",
        whatsapp: "+(502) 4005 1798",
        whatsapp_color: "#666666",
        call_to_action: "Get in touch!",
        button_color: "rgb(252 211 77)",
        position: "right",
        order: "call,whatsapp",
        pre_filled_message: "Contacto de WhatsApp",
    };
    var proto = "https:",
        host = "getbutton.io",
        url = proto + "//static." + host;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = url + "/widget-send-button/js/init.js";
    s.onload = function () {
        WhWidgetSendButton.init(host, proto, options);
    };
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
})();
</script>

<style>
.sc-1au8ryl-0 {
    visibility: hidden;
}
.r8rfzx-2 {
    background-color: #666666 !important;
}
</style>
