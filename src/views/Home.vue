<template>
  <div class="home">
    <todo-list />
    <new-todo />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList";
import NewTodo from "@/components/NewTodo";

export default {
  name: "home",
  components: {
    TodoList,
    NewTodo
  }
};
</script>

<style>
.home {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px 0;
}
</style>
