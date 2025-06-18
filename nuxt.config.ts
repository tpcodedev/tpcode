// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['vue-i18n']
  },
  vite: {
    plugins: [
      tailwindcss(),
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ]
  },
  app: {
    baseURL: '/tpcode/',
    // baseURL: process.env.BASE_URL || '/',
    head: {
      title: 'TP Code - Web & Mobile Development Freelancers',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Professional freelance web and mobile development services. Expert team specializing in modern web applications, mobile apps, and digital solutions.'
        },
        {
          name: 'keywords',
          content: 'web development, mobile development, freelance, app development, website design, react, vue, flutter, nodejs, freelancer'
        },
        { name: 'author', content: 'TP Code' },
        { property: 'og:title', content: 'TP Code - Web & Mobile Development Freelancers' },
        {
          property: 'og:description',
          content: 'Professional freelance web and mobile development services. Expert team specializing in modern web applications, mobile apps, and digital solutions.'
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'theme-color', content: '#000000' },
        { name: 'msapplication-TileColor', content: '#000000' }
      ]
    }
  },
})