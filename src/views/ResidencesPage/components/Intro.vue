<template>
    <div ref="homeHeader" class="relative w-screen flex justify-center">
      <div ref="background" class="absolute w-full h-[140vh] filter brightness-60">
        <img 
          src="https://osa.nus.edu.sg/wp-content/uploads/2024/04/TeamNUS-Header-L2_compressed-scaled.jpg"
          alt="background image"
          class="w-full h-full object-cover"
        />
      </div>
  
      <div class="Intro-container flex flex-col items-center justify-center mt-[35vh] relative">
        <div ref="introImage" class="relative w-[350px] h-[475px] filter brightness-70">
          <img 
            src="https://nus.edu.sg/osa/images/default-source/kent-ridge-hall/open-day-2022/random-4.jpg?sfvrsn=68b8e595_2"
            alt="intro image"
            class="w-full h-full object-cover object-top"
          />
        </div>
        <h1 class="text-white text-[7vw] z-3 text-center whitespace-nowrap">Our halls</h1>
      </div>
    </div>
  </template>
  

  <script setup>
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger);
  
  const background = ref(null);
  const introImage = ref(null);
  const homeHeader = ref(null);
  
  onMounted(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=200px",
      },
    });
  
    timeline
      .from(background.value, { clipPath: 'inset(15%)' })
      .to(introImage.value, { height: "200px" }, 0);
  });
  </script>
  
<style scoped>


</style>