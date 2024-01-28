<template>
    <section
        class="lg:grid lg:grid-cols-3 max-sm:grid-cols-1 lg:px-10 max-sm:px-3 lg:items-center lg:gap-x-10 lg:h-[100vh] max-sm:pt-[4.5rem] max-sm:min-h-[100vh] max-sm:pb-5 w-full bg-slate-50/50">
        <div class="lg:col-span-2 max-sm:col-span-1">
            <h3 class="lg:text-2xl font-bold uppercase text-greenVue">Selamat Datang Diportfolio
                Sederhana Saya!</h3>
            <h1
                class="lg:text-4xl max-sm:text-xl lg:py-3 max-sm:py-2 max-sm:text-justify font-bold lg:leading-[45px] capitalize">
                Saya adalah
                seorang <span class="text-greenVue">pemula</span> yang
                sedang belajar <span class="text-greenVue">pemrograman,</span> dimana saat ini saya sedang belajar <span
                    class="text-greenVue">Vue Js</span> dan berfokus pada bidang <span class="text-greenVue">frontend
                    developer.</span></h1>
            <h5 class="lg:font-medium lg:text-lg italic text-justify">"Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Harum
                rem, ducimus nobis voluptatem odit iure corporis culpa! Consequatur consequuntur id earum ex deleniti
                officia vel! Voluptatem, alias. Rem, quos ipsam."</h5>
            <button
                class="lg:mt-6 max-sm:mt-5 lg:font-semibold lg:text-lg bg-greenVue transition duration-300 outline-none hover:bg-hoverGreenVue focus:bg-hoverGreenVue text-white lg:h-11 max-sm:h-9 lg:w-36 max-sm:w-32 max-sm:rounded lg:rounded-md lg:shadow max-sm:font-medium">Get
                Started</button>
        </div>
        <div class="lg:col-span-1 max-sm:hidden">
            <img src="/src/assets/img/profil.jpg" alt="Profil Img"
                class="rounded-full drop-shadow-md grayscale transition duration-300 hover:grayscale-0">
        </div>
    </section>
</template>

<script>
export default {
    name: 'Hero-Section',
}
</script>