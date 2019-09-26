<template>
  <div id="example-7">
    <input v-model="colorQuery"
           v-on:keyup.enter="updateColor"
           placeholder="Enter a color">
    <button v-on:click="updateColor">Update</button>
    <p>Preview:</p>
    <span v-bind:style="{ backgroundColor: tweenedCSSColor }"
          class="example-7-color-preview"></span>
    <p>{{ tweenedCSSColor }}</p>
  </div>
</template>

<script>
import Color from 'color-js';
import TWEEN from 'tween';

// const Color = require('color-js/color');
console.log(Color);
console.log(TWEEN.Tween);

export default {
  name: 'tran16',
  components: {

  },
  created() {
    this.tweenedColor = Object.assign({}, this.color);
  },
  watch: {
    color() {
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }

      new TWEEN.Tween(this.tweenedColor)
        .to(this.color, 750)
        .start();

      animate();
    },
  },
  computed: {
    tweenedCSSColor() {
      return new Color({
        red: this.tweenedColor.red,
        green: this.tweenedColor.green,
        blue: this.tweenedColor.blue,
        alpha: this.tweenedColor.alpha,
      }).toCSS();
      //  return 'a';
    },
  },
  methods: {
    updateColor() {
      this.color = new Color(this.colorQuery).toRGB();
      this.colorQuery = '';
    },
    //     test() {
    //       console.log(net);
    //       console.log(net.brehaut);
    //       // eslint-disable-next-line no-restricted-syntax
    //       for (const key in net) {
    //         if (key) { console.log(key + net[key]); }
    //       }
    //     },
  },
  data() {
    return {
      colorQuery: '',
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1,
      },
      tweenedColor: {},
    };
  },
};
</script>

<style scoped>
.example-7-color-preview {
  display: inline-block;
  width: 50px;
  height: 50px;
}
</style>
