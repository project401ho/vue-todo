<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList 
      v-on:removeItem="removeItem" 
      v-on:toggleCompelete = "toggleCompelete" 
      v-bind:propsdata="todoItems">
    </TodoList>
    <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data () {
    return{
      todoItems : []
    }
  },
  
  methods:{
    addOneItem (todoitem){
      const obj = {completed: false, item: todoitem}
      localStorage.setItem(todoitem, JSON.stringify(obj))
      this.todoItems.push(obj);
    },
    removeItem (item, index) {
      this.todoItems.splice(index,1);
      localStorage.removeItem(item.item)
    },
    toggleCompelete (item, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.setItem(item.item, JSON.stringify(item));
    },
    clearAll () {
      localStorage.clear();
      this.todoItems = [];
    }  
  },

  components: {    
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },

  created (){
    if (localStorage.length > 0){
      for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){          
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))         
        }
      }
    }
  },  
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 80%;
  height: 80%;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>