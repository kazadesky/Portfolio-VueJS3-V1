<template>
    <form action="" method="POST" class="flex flex-col lg:w-[650px] max-sm:w-full items-center">
        <div :class="classComponent.class_1">
            <label :for="nama.for" :class="classComponent.class_2">{{ nama.plc }}</label>
            <input :type="nama.type" :name="nama.for" :id="nama.for"
                :class="[classComponent.class_3, classComponent.class_4]" :placeholder="nama.plc" required>
        </div>
        <div :class="classComponent.class_1">
            <label :for="email.for" :class="classComponent.class_2">{{ email.for }}</label>
            <input :type="email.type" :name="email.for" :id="email.for"
                :class="[classComponent.class_3, classComponent.class_4]" :placeholder="email.plc" required>
        </div>
        <div :class="classComponent.class_1">
            <label :for="comment.for" :class="classComponent.class_2">{{ comment.for }}</label>
            <textarea :name="comment.for" :id="comment.for" :class="[classComponent.class_3, classComponent.class_5]"
                cols="25" rows="6" :placeholder="comment.plc" required></textarea>
        </div>
        <div v-bind:class="classComponent.class_1">
            <button
                class="w-full h-12 bg-greenVue outline-none transition duration-300 hover:bg-hoverGreenVue focus:bg-hoverGreenVue text-white font-medium uppercase rounded-md max-sm:h-10 max-sm:text-sm">Kirim
                Comment</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'Contact-Item',
    data() {
        return {
            nama: { for: "nama", type: "text", plc: "Nama Lengkap" },
            email: { for: "email", type: "email", plc: "Example@gmail.com" },
            comment: { for: "comment", plc: "Read your comment here...." },
            classComponent: {
                class_1: "mb-3 capitalize w-full",
                class_2: "block mb-1 font-medium",
                class_3: "outline-none rounded-md border border-greenVue w-full focus:border-hoverGreenVue bg-slate-50/50",
                class_4: "flex items-center h-12 px-3 max-sm:text-sm",
                class_5: "p-3 max-sm:text-sm",
            },
        }
    },
}
</script>