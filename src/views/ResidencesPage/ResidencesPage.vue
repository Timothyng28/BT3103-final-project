<template>
    <main class="w-screen">
      <Intro />
      <Description />
      <Halls />
    </main>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import Intro from './components/Intro.vue'
  import Description from './components/Description.vue';
  import Halls from './components/Halls.vue';
  
  onMounted(async () => {
    const LocomotiveScroll = (await import('locomotive-scroll')).default
    new LocomotiveScroll()
  })
  </script>
  