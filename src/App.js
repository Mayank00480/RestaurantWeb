import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Overlay from "./components/Overlay";
import Summary from "./components/Summary";

function App() {
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
    <Header />
    <Summary />
    <ItemList data = {data} />
    <Overlay/>
    </div>
  );
}

export default App;
