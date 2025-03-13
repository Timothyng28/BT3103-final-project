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
import { ref, onMounted } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import ModalContent from "./ModalContent.vue";

// temp stand in dates to replace with firestore query in future
function fetch() {
  return [
    { id: "match_001", date: "01-03-2025" },
    { id: "match_001", date: "15-03-2025" },
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

// fetch events from firestore
async function fetchEvents() {
  try {
    const data = await fetch(); // replace with firestore query in future
    // convert to yyyy-mm-dd ISO format and set display to background
    const formattedDates = data.reduce((curr, event) => {
      curr.push({
        date: event.date.split("-").reverse().join("-"),
        display: "background",
      });
      return curr;
    }, []);
    calendarOptions.value.events = formattedDates;
    // TODO: add checking logic for live events
    // await nextTick();
    // checkLiveEvent();
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
  border: 2px solid #ff9800;
}

*/ modify script to assign class if there is a game currently going on */

.pulsing::after {
  content: "  ● LIVE";
  color: red;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  animation: pulse 1.5s infinite;
}
</style>