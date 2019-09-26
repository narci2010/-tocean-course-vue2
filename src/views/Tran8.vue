<template>
  <div id="dynamic-fade-demo"
       class="demo">
    Fade In: <input type="range"
           v-model="fadeInDuration"
           min="0"
           v-bind:max="maxFadeDuration">
    Fade Out: <input type="range"
           v-model="fadeOutDuration"
           min="0"
           v-bind:max="maxFadeDuration">
    <transition v-bind:css="false"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:leave="leave">
      <p v-if="show">hello</p>
    </transition>
    <button v-if="stop"
            v-on:click="stop = false; show = false">Start animating</button>
    <button v-else
            v-on:click="stop = true">Stop it!</button>
  </div>
</template>

<script>
import Velocity from 'velocity-animate';

export default {
  name: 'tran13',
  components: {

  },
  mounted() {
    this.show = false;
  },
  methods: {
    beforeEnter(el) {
      // eslint-disable-next-line no-param-reassign
      el.style.opacity = 0;
    },
    enter(el, done) {
      const vm = this;
      Velocity(el,
        { opacity: 1 },
        {
          duration: this.fadeInDuration,
          complete() {
            done();
            if (!vm.stop) vm.show = false;
          },
        });
    },
    leave(el, done) {
      const vm = this;
      Velocity(el,
        { opacity: 0 },
        {
          duration: this.fadeOutDuration,
          complete() {
            done();
            vm.show = true;
          },
        });
    },
  },
  data() {
    return {
      show: true,
      fadeInDuration: 1000,
      fadeOutDuration: 1000,
      maxFadeDuration: 1500,
      stop: true,
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
