<template>
  <div class="tab-content bg-base-100 border-base-300 p-6">
    <div class="filter-section mb-4">
      <button @click="toggleCalendar" class="btn btn-primary">
        Select Date
      </button>
      <div v-if="showCalendar" class="calendar-dropdown">
        <input type="date" v-model="selectedDate" @change="filterMatches" />
      </div>
    </div>
    <PastMatches :filterDate="selectedDate" />
  </div>
</template>

<script>
import PastMatches from './PastMatches.vue';

export default {
  name: 'ResultsPage',
  components: {
    PastMatches,
  },
  data() {
    return {
      showCalendar: false,
      selectedDate: null,
    };
  },
  methods: {
    toggleCalendar() {
      this.showCalendar = !this.showCalendar;
    },
    filterMatches() {
      console.log('Filtering matches for date:', this.selectedDate);
    },
  },
};
</script>

<style scoped>
.calendar-dropdown {
  margin-top: 10px;
}
</style>