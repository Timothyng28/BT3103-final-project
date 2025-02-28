<template>
    <main class="w-screen">
      <Intro />
    </main>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import Intro from './components/Intro.vue'
  
  onMounted(async () => {
    const LocomotiveScroll = (await import('locomotive-scroll')).default
    new LocomotiveScroll()
  })
  </script>
  