<template>
    <div ref="container" class="relative text-white mt-20 p-[10%]">
      <!-- Residence description section -->
      <div class="flex h-[700px] justify-between gap-[5%]">
        <!-- Pinned image container -->
        <div ref="imageContainer" class="relative h-full w-[40%] pt-20 z-50">
          <img
            ref="pinnedImage"
            :src="residences[selectedResidence].img"
            alt="residence image"
            class="w-[400px] h-auto object-cover"
          />
        </div>
        <!-- Left text column -->
        <div class="flex h-full w-[10%] text-[1.6vw]">
            <div>
          <h1 class="font-bold">
            The Reigning Champions:
          </h1>
          <br>
          <h2>Eusoff</h2>
        </div>
        </div>
        <!-- Right text column -->
        <div class="flex h-full w-[30%] items-end text-[1vw]">
          <h1 class = "text-2xl">
            Eusoff Hall emerged victorious at the Inter-Hall Games (IHG), clinching the championship title in a thrilling finale that showcased their athletic dominance and unmatched team spirit.

With standout performances in basketball, volleyball, and a decisive win in the football final, Eusoff secured crucial points to edge out fierce competitors like Kent Ridge Hall and Temasek Hall.
          </h1>
        </div>
      </div>
    
      <!-- residence list section -->
      <div class="flex flex-col relative mt-[200px]">
        <div
          v-for="(residence, index) in residences"
          :key="index"
          @mouseover="selectedResidence = index"
          class="w-full text-white uppercase text-[3vw] border-b border-white flex justify-end z-1"
        >
          <h2 class="mt-[40px] mb-[20px] cursor-default">{{ residence.title }}</h2>
        </div>
      </div>
    </div>
  </template>
    
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)
  
  const residences = [
  { title: "Eusoff", img: "https://nus.edu.sg/osa/images/default-source/eusoff-hall/about-eusoff/eusoff-logo.png?sfvrsn=674cd811_2" },
  { title: "Temasek",    img: "https://nus.edu.sg/osa/images/default-source/temasek-hall/about-us/crest-(500px).png?sfvrsn=54f8a964_10" },
  { title: "Kent Ridge",       img: "http://nus.edu.sg/osa/images/default-source/kent-ridge-hall/about-kr/crest.png?sfvrsn=dc14d209_2" },
  { title: "KEVII",    img: "https://nus.edu.sg/osa/images/default-source/kevii-hall/about-kevii/logo.png?sfvrsn=ea8f2c47_6" },
  { title: "Sheares",       img: "https://nus.edu.sg/osa/images/librariesprovider7/default-album/sh-logo.png?sfvrsn=8f923101_0" },
  { title: "Raffles",    img: "https://nus.edu.sg/osa/images/librariesprovider6/default-album/rh-logo.png?sfvrsn=946bf7ca_0" },
]
  
  const selectedResidence = ref(0)
  const container = ref(null)
  const imageContainer = ref(null)
  const pinnedImage = ref(null)
  let resizeObserver;
  
  function createTrigger() {
    ScrollTrigger.create({
      trigger: imageContainer.value,
      pin: true,
      start: "top top",
      end: document.body.offsetHeight - window.innerHeight ,
      // markers: true,
    });
    ScrollTrigger.refresh();
  }
  
  onMounted(() => {
  setTimeout(() => {
    createTrigger();
  }, 2000); // wait for images to load cos vue kinda whack
});
  
  onBeforeUnmount(() => {
    if (resizeObserver) {
      resizeObserver.disconnect();
    }
  });
  </script>
 
  