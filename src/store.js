import { reactive } from "vue";
import { seedData } from "./seed.js";

export const store = {
  state: {
    data: reactive(seedData),
  },
  getActiveDay: function () {
    return this.state.data.find((day) => day.active);
  },
  setActiveDay: function (dayId) {
    this.state.data.map((dayObj) => {
      dayObj.id == dayId ? (dayObj.active = true) : (dayObj.active = false);
    });
  },
};
