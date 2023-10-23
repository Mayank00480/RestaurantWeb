import React from 'react'
import './Header.css'
import CartButton from './CartButton'
import Food from '../assets/foo.jpg'
const Header = (props) => {
  const clickHandler = () =>{
    props.clickHandler();
  }
  return (
    <>
    <div className = "header">
      <h2>React Meals</h2>
      <CartButton clickHandler = {clickHandler}/>
    </div>
    <div className = "images">
        <img src = {Food} alt = "Image of the Meals" />
    </div>
    </>
  )
}

export default Header
