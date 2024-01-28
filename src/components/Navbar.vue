<template>
    <header>
        <nav class="flex w-full h-[50px] items-center lg:px-10 max-sm:px-3 fixed top-0 z-10 shadow bg-slate-100">
            <router-link to="/" class="flex lg:gap-x-2 max-sm:gap-x-1 items-center">
                <img src="/public/favicon.ico" alt="Logo Vue" class="max-sm:w-[30px]">
                <span class="lg:text-xl max-sm:text-lg font-bold uppercase">Portfolio</span>
            </router-link>
            <ul class="lg:hidden max-sm:ml-auto">
                <li>
                    <a href="" @click.prevent="toggleMenu()" class="text-xl">
                        <i class="fa fa-bars"></i>
                    </a>
                </li>
            </ul>
            <ul class="lg:flex lg:ml-auto lg:gap-x-3 max-sm:transition-all max-sm:duration-300 max-sm:w-0 max-sm:absolute max-sm:-ml-[100%] [&.click]:ml-0 [&.click]:max-sm:w-full [&.click]:max-sm:bg-white [&.click]:max-sm:h-[100vh] [&.click]:max-sm:top-0 [&.click]:max-sm:left-0 max-sm:shadow-inner [&.click]:max-sm:p-3"
                :class="{ 'click': click }">
                <li class="mb-3 lg:hidden">
                    <a href="" @click.prevent="toggleMenu()" class="float-right text-xl mr-3">
                        <i class="fa fa-xmark"></i>
                    </a>
                </li>
                <li v-for="item in navItems" :key="item.title" class="max-sm:py-1">
                    <router-link :to="item.url" :class="{ active: isActive(item.url) }"
                        class="outline-none transition duration-300 hover:text-greenVue [&.active]:text-greenVue [&.active]:underline [&.active]:underline-offset-4 focus:text-greenVue">
                        {{ item.title }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            navItems: [
                { title: 'Home', url: '/' },
                { title: 'About', url: '/about' },
                { title: 'Project', url: '/project' },
                { title: 'Contact', url: '/contact' },
            ],
            click: false,
        };
    },
    methods: {
        isActive(url) {
            return this.$route.path === url;
        },
        toggleMenu() {
            this.click = !this.click;
        },
    },
};
</script>  