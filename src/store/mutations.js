const addOneItem = (state, newtodoitem)=>{
    const obj = {completed: false, item: newtodoitem}
    localStorage.setItem(newtodoitem, JSON.stringify(obj))
    state.todoItems.push(obj);
}
const removeItem = (state, payload)=> {
    state.todoItems.splice(payload.index,1);
    localStorage.removeItem(payload.item.item)
}
const toggleComplete = (state, payload) =>{
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
    localStorage.setItem(payload.item.item, JSON.stringify(payload.item));
}
const clearAll = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export {addOneItem,removeItem,toggleComplete,clearAll}