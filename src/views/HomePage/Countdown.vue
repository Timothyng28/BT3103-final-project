<template>
    <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="{'--value':days}">{{days}}</span>
        </span>
        days
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="{'--value':hours}">{{hours}}</span>
        </span>
        hours
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="{'--value':minutes}">{{minutes}}</span>
        </span>
        min
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="{'--value':seconds}">{{seconds}}</span>
        </span>
        sec
      </div>
    </div>
    </template>
    
    <script>
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    
    export default {
      name: 'Countdown',
      setup() {
        // Target date for countdown get from firestore in future
        const targetDate = new Date('2025-05-01T00:00:00').getTime(); // can only be <= 99 days btw or the display breaks
    
        // Reactive state for time units
        const days = ref(0);
        const hours = ref(0);
        const minutes = ref(0);
        const seconds = ref(0);
    
        // Countdown logic
        const updateCountdown = () => {
          const now = new Date().getTime();
          const distance = targetDate - now;
    
          if (distance > 0) {
            days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
          } else {
            days.value = 0;
            hours.value = 0;
            minutes.value = 0;
            seconds.value = 0;
          }
        };
    
        let countdownInterval;
    
        onMounted(() => {
          updateCountdown();
          countdownInterval = setInterval(updateCountdown, 1000);
        });
    
        onBeforeUnmount(() => {
          clearInterval(countdownInterval);
        });
    
        return {
          days,
          hours,
          minutes,
          seconds
        };
      }
    };
    </script>