<template>
  <div id="calendar-entry" class="">
    <div class="bg-white px-10 py-5 rounded-md border-2 border-green-400">
      <input
        type="text"
        class="outline-none border-b-2 focus:border-green-400 my-2 transition-all"
        placeholder="New Event"
      />
      <p class="text-green-400">Day of event: <span>Monday</span></p>
      <button
        class="text-sm text-green-400 border-2 mt-4 border-green-400 px-3 py-1 rounded-sm"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarEntry",
  data() {
    return {};
  },
};
</script>

<style></style>
