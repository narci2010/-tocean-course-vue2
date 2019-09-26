<template>
  <div id="hook-arguments-example"
       v-demo:foo.a.b="message"></div>
</template>

<script>
import Vue from 'vue';

Vue.directive('demo', {
  bind(el, binding, vnode) {
    const s = JSON.stringify;
    // eslint-disable-next-line no-param-reassign
    el.innerHTML = `name: ${s(binding.name)}<br>`
      + `value: ${s(binding.value)}<br>`
      + `expression: ${s(binding.expression)}<br>`
      + `argument: ${s(binding.arg)}<br>`
      + `modifiers: ${s(binding.modifiers)}<br>`
      + `vnode keys: ${Object.keys(vnode).join(', ')}`;
  },
});

export default {
  name: 'd1',
  components: {
  },

  data() {
    return {
      message: 'hello!',
    };
  },
};
</script>
<style scoped>
</style>
