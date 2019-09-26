<template>
  <div id="example-1">
    <button @click="show = !show">
      Toggle render
    </button>
    <transition name="slide-fade"
                v-on:before-enter="beforeEnter">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'tran2',
  components: {
  },
  //   el: '#demo',
  methods: {
    beforeEnter(el) {
      console.log(`beforeEnter:${el}`);
    },
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
