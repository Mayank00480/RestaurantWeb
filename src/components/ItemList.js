import React from 'react'
import './itemList.css'
const ItemList = (props) => {
  return (
    <div className = 'itemList'>
      {
        props.data.map((item) =>{
           return <> <li key ={Math.random().toString()}>{item.itemName} <br/> {item.itemDescription}<br/> {item.itemPrice} </li>
            <hr/></>
        })
      }
    </div>
  )
}

export default ItemList
