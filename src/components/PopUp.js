import React,{useContext} from "react"
import StoreContext from "../store/storeContext";
export const PopUp = (props) =>{
    const cntxt = useContext(StoreContext);
    cntxt.items.sort((a,b) =>{
        let first = a.name.toLowerCase();
        let second = b.name.toLowerCase();
        if(first > second) return 1;
        else return -1;
    })
    let totalAmnt = 0;
    cntxt.items.forEach((val) =>{
       
      totalAmnt += Number(val.quantity) * Number(val.price);
    })
    const closeHandler = () =>{
          props.closeHandler();
    }
    return <>
 <div className = "overlay">
 <ul>{cntxt.items.map((item) =>{
     return  <li>name:  {item.name} description : {item.description} Price : {item.price} Quantity : {item.quantity}</li> 
    })}</ul>
    <div className = "headings" style = {{backgroundColor : 'white'}}>
        <h2>Total Amount </h2>
        <h3>{Math.round(totalAmnt)}</h3>
        </div>
        <div className = "btn">
            <button type = "button" onClick = {closeHandler}> close</button>
            <button type = "button"> Open</button>
        </div>
    </div>

</>
    }