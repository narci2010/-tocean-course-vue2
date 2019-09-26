<template>
  <div id="demo7">
    <transition>
      <button v-bind:key="docState"
              @click="clickMe"
              mode="out-in"
              name="fade">
        {{ buttonMessage }}
      </button>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'tran7',
  components: {
  },
  methods: {
    clickMe() {
      //  this.show = !this.show;
      //  const i = Math.floor(3 * Math.random());
      //  console.log(i);
      //  this.docState = this.states[i];
      //  this.index = this.index + 1;
      //  this.index = this.index % 3;
      // eslint-disable-next-line no-plusplus
      this.docState = this.states[this.index++ % 3];
    },
  },
  computed: {
    buttonMessage() {
      switch (this.docState) {
        case 'saved': return 'Edit';
        case 'edited': return 'Save';
        case 'editing': return 'Cancel';
        default: return 'Other';
      }
    },
  },
  data() {
    return {
      show: true,
      docState: 'saved',
      states: ['saved', 'edited', 'editing'],
      index: 0,
    };
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
