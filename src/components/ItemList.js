import React from 'react'
import './itemList.css'
const ItemList = (props) => {
  return (
    <div className = 'itemList'>
      {
        props.data.map((item) =>{
           return <> <li key ={Math.random().toString()}>{item.itemName} <br/> {item.itemDescription}<br/> {item.itemPrice} </li> <form>
            <label>Amount</label> <input type = "text"/>
            <br/>
            <button type = "button" >+Add</button>
           </form>
            <hr style={{width : '500px'}}/></>
        })
      }
    </div>
  )
}

export default ItemList
