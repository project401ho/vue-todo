<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" placeholder="할일을 적으세요">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>
      <p slot="body">무언가를 입력하세요.</p>      
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue"
export default {
  components:{
    Modal
  },
  data(){
    return {
      newTodoItem: "",
      showModal: false,
    }
  },
  methods:{
    addTodo(){
      if(this.newTodoItem !== ""){
        const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem', text);
        this.clearInput();  
      }
      else{
        this.showModal = !this.showModal;
      }      
    },
    clearInput(){
      this.newTodoItem = "";
    }
  }
}
</script>

<style scoped>
    input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB, #8763Fb);
    display:block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn{
    color: white;
    vertical-align: middle;
  }

  .closeModalBtn{
    color: #df4335;
    float: right;
  }
</style>