<template>
  <div class="content-todo-list">
    <div class="header-list">
      <label class="title">List</label>
      <infos />
    </div>
    <ol v-if="todos.length > 0">
      <li v-for="(todo,index) in todos" :key="index">
        <md-checkbox :name="index" v-model="todo.done">
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </md-checkbox>
        <md-button class="md-icon-button" @click="deleteItem(index)">
          <md-icon>close</md-icon>
          <md-tooltip md-direction="bottom">Delete</md-tooltip>
        </md-button>
      </li>
    </ol>
    <p v-else>Empty List.</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Infos from "@/components/Infos";
export default {
  name: "TodoList",
  components: {
    Infos
  },
  computed: {
    ...mapGetters(["todos"])
  },
  methods: {
    deleteItem(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style>
.content-todo-list {
  min-width: 300px;
  background: #fff;
  border-radius: 4px;
  padding: 16px 40px;
  transition: all 0.2s;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
}
.header-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-list label{
  font-size: 18px
}
ol {
  margin: 0;
  padding: 0;
}

li {
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

li label {
  cursor: pointer;
  width: 100%;
  padding: 3px 0;
  min-width: 133px;
}
li button{
  margin-top: 7px !important
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
  color: #fff;
  text-decoration: underline;
}

.md-checkbox.md-theme-default.md-checked .md-checkbox-container {
  background: green;
  border-color: green;
}

.done {
  text-decoration: line-through;
  color: #0000004d;
}
</style>