/* eslint-disable vue/require-v-for-key */

<template>
  <div id="app">
    <textarea v-model="templateText"
              rows="7"></textarea>
    <div v-if="typeof result === 'object'">
      <label>render:</label>
      <pre><code>{{ result.render }}</code></pre>
      <label>staticRenderFns:</label>
      // eslint-disable-next-line vue/require-v-for-key
      // eslint-disable-next-line vue/require-v-for-key
      <pre v-for="(fn, index) in result.staticRenderFns"
           v-bind:key="index"><code>_m({{ index }}): {{ fn }}</code></pre>
      <pre v-if="!result.staticRenderFns.length"><code>{{ result.staticRenderFns }}</code></pre>
    </div>
    <div v-else>
      <label>Compilation Error:</label>
      <pre><code>{{ result }}</code></pre>
    </div>
  </div>

</template>


<script>
import Vue from 'vue';

// eslint-disable-next-line func-names
// console.error = function (error) {
//   throw new Error(error);
// };
export default {
  name: 'r3',
  data() {
    return {
      templateText: `<div>
  <header>
    <h1>I'm a template!</h1>
  </header>
  <p v-if="message">{{ message }}</p>
  <p v-else>No message.</p>
</div>`,
    };
  },
  computed: {
    result() {
      if (!this.templateText) {
        return 'Enter a valid template above';
      }

      try {
        // eslint-disable-next-line vars-on-top
        const result = Vue.compile(this.templateText.replace(/\s{2,}/g, ''));

        return {
          render: this.formatFunction(result.render),
          staticRenderFns: result.staticRenderFns.map(this.formatFunction),
        };
      } catch (error) {
        return error.message;
      }
    },
  },

  methods: {
    formatFunction(fn) {
      return fn.toString().replace(/(\{\n)(\S)/, '$1  $2');
    },
  },

};

</script>

<style scoped>
</style>
