<template>
  <div id="flip-list-demo"
       class="demo">
    <button v-on:click="shuffle">Shuffle</button>
    <transition-group name="flip-list"
                      tag="ul">
      <li v-for="item in items"
          v-bind:key="item">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>

import _ from 'lodash';

export default {
  name: 'tran10',
  components: {

  },
  methods: {
    shuffle() {
      this.items = _.shuffle(this.items);
    },
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    };
  },
};
</script>
<style scoped>
.flip-list-move {
  transition: transform 1s;
}
</style>
