<template>
  <section id="about" class="py-20 gradient-bg">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {{ t('about.title') }}
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            {{ t('about.description') }}
          </p>
        </div>
        
        <!-- Stats -->
        <div class="grid sm:grid-cols-3 gap-8 text-center">
          <div class="bg-white rounded-xl p-8 shadow-lg">
            <div class="text-4xl font-bold text-gradient mb-2">15+</div>
            <p class="text-gray-600 font-medium">{{ t('about.experience') }}</p>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-lg">
            <div class="text-4xl font-bold text-gradient mb-2">10+</div>
            <p class="text-gray-600 font-medium">{{ t('about.projects') }}</p>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-lg">
            <div class="text-4xl font-bold text-gradient mb-2">15+</div>
            <p class="text-gray-600 font-medium">{{ t('about.clients') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>
