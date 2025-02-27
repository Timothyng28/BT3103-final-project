<template>
    <div class="tab-content bg-base-100 border-base-300 p-6">
    <OngoingMatches />
    <br>
    <UpcomingMatches />
    </div>
  </template>
  
  <script>
  import OngoingMatches from './OngoingMatches.vue';
  import UpcomingMatches from './UpcomingMatches.vue';
  
  export default {
    name: 'FixturesPage',
    components: {
      OngoingMatches,
      UpcomingMatches,
    }
  }
  </script>