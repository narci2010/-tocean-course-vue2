
<template>
  <smartlist :items="items"
             :isOrdered="isOrdered">
    <li v-for="todo in todos"
        v-bind:key="todo">
      {{ todo }}
    </li>
  </smartlist>
</template>
<script>
import Vue from 'vue';

const EmptyList = { /* ... */ };
const TableList = { /* ... */
  template: `<ul>
  <li
    v-for="todo in filteredTodos"
    v-bind:key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>`,
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
      {
        template: '<ul><slot></slot></ul>',
      },
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
      todos: [1, 2, 3],
      isOrdered: true,
    };
  },

};
</script>
<style scoped>
</style>
