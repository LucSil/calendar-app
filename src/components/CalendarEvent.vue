<template>
  <div class="task">
    <div
      v-if="!event.edit"
      :style="getCol"
      class="text-stone-800 font-bold rounded-sm text-[11px] grid place-items-center py-1"
    >
      <span class="mx-4">{{ event.details }}</span>
      <div class="button-div">
        <button @click="editEvent(day.id, event.details)">✏</button>
        <button>❌</button>
      </div>
    </div>
    <div
      v-if="event.edit"
      :style="getCol"
      class="text-black font-bold rounded-sm text-[11px] grid place-items-center py-1"
    >
      <input
        type="text"
        v-model="newEventDetails"
        :placeholder="event.details"
        class="outline-none bg-transparent border-b-[1px] mx-2 border-slate-900"
      />
      <div class="button-div text-green-400">
        <button @click="updateEvent(day.id, event.details, newEventDetails)">
          ✔
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
export default {
  name: "CalendarEvent",
  props: ["event", "day"],
  data() {
    return {
      newEventDetails: "",
    };
  },
  methods: {
    editEvent(dayId, eventDetails) {
      store.editEvent(dayId, eventDetails);
    },
    updateEvent: function (dayId, originalEventDetails, updatedEventDetails) {
      if (updatedEventDetails == "") updatedEventDetails = originalEventDetails;
      store.updateEvent(dayId, originalEventDetails, updatedEventDetails);
      this.newEventDetails = "";
    },
  },
  computed: {
    getCol() {
      const colors = ["#FF9999", "#85D6FF", "#99FF99"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    },
  },
};
</script>
