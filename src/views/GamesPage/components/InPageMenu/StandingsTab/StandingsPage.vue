<template>
    <div class= "flex justify-center items-center"><h1 class="font-bold">Group Stage</h1></div>
    <hr>
    <div class="flex justify-center items-center pt-5 pb-10"><GroupStage/></div>
    <div class= "flex justify-center items-center pb-5"><h1 class="font-bold">Knockout brackets</h1></div>
    <hr>
  <div class="flex justify-evenly items-center w-full pt-5">
    <h1>Semi-finals</h1>
    <h1>Finals</h1>
    <h1>Champion</h1>
  </div>
  <Brackets class ="pb-5"/>
  <div class= "flex justify-center items-center"><h1 class="font-bold">Third place playoff</h1></div>
  <Thirdplace />
  </template>
  
  <script>
  import GroupStage from './GroupStage.vue';
  import Brackets from './Brackets.vue';
  import Thirdplace from './ThirdPlace.vue';
  export default {
    name: "StandingsCard",
    components: {
      Brackets,
      Thirdplace,
      GroupStage,
    }
  };
  </script>