<template>
    <main class="overflow-x-hidden h-[100vh] flex flex-col justify-center items-center">
        <h1 class="lg:text-2xl lg:mb-5 max-sm:mb-4 uppercase font-bold">Contact <span class="text-greenVue">Me :</span></h1>
        <ul class="flex flex-wrap justify-center lg:gap-x-3 max-sm:gap-3 lg:text-xl">
            <li v-for="item in items" :key="item.title">
                <a href="" @click.prevent :class="[baseClass, item.color]">
                    <i :class="item.ico"></i>
                    <span>{{ item.title }}</span>
                </a>
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    name: "Contact",
    data() {
        return {
            baseClass: "h-12 lg:px-5 max-sm:w-36 rounded-md flex max-sm:justify-center items-center gap-x-2 transition duration-300 outline-none text-white",
            items: [
                { title: "Github", ico: "fa-brands fa-github", url: "", color: "bg-[#181717] hover:bg-[#000000] focus:bg-[#000000]" },
                { title: "Instagram", ico: "fa-brands fa-instagram", url: "", color: "bg-[#833AB4] hover:bg-[#70309b] focus:bg-[#70309b]" },
                { title: "Facebook", ico: "fa-brands fa-facebook", url: "", color: "bg-[#1877F2] hover:bg-[#166ddf] focus:bg-[#166ddf]" },
                { title: "Whatsapp", ico: "fa-brands fa-whatsapp", url: "", color: "bg-[#25D366] hover:bg-[#22bb5a] focus:bg-[#22bb5a]" },
                { title: "Email", ico: "fa-solid fa-envelope", url: "", color: "bg-[#3498DB] hover:bg-[#2f8ac7] focus:bg-[#2f8ac7]" },
            ],
        }
    },
}
</script>