import 'todomvc-app-css/index.css'

import Vue from 'vue'
import { get } from 'http';

var filters = {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter((todo) => {
      return !todo.completed;
    })
  },
  completed(todos) {
    return todos.filter((todo) => {
      return todo.completed;
    })
  }
}

let app=new Vue({
  el: '.todoapp',
  data: {
    title: 'hello Vue',
    newTodo: '',
    todos: [{
      content: 'vue',
      completed: 'false'
    }, {
      content: 'vuex',
      completed: 'false'
    }],
    editedTodo:null,
    hashName:'all'
  },
  methods: {
    addTodo(e) {
      if(!this.newTodo){
        return;
      }
      this.todos.push({
        content: this.newTodo,
        completed: true
      });
      this.newTodo = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    editTodo(todo){
      this.editedTodo=todo;
      this.editCache=todo.content;
    },
    doneEdit(todo,index){
      this.editedTodo=null;
      if(!todo.content){
        this.removeTodo(index);
      }
    },
    cancelEdit(todo){
      this.editedTodo=null;
      todo.content=this.editCache;
    },
    clear(){
      this.todos=filters.active(this.todos);
    }
  },
  computed: {
    remian(){
      return filters.active(this.todos).length;
    },
    isAll:{
      get(){
        return this.remian===0;
      },
      set(value){
        this.todos.forEach((todo)=>{
          todo.completed=value;
        })
      }
    },
    filteredTodos(){
      return filters[this.hashName](this.todos)
    }
  },
  directives:{
    focus(el,value){
      if(value){
        el.focus();
      }
    }
  }

})

function hashChange(){
  let hashName=location.hash.replace(/#\/?/,'');
  if(filters[hashName]){
    app.hashName=hashName;
  }else{
    location.hash='';
    app.hashName='all';
  }
}
window.addEventListener('hashchange',hashChange)