
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const dstore = new Vuex.Store({
    state: {
        price: 100
    },
    getters:{
        oprice(state){
            return state.price;
        },
        dprice(state){
            return state.price * 2;
        },
        tprice(state){
            return state.price*3;
        }
    }
})