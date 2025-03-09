<template>
    <div>
      <FullCalendar :options="calendarOptions" />
  
      <dialog id="eventModal" class="modal" ref="modalDialog">
        <div class="modal-box">
          <h3 class="text-lg font-bold">{{ modalData.title }}</h3>
          <p class="py-4">Event Date: {{ modalData.date }}</p>
          <ModalContent :date="selectedDate"/>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import ModalContent from './ModalContent.vue'

const modalData = ref({
  title: '',
  date: ''
})
const modalDialog = ref(null)

const openModal = () => {
  if (modalDialog.value) {
    modalDialog.value.showModal() 
  }
}

var selectedDate = null;

const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  events: [
    { date: '2025-03-01', display: 'background' },
    { date: '2025-03-15', display: 'background' }
  ],
  eventClick: function(info) {
    // Set the modal data and open the modal
    modalData.value.title = info.event.title
    modalData.value.date = info.event.startStr
    selectedDate = info.event.startStr;
    openModal()
  },
  fixedWeekCount: false
})
</script>
