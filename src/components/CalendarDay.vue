<template>
  <div class="day cursor-pointer" @click="setActiveDay(day.id)">
    <h3>{{ day.abbvTitle }}</h3>
    <CalendarEvent
      v-for="(event, index) in day.events"
      :key="index"
      :event="event"
      :day="day"
    />
  </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent.vue";
import { store } from "../store.js";

export default {
  name: "CalendarDay",
  components: { CalendarEvent },
  props: ["day"],
  methods: {
    setActiveDay(dayId) {
      store.setActiveDay(dayId);
    },
  },
};
</script>

<style></style>
