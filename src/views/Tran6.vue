<template>
  <div id="example-4">
    <button @click="show = !show">
      Toggle
    </button>
    <transition v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:leave="leave"
                v-bind:css="false">
      <p v-if="show">
        Demo
      </p>
    </transition>
  </div>
</template>
    <!--
Velocity 和 jQuery.animate 的工作方式类似，也是用来实现 JavaScript 动画的一个很棒的选择
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
-->

<script>
// @ is an alias to /src
// npm install velocity-animate
import Velocity from 'velocity-animate';

export default {
  name: 'tran6',
  components: {
  },
  //   el: '#demo',
  methods: {
    beforeEnter(el) {
      /* eslint-disable no-param-reassign */
      el.style.opacity = 0;
      el.style.transformOrigin = 'left';
    },
    enter(el, done) {
      /* eslint-disable no-undef */
      /* eslint-disable no-param-reassign */
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 });
      Velocity(el, { fontSize: '1em' }, { complete: done });
    },
    leave(el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 });
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 });
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0,
      }, { complete: done });
    },
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>
