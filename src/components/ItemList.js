import React,{useContext} from 'react'
import './itemList.css'
import StoreContext from '../store/storeContext'
const ItemList = (props) => {
  const cntxt = useContext(StoreContext)
  const buttonHandler = (myObj) =>{
    console.log(cntxt)
      cntxt.addItemsToCart(myObj);
      console.log(cntxt.items);
  }
  const removeHandler = (id) =>{
    console.log(id);
     cntxt.removeItemsFromCart(id);
  }
  return (
    <div className = 'itemList'>
      {
        props.data.map((item) =>{
           return <> <li key ={item.id}>{item.itemName} <br/> {item.itemDescription}<br/> {item.itemPrice} </li> <form>
            <label>Amount</label> <input type = "number" defaultValue='1'/>
            <br/>
            <button type = "button" onClick={(e) =>{
              e.preventDefault();
          
              buttonHandler({
                id : item.id,
                name : item.itemName,
                description : item.itemDescription,
                price : item.itemPrice,
                quantity : e.target.previousSibling.previousSibling.value
              })
            }} >+ Add</button>
            <button type = "button" onClick = {(e) =>{
              removeHandler(item.id)
            }} style ={{marginLeft : '10px'}}>- Remove</button>
           </form>
            <hr style={{width : '500px'}}/></>
        })
      }
    </div>
  )
}

export default ItemList
