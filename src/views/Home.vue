<template>
    <main class="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
    </main>
</template>

<script>
import HeroSection from '../components/home/HeroSection.vue'
import AboutSection from '../components/home/AboutSection.vue'
import ProjectSection from '../components/home/ProjectSection.vue'
import ContactSection from '../components/home/ContactSection.vue'

export default {
    name: 'Home',
    components: {
        HeroSection,
        AboutSection,
        ProjectSection,
        ContactSection,
    }
}
</script>