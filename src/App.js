import Header from "./components/Header";
import ItemList from "./components/ItemList";
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
    <div>
    <Header />
    <Summary />
    <ItemList data = {data} />
    </div>
  );
}

export default App;
