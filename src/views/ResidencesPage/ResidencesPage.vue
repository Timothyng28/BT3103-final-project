<template>
    <br><br>
      <div class="flex flex-col flex-gap-10 items-start">
        <EusoffHall />
        <TemasekHall />
        <ShearesHall />
        <KentRidgeHall />
        <KE7Hall />
        <RafflesHall />
      </div>
    </template>
    
    <script>
    import ShearesHall from "./ResidenceCards/Hall/ShearesHall.vue";
    import KentRidgeHall from "./ResidenceCards/Hall/KentRidgeHall.vue";
    import EusoffHall from "./ResidenceCards/Hall/EusoffHall.vue";
    import TemasekHall from "./ResidenceCards/Hall/TemasekHall.vue";
    import RafflesHall from "./ResidenceCards/Hall/RafflesHall.vue";
    import KE7Hall from "./ResidenceCards/Hall/KE7Hall.vue";
    
    export default {
      name: "ResidencesPage",
      components: {
        ShearesHall,
        KentRidgeHall,
        EusoffHall,
        TemasekHall,
        RafflesHall,
        KE7Hall,
      },
    };
    </script>
    