<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-gradient">
            TP Code
          </NuxtLink>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#services" class="nav-link">{{ t('nav.services') }}</a>
          <a href="#about" class="nav-link">{{ t('nav.about') }}</a>
          <a href="#contact" class="nav-link">{{ t('nav.contact') }}</a>
        </div>
        
        <!-- Language switcher -->
        <div class="flex items-center space-x-4">
          <LanguageSwitcher />
          
          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Bars3Icon v-if="!isMobileMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
          <div class="flex flex-col space-y-4">
            <a href="#services" @click="closeMobileMenu" class="nav-link-mobile">{{ t('nav.services') }}</a>
            <a href="#about" @click="closeMobileMenu" class="nav-link-mobile">{{ t('nav.about') }}</a>
            <a href="#contact" @click="closeMobileMenu" class="nav-link-mobile">{{ t('nav.contact') }}</a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      isMobileMenuOpen.value = false
    }
  })
})
</script>

<style scoped>

</style>