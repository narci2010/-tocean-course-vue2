<template>
  <anchored-heading :level="2">Hello world original!</anchored-heading>
</template>

<script>
import Vue from 'vue';

Vue.component('anchored-heading', {
  render(createElement) {
    return createElement(
      `h${this.level}`, // 标签名称
      this.$slots.default, // 子节点数组
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});

export default {
  name: 'r1',

};
</script>
<style scoped>
</style>
