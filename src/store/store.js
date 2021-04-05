import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0){
            console.log(localStorage);
            for(let i = 0; i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){          
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))         
                }
            }        
        }
        return arr;
    },
};
export const store = new Vuex.Store({
    state:{
        todoItems: storage.fetch()
    },
    mutations:{
        addOneItem(state, newtodoitem){
            const obj = {completed: false, item: newtodoitem}
            localStorage.setItem(newtodoitem, JSON.stringify(obj))
            state.todoItems.push(obj);
        },
        removeItem (state, payload) {
            state.todoItems.splice(payload.index,1);
            localStorage.removeItem(payload.item.item)
        },
        toggleCompelete (state, payload) {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
            localStorage.setItem(payload.item.item, JSON.stringify(payload.item));
        },
        clearAll (state) {
            localStorage.clear();
            state.todoItems = [];
        }

    }
});