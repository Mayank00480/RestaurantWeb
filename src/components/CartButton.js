import React from 'react'
import './CartButton.css'
const CartButton = () => {
  return (
    <button className = "cartButton">
      Your cart
      <input type = "text" value ="0" />
    </button>
  )
}

export default CartButton
