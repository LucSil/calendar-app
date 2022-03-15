<template>
  <div class="task">
    <div
      :style="getCol"
      class="text-stone-800 font-bold rounded-sm text-[11px] grid place-items-center py-1"
    >
      <span class="mx-4">{{ event.details }}</span>
      <div id="button-div">
        <button>✏</button>
        <button>❌</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarEvent",
  props: ["event", "day"],
  computed: {
    getCol() {
      const colors = ["#FF9999", "#85D6FF", "#99FF99"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    },
  },
};
</script>
