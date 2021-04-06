const fetchedTodoItems = (state) =>{
    return state.todoItems;
}
const oprice= (state)=>{
    return state.price;
}
const dprice = (state) =>{
    return state.price * 2;
}
const tprice = (state) =>{
    return state.price*3;
}

export {fetchedTodoItems,oprice,dprice,tprice}