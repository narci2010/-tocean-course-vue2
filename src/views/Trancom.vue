<template>
  <div>
    <input type="radio"
           v-model="view"
           value="v-a">A <input type="radio"
           v-model="view"
           value="v-b">B
    <transition name="component-fade"
                mode="out-in">
      <component v-bind:is="view"></component>
    </transition>
  </div>
</template>

<script>


export default {
  name: 'tran8',
  components: {
    'v-a': {
      template: '<div>Component A</div>',
    },
    'v-b': {
      template: '<div>Component B</div>',
    },
  },

  data() {
    return {
      view: 'v-a',
    };
  },
};
</script>
<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
