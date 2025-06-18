<template>
  <section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          {{ $t('services.title') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ $t('services.subtitle') }}
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Web Development -->
        <div class="card p-8 text-center group">
          <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <CodeBracketIcon class="h-8 w-8 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            {{ $t('services.web.title') }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t('services.web.description') }}
          </p>
        </div>
        
        <!-- Mobile Development -->
        <div class="card p-8 text-center group">
          <div class="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <DevicePhoneMobileIcon class="h-8 w-8 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            {{ $t('services.mobile.title') }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t('services.mobile.description') }}
          </p>
        </div>
        
        <!-- Consulting -->
        <div class="card p-8 text-center group">
          <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <LightBulbIcon class="h-8 w-8 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            {{ $t('services.consulting.title') }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t('services.consulting.description') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CodeBracketIcon, DevicePhoneMobileIcon, LightBulbIcon } from '@heroicons/vue/24/outline'
</script>
