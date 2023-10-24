import React,{useContext} from 'react'
import './CartButton.css'
import StoreContext from '../store/storeContext';
const CartButton = (props) => {
  const contextData = useContext(StoreContext);
  let qty = 0;
   contextData.items.forEach((item) =>{
    console.log(item.quantity)
    qty = qty + Number(item.quantity); 
   })
const clickHandler  = () =>{
  props.clickHandler();
}
  return (
    <button onClick = {clickHandler} className = "cartButton">
      Your cart 
      <span>{qty}</span>
    </button>
  )
}

export default CartButton
