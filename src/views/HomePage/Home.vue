<template>
    <div class="relative h-screen w-full flex items-center justify-center">
      <Particles
        id="sparkles"
        class="absolute inset-0 z-10"
        :particlesInit="particlesInit"
        :options="particlesOptions"
      />
      <div class="select-none relative z-20 text-center text-white -mt-40 justify-center items-center flex flex-col">
        <h1 class = "text-6xl font-bold">Countdown to IHG24/25</h1>
        <br>
        <br>
        <CountDown />
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { loadSlim } from 'tsparticles-slim';
  import CountDown from './Countdown.vue';
  
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };
  
  const particlesOptions = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: {
          min: 0.1,
          max: 1,
        },
        animation: {
          enable: true,
          speed: 4,
          startValue: "random",
          destroy: "none",
        },
      },
      size: {
        value: {
          min: 1,
          max: 3,
        },
      },
      move: {
        enable: true,
        speed: {
          min: 0.1,
          max: 1,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 120,
      },
      shape: {
        type: "circle",
      },
    },
    detectRetina: true,
  };
  </script>
  
  <style scoped>
  h1 {
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
  }
  p {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  </style>