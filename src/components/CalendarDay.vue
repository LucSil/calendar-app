<template>
  <div class="day">
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

export default {
  name: "CalendarDay",
  components: { CalendarEvent },
  props: ["day"],
};
</script>

<style></style>
