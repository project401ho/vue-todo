<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  // data () {
  //   return{
  //     todoItems : []
  //   }
  // },
  
  // methods:{// = mutations
    // addOneItem (todoitem){
    //   const obj = {completed: false, item: todoitem}
    //   localStorage.setItem(todoitem, JSON.stringify(obj))
    //   this.todoItems.push(obj);
    // },
    // removeItem (item, index) {
    //   this.todoItems.splice(index,1);
    //   localStorage.removeItem(item.item)
    // },
    // toggleCompelete (item, index) {
    //   this.todoItems[index].completed = !this.todoItems[index].completed
    //   localStorage.setItem(item.item, JSON.stringify(item));
    // },
    // clearAll () {
    //   localStorage.clear();
    //   this.todoItems = [];
    // }  
  // },

  components: {    
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
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