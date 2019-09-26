<template>
  <div id="app3">
    <svg width="200"
         height="200">
      <polygon :points="points"></polygon>
      <circle cx="100"
              cy="100"
              r="90"></circle>
    </svg>
    <label>Sides: {{ sides }}</label>
    <input type="range"
           min="3"
           max="500"
           v-model.number="sides">
    <label>Minimum Radius: {{ minRadius }}%</label>
    <input type="range"
           min="0"
           max="90"
           v-model.number="minRadius">
    <label>Update Interval: {{ updateInterval }} milliseconds</label>
    <input type="range"
           min="10"
           max="2000"
           v-model.number="updateInterval">
  </div>
</template>

<script>

import { TweenLite } from 'gsap/TweenMax';

function valueToPoint(value, index, total) {
  const x = 0;
  const y = -value * 0.9;
  const angle = Math.PI * 2 / total * index;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const tx = x * cos - y * sin + 100;
  const ty = x * sin + y * cos + 100;
  return { x: tx, y: ty };
}

function generatePoints(stats) {
  const total = stats.length;
  return stats.map((stat, index) => {
    const point = valueToPoint(stat, index, total);
    return `${point.x},${point.y}`;
  }).join(' ');
}


export default {
  name: 'tran17',
  components: {

  },
  watch: {
    sides(newSides, oldSides) {
      const sidesDifference = newSides - oldSides;
      if (sidesDifference > 0) {
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i <= sidesDifference; i++) {
          this.stats.push(this.newRandomValue());
        }
      } else {
        const absoluteSidesDifference = Math.abs(sidesDifference);
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i <= absoluteSidesDifference; i++) {
          this.stats.shift();
        }
      }
    },
    stats(newStats) {
      TweenLite.to(
        this.$data,
        this.updateInterval / 1000,
        { points: generatePoints(newStats) },
      );
    },
    updateInterval() {
      this.resetInterval();
    },
  },
  mounted() {
    this.resetInterval();
  },
  methods: {
    randomizeStats() {
      const vm = this;
      this.stats = this.stats.map(() => vm.newRandomValue());
    },
    newRandomValue() {
      return Math.ceil(this.minRadius + Math.random() * (100 - this.minRadius));
    },
    resetInterval() {
      const vm = this;
      clearInterval(this.interval);
      this.randomizeStats();
      this.interval = setInterval(() => {
        vm.randomizeStats();
      }, this.updateInterval);
    },
  },
  data() {
    const defaultSides = 10;
    // eslint-disable-next-line prefer-spread
    const stats = Array.apply(null, { length: defaultSides })
      .map(() => 100);
    return {
      stats,
      points: generatePoints(stats),
      sides: defaultSides,
      minRadius: 50,
      interval: null,
      updateInterval: 500,
    };
  },
};
</script>

<style scoped>
svg {
  display: block;
}
polygon {
  fill: #41b883;
}
circle {
  fill: transparent;
  stroke: #35495e;
}
input[type="range"] {
  display: block;
  width: 100%;
  margin-bottom: 15px;
}
</style>
