<template>

  <div id="example-3">
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
          rel="stylesheet"
          type="text/css">
    <button @click="show = !show">
      Toggle render
    </button>
    <transition name="custom-classes-transition"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'tran5',
  components: {
  },
  //   el: '#demo',

  data() {
    return {
      show: true,
    };
  },
};
</script>
