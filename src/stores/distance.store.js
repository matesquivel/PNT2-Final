import { defineStore } from "pinia";

export const useDistanceStore = defineStore("distance", {
  state: () => ({
    kilometers: 0,
  }),

  getters: {
    meters(state) {
      const value = Number(state.kilometers) * 1000;
      return value.toFixed(2);
    },

    miles(state) {
      const value = Number(state.kilometers) * 0.621371;
      return value.toFixed(4);
    },

    textColor(state) {
      const km = Number(state.kilometers);

      if (km <= 0) return "blue";
      if (km > 0 && km < 5) return "magenta";
      return "red";
    },
  },

  actions: {
    setKilometers(value) {
      const n = Number(value);
      this.kilometers = Number.isFinite(n) ? n : 0;
    },
  },
});
