<template>
    <main class="w-screen">
      <Intro />
      <Description />
    </main>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import Intro from './components/Intro.vue'
  import Description from './components/Description.vue';
  
  onMounted(async () => {
    const LocomotiveScroll = (await import('locomotive-scroll')).default
    new LocomotiveScroll()
  })
  </script>
  