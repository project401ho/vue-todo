<template>
  <div>
      <ul>
        <li v-bind:key="item.item" v-for="(item,index) in todoItems" class="shadow">
          <i class=" checkBtn far fa-check-square" v-bind:class="{checkBtnCompleted: item.completed}" v-on:click="toggleComplete(item, index)"></i>
          <span v-bind:class="{textCompleted: item.completed}">{{item.item}}</span>
          <span class='removeBtn' v-on:click="removeTodo(item, index)">
            <i class="fas fa-trash"></i>
          </span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      todoItems: []
    }
  },
  created: function(){
    if (localStorage.length > 0){
      for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))         
        }
      }
    }
  },
  methods: {
    removeTodo : function(item, index){
      this.todoItems.splice(index,1);
      localStorage.removeItem(item.item)

    },
    toggleComplete: function(item){
      item.completed = !item.completed;
      localStorage.setItem(item.item, JSON.stringify(item));
    }
  }
  
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>