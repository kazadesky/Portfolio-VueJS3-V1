<template>
    <footer v-html="copyright"
        class="relative bottom-0 w-full overflow-x-hidden h-[45px] max-sm:h-[40px] bg-slate-100 shadow flex justify-center items-center max-sm:text-xs">
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            copyright: '<a href="" target="_blank" class="transition duration-300 outline-none hover:text-greenVue focus:text-greenVue me-1 font-medium">&copy; Kaza_Desky,</a> 2024. Vue Js 3.',
        }
    },
}
</script>