import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Overlay from "./components/Overlay";
import Summary from "./components/Summary";
import React ,{useState} from 'react';
import ContextProvider from "./store/ContextProvider"; 
import { PopUp } from "./components/PopUp";
function App() {
  const [cart , setCart] = useState();
  const closeHandler = () =>{
   setCart(false);    
  }
  const clickHandler = () =>{
    setCart(true)
  }

  const data = [{
    id : 1,
    itemName : 'Sushi',
    itemDescription : 'Finest Fish and veggies',
    itemPrice : '22.99'
  },{
    id : 2,
    itemName : 'Schnitzel',
    itemDescription : 'A german speciality!',
    itemPrice : '16.50'
  },{
    id : 3,
    itemName : 'Barbecue',
    itemDescription : 'American,raw,meaty',
    itemPrice : '12.99'
  },{
    id : 4,
    itemName : 'Green Bowl',
    itemDescription : 'Healthy...and green...',
    itemPrice : '87.54'
  }]
  return (
    <ContextProvider>
    <Header clickHandler = {clickHandler} />
    <Summary />
    <ItemList data = {data} />
{cart  && <Overlay closeHandler = {closeHandler}/>}
 
   </ContextProvider>
  );
}

export default App;
