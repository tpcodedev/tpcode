<template>
  <section class="relative min-h-screen flex items-center gradient-bg overflow-hidden" id="intro">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-10 float-animation"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-400 rounded-full opacity-10 float-animation animation-delay-200"></div>
    </div>
    
    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Main heading -->
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in sm:mt-6">
          <span class="text-gradient">{{ $t('hero.title') }}</span>
          <br>
          <span class="text-gray-800">{{ $t('hero.subtitle') }}</span>
        </h1>
        
        <!-- Description -->
        <p class="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
          {{ $t('hero.description') }}
        </p>
        
        <!-- Tech stack indicators -->
        <div class="mt-16 animate-fade-in animation-delay-400">
          <p class="text-sm text-gray-500 mb-6 uppercase tracking-wider font-semibold">
            {{ $t('hero.stack') }}
          </p>
          <div class="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div class="tech-badge">DotNet C#</div>
            <div class="tech-badge">Vue.js</div>
            <div class="tech-badge">Flutter</div>
            <div class="tech-badge">Node.js</div>
            <div class="tech-badge">Javascript</div>
            <div class="tech-badge">TypeScript</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#services">
        <ChevronDownIcon class="h-6 w-6 text-gray-400" />
      </a>
    </div>
  </section>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
  opacity: 0;
}
</style>
