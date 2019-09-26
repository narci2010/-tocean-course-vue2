<template>
  <div id="staggered-list-demo">
    <input v-model="query">
    <transition-group name="staggered-fade"
                      tag="ul"
                      v-bind:css="false"
                      v-on:before-enter="beforeEnter"
                      v-on:enter="enter"
                      v-on:leave="leave">
      <li v-for="(item, index) in computedList"
          v-bind:key="item.msg"
          v-bind:data-index="index">{{ item.msg }}</li>
    </transition-group>
  </div>
</template>

<script>
import Velocity from 'velocity-animate';

export default {
  name: 'tran12',
  components: {

  },
  computed: {
    computedList() {
      const vm = this;
      return this.list.filter(item => item.msg.toLowerCase()
        .indexOf(vm.query.toLowerCase()) !== -1);
    },
  },
  methods: {
    beforeEnter(el) {
      // eslint-disable-next-line no-param-reassign
      el.style.opacity = 0;
      // eslint-disable-next-line no-param-reassign
      el.style.height = 0;
    },
    enter(el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done },
        );
      }, delay);
    },
    leave(el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done },
        );
      }, delay);
    },
  },
  data() {
    return {
      query: '',
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' },
      ],
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
