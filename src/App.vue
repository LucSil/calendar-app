<template>
  <div id="app" class="h-screen min-w-max bg-stone-600 grid place-items-center">
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>
import CalendarWeek from "./components/CalendarWeek.vue";
import CalendarEntry from "./components/CalendarEntry.vue";

export default {
  name: "App",
  components: { CalendarWeek, CalendarEntry },
};
</script>

<style></style>
