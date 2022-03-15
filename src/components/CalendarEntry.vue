<template>
  <div id="calendar-entry">
    <p
      v-show="error"
      class="text-red-600 text-lg bg-white py-1 border-[1px] mb-1 border-red-600 text-center font-bold rounded-md transition-all"
    >
      You must type something first !
    </p>
    <div class="bg-white px-10 py-5 rounded-md border-2 mt-2 border-green-400">
      <input
        type="text"
        class="outline-none border-b-2 focus:border-green-400 my-2 transition-all"
        placeholder="New Event"
        required
        v-model="inputEntry"
      />
      <p class="text-green-400">
        Day of event: <span>{{ titleOfActiveDay }}</span>
      </p>
      <button
        @click="submitEvent(inputEntry)"
        class="text-sm text-green-400 border-2 mt-4 border-green-400 px-3 py-1 rounded-sm"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  name: "CalendarEntry",
  data() {
    return {
      inputEntry: "",
      error: false,
    };
  },
  methods: {
    submitEvent: function (eventDetails) {
      if (eventDetails == "") {
        return (this.error = true);
      }
      store.submitEvent(eventDetails);
      this.inputEntry = "";
      this.error = false;
    },
  },
  computed: {
    titleOfActiveDay() {
      return store.getActiveDay().fullTitle;
    },
  },
};
</script>

<style></style>
