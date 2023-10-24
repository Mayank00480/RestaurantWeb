import React,{useState} from 'react'
import StoreContext from './storeContext.js'
const ContextProvider = (props) => {
  let [data ,setData] = useState([])
    const addItemsToCartHandler =(item) =>{
      let flag = false;
      setData(data.map((val) =>{
        if(item.name == val.name){
          val.quantity = Number(val.quantity) + Number(item.quantity);
          flag = true;
          return val;
        }
      }))
       if(item.quantity > 0 && !flag)  setData([...data , item])
    }
    const removeItemsFromCartHandler =(id) =>{
        setData(data.map((item) =>{
          if(id == item.id && item.quantity > 0) {
         item.quantity--;
         return item;
          }  
          else if(item.quantity > 0)return item;
        
        }))
        console.log(data)
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
