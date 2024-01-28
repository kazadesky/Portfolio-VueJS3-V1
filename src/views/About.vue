<template>
    <main class="overflow-x-hidden h-[100vh] lg:px-10 max-sm:px-3">
        <h1 class="lg:text-2xl lg:mt-[4.5rem] max-sm:mt-[4rem] lg:mb-5 max-sm:mb-4 uppercase font-bold">About <span
                class="text-greenVue">Me :</span></h1>
        <div class="lg:grid lg:grid-cols-3 max-sm:flex max-sm:flex-col max-sm:gap-y-4 lg:gap-x-10">
            <div class="lg:col-span-1 shadow-md">
                <img src="/src/assets/img/profil.jpg" alt="Profil Img"
                    class="rounded-md drop-shadow-md grayscale transition duration-300 hover:grayscale-0">
            </div>
            <div
                class="lg:col-span-2 max-sm:col-span-1 bg-slate-100 max-sm:min-h-max rounded-md shadow-md lg:p-7 max-sm:p-4 max-sm:text-sm text-justify lg:min-h-full max-sm:h-max">
                <p class="lg:text-lg lg:mb-4 max-sm:mb-3 font-semibold">
                    Biodata Singkat Tentang Saya:
                </p>
                <ul class="lg:text-lg lg:mb-4 max-sm:mb-3 list-disc ml-5">
                    <li><span class="lg:me-11">Nama</span><span>: Kaza Desky.</span></li>
                    <li><span class="lg:me-11">Focus</span><span>: Vue Js <span class="italic">(Sedang
                                Belajar).</span></span>
                    </li>
                    <li><span class="lg:me-9">Bidang</span><span>: Frontend Developer.</span></li>
                    <li><span class="lg:me-14">Skill</span>
                        <span> :
                            <p class="lg:ml-[105px] lg:-mt-[27px]">1. HTML.</p>
                            <p class="lg:ml-[105px]">2. CSS <span class="italic">(SASS, Bootstrap,
                                    TailwindCSS).</span></p>
                            <p class="lg:ml-[105px]">3. Javascript <span class="italic">(Vanilla).</span></p>
                            <p class="lg:ml-[105px]">4. PHP <span class="italic">(Laravel).</span></p>
                            <p class="lg:ml-[105px]">5. Vue Js <span class="italic">(Sedang Belajar).</span></p>
                        </span>
                    </li>
                    <li><span class="lg:me-11">Status</span>: Mahasiswa<span></span></li>
                    <li><span class="lg:me-[31px]">Kampus</span>: Universitas Budi Darma Medan.<span></span></li>
                    <li><span class="lg:me-[28px]">Fakultas</span>: Ilmu Komputer & Teknologi Informasi.<span></span></li>
                    <li><span class="lg:me-[32px]">Jurusan</span>: Teknik Informatika.<span></span></li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "About",
}
</script>