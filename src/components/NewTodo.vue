<template>
  <form @submit="addTodo" autocomplete="off">
    <div class="form-field">
      <label for="todo">Form</label>
      <input id="todo" type="text" v-model="todo" placeholder="Enter todo name..." />
    </div>

    <div class="form-field single">
      <label for="done">Done?</label>
      <input id="done" type="checkbox" v-model="done" />
    </div>
    <button type="button" @click="addTodo">Add</button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      todo: "",
      done: false
    };
  },
  computed: {
    ...mapGetters(["todos"])
  },
  methods: {
    ...mapActions(["setTodoList"]),
    addTodo() {
      event.preventDefault();
      if (this.todo) {
        this.setTodoList([
          ...this.todos,
            {
              text: this.todo,
              done: this.done
            }
        ]);
        this.todo = "";
        this.done = false;
      }
    }
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  min-width: 300px;
  transition: all 0.2s;
}

form .form-field {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

form .form-field.single {
  flex-direction: row;
}

form .form-field label {
  margin-right: 8px;
}

form input[type="text"] {
  padding: 8px 12px;
  min-width: 250px;
  margin: 20px 0;
}

form button {
  padding: 8px 12px;
  margin-top: 20px;
  background: #20262e;
  color: #fff;
  border: none;
  cursor: pointer;
  outline: none;
}

form button:active {
  background: #000;
}
</style>