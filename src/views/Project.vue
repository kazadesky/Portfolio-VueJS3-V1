<template>
    <main class="overflow-x-hidden min-h-[100vh] lg:px-10 max-sm:px-3 pb-5">
        <h1 class="lg:text-2xl lg:mt-[4.5rem] max-sm:mt-[4rem] lg:mb-5 max-sm:mb-4 uppercase font-bold">My <span
                class="text-greenVue">Project :</span></h1>
        <div class="grid lg:grid-cols-4 lg:justify-center max-sm:grid-cols-1 lg:gap-5 max-sm:gap-y-3">
            <div v-for="item in imgItems" class="col-span-1 overflow-hidden rounded-md shadow-md text-justify">
                <img src="/src/assets/img/example-project.jpg" :alt="item.alt">
                <div class="p-3 bg-slate-50">
                    <a href="" @click.prevent
                        class="transition duration-300 lg:font-semibold capitalize max-sm:medium outline-none hover:text-greenVue focus:text-greenVue leading-snug">{{
                            item.title }}</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "Project",
    data() {
        return {
            imgItems: [
                { title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi at beatae corporis dicta.", alt: "Img Project" },
                { title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi at beatae corporis dicta.", alt: "Img Project" },
                { title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi at beatae corporis dicta.", alt: "Img Project" },
                { title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi at beatae corporis dicta.", alt: "Img Project" },
                { title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi at beatae corporis dicta.", alt: "Img Project" },
                { title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi at beatae corporis dicta.", alt: "Img Project" },
            ],
        }
    },
}
</script>