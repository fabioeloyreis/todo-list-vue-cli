<template>
  <div class="infos">
    <md-badge :md-content="amoutTodos" class="md-primary">
      <md-button class="md-icon-button" @click="onDoneResetAll(true)">
        <md-icon>list</md-icon>
      </md-button>
      <md-tooltip md-direction="bottom">Reset</md-tooltip>
    </md-badge>
    <md-badge :md-content="amoutDoneTodos" class="md-second">
      <md-button class="md-icon-button" @click="onDoneResetAll()">
        <md-icon>check</md-icon>
      </md-button>
      <md-tooltip md-direction="bottom">Done all</md-tooltip>
    </md-badge>
    <md-button class="md-icon-button" @click="removeAll()">
      <md-icon>delete</md-icon>
      <md-tooltip md-direction="bottom">Delete all</md-tooltip>
    </md-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Infos",
  computed: {
    ...mapGetters(["todos"]),
    amoutTodos() {
      return (this.todos || []).length;
    },
    amoutDoneTodos() {
      return (this.todos || []).filter(f => f.done).length;
    }
  },
  methods: {
    ...mapActions(["doneResetAll","setTodoList"]),
    onDoneResetAll(reset = false) {
      this.doneResetAll({ todos: this.todos, reset });
    },
    removeAll() {
      this.setTodoList([])
    }
  }
};
</script>
<style>
.md-second.md-badge {
  background-color: #2f8e3f !important;
}
</style>