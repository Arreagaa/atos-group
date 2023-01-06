<template>
    <div
        class="contact max-w-app rounded px-8 pb-8 mb-16 flex flex-col mt-36"
    >
        <div class="max-w-5xl mx-auto mb-20">
            <br />
            <div class="uppercase">
                <h1
                    class="container mx-auto w-full text-5xl font-bold text-center text-white"
                >
                    ¿Seguimos en contacto?
                </h1>
            </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 focus:ring-yellow-400 focus:border-yellow-400"
                    id="name"
                    type="text"
                    placeholder="Nombre y Apellido *"
                />
            </div>
            <div class="md:w-1/2 px-3">
                <input
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 focus:ring-yellow-400 focus:border-yellow-400"
                    id="phone"
                    type="phone"
                    placeholder="Teléfono *"
                />
            </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3">
                <input
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 focus:ring-yellow-400 focus:border-yellow-400"
                    id="email"
                    type="email"
                    placeholder="Correo Electrónico *"
                />
            </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3">
                <textarea
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mt-2 mb-3 focus:ring-yellow-400 focus:border-yellow-400"
                    id="message"
                    type="text"
                    placeholder="Mensaje *"
                />
            </div>
        </div>
        <div class="inline-flex justify-end mb-6">
            <button
                type="submit"
                class="text-amber-300 bg-zinc-900 hover:bg-amber-300 hover:text-black font-bold rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center uppercase"
            >
                Enviar
            </button>
        </div>
    </div>
</template>
<style>
.contact {
    font-family: Outfit-Regular;
}
</style>
