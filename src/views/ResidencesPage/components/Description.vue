<template>
    <div class="description flex flex-col gap-4">
      <p
        v-for="(phrase, index) in phrases"
        :key="index"
        ref="textRefs"
        class="animated-text text-[3vw] relative m-0"
      >
        {{ phrase }}
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)
  
  const phrases = [
    "Bruh i actually dont know",
    "Can right some shit here i guess",
    "Uhhh our amazing athletes representing",
    "these AMAZING halls",
  ]
  
  
  const textRefs = ref([])
  
  onMounted(() => {
    textRefs.value.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: "0px bottom",
          end: "bottom+=250px bottom",
          // markers: true
        },
        opacity: 0,
        left: "-200px",
        ease: "power3.out"
      })
    })
  })
  </script>
<style scoped></style>
  
