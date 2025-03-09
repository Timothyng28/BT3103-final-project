<template>
  <div v-if="selectedSchedule">
    {{props.date}}
    <div v-for="(event, index) in selectedSchedule.events"
        :key="index"
        class="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div class="collapse-title font-semibold">
          {{ event.title }}
        </div>
        <div class="collapse-content text-sm">
          {{ event.description }}
        </div>
      </div>
  </div>
  <div v-else>
    <div class="collapse collapse-arrow border-base-300 bg-base-100 border border-base-300 border">
      <div class="collapse-title font-semibold">No events scheduled for this day</div>
    </div>
  </div>
</template>

<script setup>

// Takes in date from Calendar Component
const props = defineProps({
  date: {
    type: String,
    required: true,
  }
});

// Hard coded in for now
const schedules = [
  {
    date: "2025-03-01",
    events: [
      {
        time: "10:00",
        title: "Tennis Court 1",
        description: "TH vs EH Male Tennis (Finals)",
      },
      {
        time: "11:00",
        title: "Field 1",
        description: "EH vs RH Male Football (Group Stage)",
      },
      {
        time: "12:00",
        title: "MPSH 1",
        description: "KR vs SH Female Badminton (Semi-Finals)",
      },
    ],
  },
  {
    date: '2025-03-15',
    events: [
      {
        time: "10:00",
        title: "Tennis Court 2",
        description: "TH vs EH Female Tennis (Finals)",
      },
      {
        time: "11:00",
        title: "Field 2",
        description: "EH vs RH Female Football (Group Stage)",
      },
      {
        time: "12:00",
        title: "MPSH 2",
        description: "KR vs SH Male Badminton (Semi-Finals)",
      },
    ],
  },
];

// Find the schedule that matches the provided prop date
const selectedSchedule = schedules.find(
  (schedule) => schedule.date === props.date
);

</script>
