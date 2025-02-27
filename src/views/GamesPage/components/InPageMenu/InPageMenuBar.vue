<template>
    <div class="tabs tabs-box">
      <input type="radio" name="my_tabs_5" class="tab" aria-label="Fixtures" checked/>
      <FixturesPage class = "tab-content bg-base-100 border-base-300 p-6"/>
    
      <input type="radio" name="my_tabs_5" class="tab" aria-label="Results"/>
      <div class="tab-content bg-base-100 border-base-300 p-6">Results</div>
    
      <input type="radio" name="my_tabs_5" class="tab" aria-label="Standings" />
      <div class="tab-content bg-base-100 border-base-300 p-6">
      <StandingsPage />
      </div>
    </div>
    </template>
    
    <script>
    import FixturesPage from './FixturesTab/FixturesPage.vue';
    import StandingsPage from './StandingsTab/StandingsPage.vue';
    
    export default {
      name: 'InPageMenuBar',
      components: {
        FixturesPage,
        StandingsPage,
      }
    }
    </script>