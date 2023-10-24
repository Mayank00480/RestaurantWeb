import React,{useState} from 'react'
import StoreContext from './storeContext.js'
const ContextProvider = (props) => {
  let [data ,setData] = useState([])
    const addItemsToCartHandler =(item) =>{
       setData([...data , item])
    }
    const removeItemsFromCartHandler =() =>{
        
    }
    const createContext = {
        items : data,
        addItemsToCart : addItemsToCartHandler,
        removeItemsFromCart : removeItemsFromCartHandler ,
        message : 'hello world'
    }
  return (
    <StoreContext.Provider value = {createContext}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default ContextProvider
