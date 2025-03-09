<template>
  <div>
    <!-- Loop through each location group in the groupedEvents object -->
    <div
      v-for="(events, location) in groupedEvents"
      :key="location"
      class="collapse collapse-plus bg-base-100 border border-base-300"
    >
      <input type="radio" name="my-accordion-3" />
      <div class="collapse-title font-semibold">
        {{ location }}
      </div>
      <div class="collapse-content text-sm">
        <!-- Loop through each event in the current location group -->
        <div v-for="(event, idx) in events" :key="idx">
          {{ event.time }}: {{ event.description }} <!-- can replace with button to redirect to match page in future -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

// Takes in date from Calendar Component
const props = defineProps({
  date: {
    type: String,
    required: true,
  },
});

// Hard coded in for now retrieve data from firestore in future
const schedules = [
  {
    date: "01-03-2025",
    events: [
      {
        time: "10:00",
        location: "Tennis Court 1",
        description: "TH vs EH Male Tennis (Finals)",
      },
      {
        time: "11:00",
        location: "Field 1",
        description: "EH vs RH Male Football (Group Stage)",
      },
      {
        time: "12:00",
        location: "MPSH 1",
        description: "KR vs SH Female Badminton (Semi-Finals)",
      },
    ],
  },
  {
    date: "15-03-2025",
    events: [
      {
        time: "10:00",
        location: "Tennis Court 2",
        description: "TH vs EH Female Tennis (Finals)",
      },
      {
        time: "11:00",
        location: "Field 2",
        description: "EH vs RH Female Football (Group Stage)",
      },
      {
        time: "12:00",
        location: "MPSH 2",
        description: "KR vs SH Male Badminton (Semi-Finals)",
      },
      {
        time: "12:00",
        location: "UTSH 2",
        description: "KR vs KE Female Volleyball (Finals)",
      },
      {
        time: "09:00",
        location: "UTSH 2",
        description: "SH vs TH Female Volleyball (3rd Place Match)",
      },
    ],
  },
];

// Find the schedule that matches the provided prop date
const selectedSchedule = computed(() => {
  return schedules.find((schedule) => schedule.date === props.date);
});

// Group events by location using a computed property
const groupedEvents = computed(() => {
  // Placeholder of empty schedules until calendar has mounted and fetched data
  if (!selectedSchedule.value || !selectedSchedule.value.events) {
    return {};
  }
  const groups = selectedSchedule.value.events.reduce((curr, event) => {
    // If the location doesn't exist in the groups object, create an empty array
    if (!curr[event.location]) {
      curr[event.location] = [];
    }
    // Push the event into the array for the location
    curr[event.location].push(event);
    return curr;
  }, {});
  // Sort each group's events by time
  for (const location in groups) {
    groups[location].sort((a, b) => a.time.localeCompare(b.time));
  }
  return groups;
});
</script>
