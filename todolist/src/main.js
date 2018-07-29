import 'todomvc-app-css/index.css'

import Vue from 'vue'

new Vue({
  el: '.todoapp',
  data: {
    title: 'hello Vue',
    newTodo: '11',
    todos: [{
      content: 'vue',
      completed: 'false'
    }, {
      content: 'vuex',
      completed: 'false'
    }]
  },
  methods: {
    addTodo(e) {
      this.todos.push({
        content: this.newTodo,
        completed: false
      });
      this.newTodo = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
})
