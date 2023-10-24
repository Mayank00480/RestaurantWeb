import React,{createContext} from 'react'

const StoreContext = createContext({
    items : [],
    addItemToCart : (item) =>{},
    removeItemFromCart : (id) =>{},
    
})

export default StoreContext;
