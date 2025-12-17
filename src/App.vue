<template>
  <div class="container">
    <h1>Convertidor de Distancia</h1>

    <div class="row">
      <label for="km">Kilómetros (km):</label>
      <input
        id="km"
        type="number"
        v-model.number="kilometersProxy"
        step="any"
      />
    </div>

    <p :style="{ color: textColor }">Metros (m): {{ meters }}</p>
    <p :style="{ color: textColor }">Millas (mi): {{ miles }}</p>

    <p>respuestas: 1:c,f 2:b 3:c 4:a 5:b</p>
  </div>
</template>

<script>
import { useDistanceStore } from "@/stores/distance.store";

export default {
  name: "App",

  data() {
    return {
      store: useDistanceStore(),
    };
  },

  computed: {
    kilometersProxy: {
      get() {
        return this.store.kilometers;
      },
      set(value) {
        this.store.setKilometers(value);
      },
    },

    meters() {
      return this.store.meters;
    },

    miles() {
      return this.store.miles;
    },

    textColor() {
      return this.store.textColor;
    },
  },
};
</script>

<style>
.container {
  max-width: 520px;
  margin: 60px auto;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 24px;
}

.row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

label {
  width: 140px;
}

input {
  width: 160px;
  padding: 6px 8px;
}
</style>
