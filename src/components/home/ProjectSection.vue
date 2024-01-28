<template>
    <section
        class="flex flex-col lg:justify-center lg:items-center lg:h-[100vh] max-sm:min-h-[100vh] w-full bg-slate-50/50 lg:px-10 max-sm:px-3">
        <h1 class="text-center lg:text-3xl font-bold mb-5 uppercase">Project</h1>
        <div class="grid lg:grid-cols-3 max-sm:grid-cols-1 lg:gap-5 max-sm:gap-y-3">
            <div v-for="item in imgItems"
                class="col-span-1 rounded-md shadow-md overflow-hidden transition duration-300 grayscale hover:grayscale-0">
                <img src="/src/assets/img/example-project.jpg" :alt="item.alt">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Project-Section',
    data() {
        return {
            imgItems: [
                { src: "/src/assets/img/example-project.jpg", alt: "Img Project" },
                { src: "/src/assets/img/example-project.jpg", alt: "Img Project" },
                { src: "/src/assets/img/example-project.jpg", alt: "Img Project" },
                { src: "/src/assets/img/example-project.jpg", alt: "Img Project" },
                { src: "/src/assets/img/example-project.jpg", alt: "Img Project" },
                { src: "/src/assets/img/example-project.jpg", alt: "Img Project" },
            ],
        }
    },
}
</script>