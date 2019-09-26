<template>
  <div id="app-todo">
    <h1>My Todo App!</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/components/todo/TodoList.vue';

export default {
  components: {
    TodoList,
  },
};
</script>

<style lang="scss">
@import "@/components/todo/variables.scss";
</style>
