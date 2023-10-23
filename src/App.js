import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Overlay from "./components/Overlay";
import Summary from "./components/Summary";
import React ,{useState} from 'react';
function App() {
  const [cart , setCart] = useState();
  const closeHandler = () =>{
   setCart(false);    
  }
  const clickHandler = () =>{
    setCart(true)
  }
  const data = [{
    itemName : 'Sushi',
    itemDescription : 'Finest Fish and veggies',
    itemPrice : '$22.99'
  },{
    itemName : 'Schnitzel',
    itemDescription : 'A german speciality!',
    itemPrice : '$16.50'
  },{
    itemName : 'Barbecue',
    itemDescription : 'American,raw,meaty',
    itemPrice : '$12.99'
  },{
    itemName : 'Green Bowl',
    itemDescription : 'Healthy...and green...',
    itemPrice : '$87.54'
  }]
  return (
    <div className="app">
    <Header clickHandler = {clickHandler} />
    <Summary />
    <ItemList data = {data} />
    {cart && <Overlay closeHandler = {closeHandler}/>}
    </div>
  );
}

export default App;
