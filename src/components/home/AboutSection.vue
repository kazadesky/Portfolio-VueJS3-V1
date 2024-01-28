<template>
    <section
        class="lg:flex lg:flex-col lg:justify-center lg:items-center lg:h-[100vh] max-sm:min-h-[100vh] w-full lg:px-10 max-sm:px-3">
        <h1 class="text-center lg:text-3xl font-bold mb-5 uppercase">About</h1>
        <div class="grid lg:grid-cols-3 max-sm:grid-cols-1 lg:gap-x-10">
            <div class="lg:col-span-1 max-sm:hidden shadow-md">
                <img src="/src/assets/img/profil.jpg" alt="Profil Img"
                    class="rounded-md drop-shadow-md grayscale transition duration-300 hover:grayscale-0">
            </div>
            <div
                class="lg:col-span-2 max-sm:col-span-1 bg-slate-100 max-sm:min-h-max shadow-md lg:p-7 max-sm:p-4 max-sm:text-sm text-justify">
                <p class="lg:text-lg lg:mb-4 max-sm:mb-3">
                    Hi there! I'm Kaza Desky, a passionate web developer with a love for creating innovative and
                    interactive user experiences. My journey in the world of web development began with a fascination
                    for turning ideas into beautifully crafted websites.
                </p>
                <p class="lg:text-lg lg:mb-4 max-sm:mb-3">
                    I specialize in front-end technologies like Vue.js and React, ensuring that every project I work on
                    is not only functional but also aesthetically pleasing. My goal is to contribute to projects that make
                    a positive impact and provide users with seamless digital experiences.
                </p>
                <p class="lg:text-lg lg:mb-4 max-sm:mb-3">
                    When I'm not coding, you can find me exploring new technologies, reading tech blogs, or enjoying a good
                    cup of coffee while sketching out new ideas. I believe in continuous learning and staying updated with
                    the latest trends in the ever-evolving world of web development.
                </p>
                <p class="lg:text-lg">
                    Let's collaborate and bring your digital vision to life! Feel free to reach out—I'm always excited about
                    new challenges and opportunities. <span class="italic">#example</span>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About-Section',
}
</script>