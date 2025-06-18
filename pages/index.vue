<template>
  <div>
    <!-- SEO Meta Tags -->
    <Head>
      <Title>{{ t('meta.title') }}</Title>
      <Meta name="description" :content="t('meta.description')" />
      <Meta name="keywords" content="desenvolvimento web, desenvolvimento mobile, freelance, aplicativos, sites, react, vue, flutter, nodejs, freelancer, web development, mobile development" />
      <Meta name="author" content="TP Code" />
      <Meta property="og:title" :content="t('meta.title')" />
      <Meta property="og:description" :content="t('meta.description')" />
      <Meta property="og:type" content="website" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Link rel="canonical" href="https://tpcode.pro" />
    </Head>

    <Header />
    
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>

    <footer class="bg-gray-50 py-8 text-center text-gray-600">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <p class="mb-4 md:mb-0">{{ t('footer.copyright') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>
