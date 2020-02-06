import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    amountTodo: 0,
    todos: [
      {
        text: 'Learn Vue.js',
        done: true
      },
      {
        text: 'Use VueX',
        done: false
      },
    ]
  },
  getters: {
    todos: state => state.todos
  },
  mutations: {
    setTodoList(state, todos) {
      state.todos = todos
    }
  },
  actions: {
    setTodoList: ({ commit }, todos) => {
      commit('setTodoList', todos)
    },
    doneResetAll({ commit }, params) {
      commit('setTodoList', params.todos.map(m => Object.assign(m, { done: params.reset ? false : true })))
    },

  },
  modules: {
  },
});
