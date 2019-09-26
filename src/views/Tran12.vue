<template>
  <div id="example-8">
    <input v-model.number="firstNumber"
           type="number"
           step="20"> +
    <input v-model.number="secondNumber"
           type="number"
           step="20"> =
    {{ result }}
    <p>
      <animated-integer v-bind:value="firstNumber"></animated-integer> +
      <animated-integer v-bind:value="secondNumber"></animated-integer> =
      <animated-integer v-bind:value="result"></animated-integer>
    </p>
  </div>
</template>

<script>
import Vue from 'vue';
import TWEEN from 'tween';
// 这种复杂的补间动画逻辑可以被复用
// 任何整数都可以执行动画
// 组件化使我们的界面十分清晰
// 可以支持更多更复杂的动态过渡
// 策略。
Vue.component('animated-integer', {
  template: '<span>{{ tweeningValue }}</span>',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      tweeningValue: 0,
    };
  },
  watch: {
    value(newValue, oldValue) {
      this.tween(oldValue, newValue);
    },
  },
  mounted() {
    this.tween(0, this.value);
  },
  methods: {
    tween(startValue, endValue) {
      const vm = this;
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }

      new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 500)
        // eslint-disable-next-line func-names
        .onUpdate(function () {
          vm.tweeningValue = this.tweeningValue.toFixed(0);
        })
        .start();

      animate();
    },
  },
});

// 所有的复杂度都已经从 Vue 的主实例中移除！
export default {
  name: 'tran18',
  components: {

  },

  data() {
    return {
      firstNumber: 20,
      secondNumber: 40,
    };
  },
  computed: {
    result() {
      return this.firstNumber + this.secondNumber;
    },
  },
};
</script>

<style scoped>
</style>
