<template>
  <div>
    <transition-group name="list" tag="ul">
        <li v-bind:class="{boxCompleted: item.completed}" v-bind:key="item.item" v-for="(item,index) in this.getTodoItems" class="shadow">
          <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: item.completed}" v-on:click="toggleComplete({item, index})"></i>
          <span v-bind:class="{textCompleted: item.completed}">{{item.item}}</span>
          <span class='removeBtn' v-on:click="removeTodo({item, index})">
            <i class="fas fa-trash"></i>
          </span>
        </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      removeTodo:"removeItem",
      toggleComplete: "toggleComplete",
    }),
  },
  computed: {
    ...mapGetters({
      getTodoItems: "fetchedTodoItems"
      
    })
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
}
.boxCompleted{
    background-color: gray;
}
.checkmark{
  vertical-align: middle;
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

/*List Transition*/
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>