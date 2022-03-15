<template>
  <div id="calendar-week" class="flex">
    <CalendarDay v-for="day in sharedState.data" :key="day.id" :day="day" />
  </div>
</template>

<script>
import { store } from "../store.js";
import CalendarDay from "./CalendarDay.vue";

export default {
  name: "CalendarWeek",
  components: { CalendarDay },
  data() {
    return {
      sharedState: store.state,
    };
  },
};
</script>

<style></style>
