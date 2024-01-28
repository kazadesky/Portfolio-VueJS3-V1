<template>
    <section
        class="flex flex-col justify-center lg:items-center lg:h-[100vh] max-sm:min-h-[100vh] w-full lg:px-10 max-sm:px-3">
        <h1 class="text-center lg:text-3xl font-bold mb-5 uppercase">Contact</h1>
        <ContactItem />
    </section>
</template>

<script>
import ContactItem from '@/components/home/ContactItem.vue'
export default {
    name: 'Contact-Section',
    components: {
        ContactItem,
    }
}
</script>