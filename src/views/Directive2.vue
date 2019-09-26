<template>
  <div id="dynamicexample"
       style="width:5000px;height:1000px">
    <h3>Scroll down inside this section ↓</h3>
    <p v-pin:[direction]="200">I am pinned onto the page at 200px to the left.</p>
  </div>
</template>

<script>
import Vue from 'vue';

Vue.directive('pin', {
  // eslint-disable-next-line no-unused-vars
  bind(el, binding, vnode) {
    // eslint-disable-next-line no-param-reassign
    el.style.position = 'fixed';
    const s = (binding.arg === 'left' ? 'left' : 'top');
    // eslint-disable-next-line no-param-reassign
    el.style[s] = `${binding.value}px`;
  },
});

export default {
  name: 'd2',
  components: {
  },
  data() {
    return {
      direction: 'top',
    };
  },
};
</script>
<style scoped>
</style>
