<template>
  <md-toolbar>
    <h3 class="md-title" style="flex: 1">
      <router-link to="/">Todo List - Vue CLI</router-link>
    </h3>
    <infos />
  </md-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
import Infos from "@/components/Infos";
export default {
  components: {
    Infos
  },
  computed: {
    ...mapGetters(["todos"]),
    amoutTodos() {
      return (this.todos || []).length;
    },
    amoutDoneTodos() {
      return (this.todos || []).filter(f => f.done).length;
    }
  }
};
</script>
<style>
.md-title a {
  color: #20262e !important;
}
</style>