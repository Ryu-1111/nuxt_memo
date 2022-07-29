import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
    //保存するデータであるtodos配列の定義しています。
      todos: []
    },

    getters: {
      //todos配列を取得するときにgetters.getTodosで取得できます。
      getTodos: state => state.todos
    },

    mutations: {
      //todos配列に受け取ったtodoの追加する関数の定義をしています。
      addTodoFromMutations(state, todo) {
        state.todos.push(todo);
      },

      deleteTodo(state, memo) {
        //splice(index, 1)で(index)番目の要素を1つ削除しています。
        state.todos.splice(memo, 1);
      }
    },

    actions: {
      //実際にtodos配列にtodoの追加を行っています。
      addTodoFromActions({ commit }, todoInput) {
        commit("addTodoFromMutations", todoInput);
      },

      //todos配列から要素を削除しています。
      deleteTodo({ commit }, todoIndex) {
        commit('deleteTodo', todoIndex)
     }
   }
  });
};

export default createStore;