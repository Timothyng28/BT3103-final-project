<template>
    <!--<Carousell/>-->
    <!-- hello -->
  <br>
  <br>
  <div class = "flex justify-evenly gap-30">
  <SideBar class = "w-1/4 h-100"/>
  <InPageMenuBar class = "w-200" />
  <Statsbar class = "h-100"/>
  </div>
  </template>
  
  <script>
  import InPageMenuBar from './components/InPageMenu/InPageMenuBar.vue'
  import SideBar from './components/SideBar.vue'
  import Statsbar from './components/Statsbar.vue';
  import Carousell from './components/Carousell.vue';
  
  export default {
    name: 'GamesPage',
    components: {
      InPageMenuBar,
      SideBar,
      Statsbar,
      Carousell
    }
  }
  
  // need to pass props to InPageMenuBar so that it knows which "sport" to display
  </script>