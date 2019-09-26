
<template>
  <smartlist :items="items">
    <tr isOrdered=true>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
  </smartlist>
</template>
<script>
import Vue from 'vue';

const EmptyList = { /* ... */ };
const TableList = { /* ... */
  template: '#t',
  directives:
  {
    name: 'items',
    value: '2',
    expression: '1 + 1',
    arg: 'foo',
    modifiers: {
      bar: true,
    },
  },

  attrs: {
    id: 'h1',

  },
};
const OrderedList = { /* ... */ };
const UnorderedList = { /* ... */ };

Vue.component('smartlist', {
  functional: true,
  props: {
    items: {
      type: Array,
      required: true,
    },
    isOrdered: Boolean,
  },
  render(createElement, context) {
    // eslint-disable-next-line no-unused-vars
    function appropriateListComponent() {
      const { items } = context.props;
      //  console.log(items);
      //  items = JSON.parse(items);
      //  console.log(items);
      if (items.length === 0) return EmptyList;
      if (typeof items[0] === 'number') return TableList;
      if (context.props.isOrdered) return OrderedList;

      return UnorderedList;
    }
    //     console.log(context.data);
    //     console.log(context.children);
    console.log(appropriateListComponent());
    return createElement(
      'table',
      context.data,
      context.children,
    );
  },
});
export default {
  name: 'r3',
  data() {
    return {
      tag: 'h1',
      items: [1, 2, 3],
    };
  },

};
</script>
<style scoped>
</style>
