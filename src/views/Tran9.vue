<template>
  <div id="animated-number-demo">
    <input v-model.number="number"
           type="number"
           step="20">
    <p>{{ animatedNumber }}</p>
  </div>
</template>

<script>
import { TweenLite } from 'gsap/TweenMax';

export default {
  name: 'tran15',
  components: {

  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    },
  },
  watch: {
    number(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    },
  },
  data() {
    return {
      number: 0,
      tweenedNumber: 0,
    };
  },
};
</script>
<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
