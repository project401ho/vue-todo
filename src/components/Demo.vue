<template>
  <div id="root">
      <p>{{oprice}}</p>
      <p>{{dprice}}</p>
      <p>{{tprice}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters(['oprice',"dprice","tprice"])
        // oprice(){
        //     return this.$store.getters.oprice
        // },
        // dprice(){
        //     return this.$store.getters.dprice
        // },
        // tprice(){
        //     return this.$store.getters.tprice
        // }
    }
}
</script>

<style>

</style>