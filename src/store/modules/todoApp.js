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

const state = {
    todoItems: storage.fetch(),
    price: 100
}
const getters = {
    fetchedTodoItems (state) {
        return state.todoItems;
    },
    oprice (state){
        return state.price;
    },
    dprice (state) {
        return state.price * 2;
    },
    tprice (state) {
        return state.price*3;
    }
}
const mutations = {
    addOneItem (state, newtodoitem){
        const obj = {completed: false, item: newtodoitem}
        localStorage.setItem(newtodoitem, JSON.stringify(obj))
        state.todoItems.push(obj);
    },
    removeItem (state, payload) {
        state.todoItems.splice(payload.index,1);
        localStorage.removeItem(payload.item.item)
    },
    toggleComplete (state, payload) {
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
        localStorage.setItem(payload.item.item, JSON.stringify(payload.item));
    },
    clearAll (state)  {
        localStorage.clear();
        state.todoItems = [];
    }
}

export default {
    state,
    getters,
    mutations
}