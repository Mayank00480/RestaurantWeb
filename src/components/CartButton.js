import React from 'react'
import './CartButton.css'
const CartButton = (props) => {
const clickHandler  = () =>{
  props.clickHandler();
}
  return (
    <button onClick = {clickHandler} className = "cartButton">
      Your cart
      <input type = "text" value ="0" />
    </button>
  )
}

export default CartButton
