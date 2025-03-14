<template>
  <div>
    <FullCalendar :options="calendarOptions" />
    <dialog
      id="eventModal"
      class="modal"
      ref="modalDialog"
      @close="handleDialogClose"
    >
      <div class="modal-box">
        <p class="py-4">Event Date: {{ modalData.date }}</p>
        <ModalContent :date="selectedDate" />
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick} from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import ModalContent from "./ModalContent.vue";

// temp stand in dates to replace with firestore query in future
function fetch() {
  return [
    { id: "match_001", date: "01-03-2025", start_time: "10:00", end_time: "12:00" },
    { id: "match_002", date: "15-03-2025", start_time: "12:00", end_time: "14:00" },
    { id: "match_003", date: "14-03-2025", start_time: "10:00", end_time: "23:59" },
  ];
}

const modalData = ref({
  date: "",
});

const modalDialog = ref(null);

const openModal = () => {
  if (modalDialog.value) {
    modalDialog.value.showModal();
  }
};

var selectedDate = null;

const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: "dayGridMonth",
  events: [],
  // Set the modal data and open the modal on click
  eventClick: function (info) {
    const temp = info.event.startStr.split("-").reverse().join("-"); // reformat data in dd-mm-yyyy format
    modalData.value.date = temp; // Display the date in the modal
    selectedDate = temp; // Pass as prop to ModalContent
    openModal();
  },
  fixedWeekCount: false,
});

function checkLiveEvent() {
  const now = new Date();
  const today = now.toISOString().split("T")[0];
  const currentTime = now.toTimeString().slice(0, 5);

  // Check if there is a live event happening now
  const hasLiveEvent = calendarOptions.value.events.some(event =>  {
      console.log(event);
      return event.date === today &&
      event.start_time <= currentTime &&
      event.end_time >= currentTime;
  }
  );

  console.log(hasLiveEvent);

  // Add pulsing animation to today's date if there is a live event
  if (hasLiveEvent) {
    console.log(document.querySelector(".fc-day-today"));
    document.querySelector(".fc-day-today").classList.add("pulsing");
  }
}

// fetch events from firestore
async function fetchEvents() {
  try {
    const data = await fetch(); // replace with firestore query in future
    // convert to yyyy-mm-dd ISO format and set display to background
    const formattedDates = data.reduce((curr, event) => {
      curr.push({
        date: event.date.split("-").reverse().join("-"),
        display: "background",
        start_time: event.start_time,
        end_time: event.end_time,
      });
      return curr;
    }, []);
    calendarOptions.value.events = formattedDates;

    // check for live events
    await nextTick(); // allows calendar to fully render before checking
    checkLiveEvent();

  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

// Call fetchEvents when the component mounts
onMounted(() => {
  fetchEvents();
});

// Uncheck all radio inputs when the modal is closed
const handleDialogClose = () => {
  document.querySelectorAll('input[name="my-accordion-3"]').forEach((input) => {
    input.checked = false;
  });
};
</script>

<style>
 
 @keyframes pulse {
   0% { box-shadow: 0 0 5px #ff9800; }
   50% { box-shadow: 0 0 15px #ff9800; }
   100% { box-shadow: 0 0 5px #ff9800; }
 }
 
 .fc-day-today {
   position: relative;
   font-weight: bold;
 }

 /* add pulsing animation if there is an ongoing match */

 .pulsing::after {
  content: "  ● LIVE";
  color: red;
   position: absolute;
   border: 1px solid #ff9800;
   top: 0; left: 0; right: 0; bottom: 0;
   animation: pulse 1.5s infinite;
 }
 </style>