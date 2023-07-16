import logo from './logo.svg';
import './App.css';
import Item from './components/item';
import ItemDate from './components/itemDate';
import Card from './components/card';
function App() {
  // const itemsTwoName = "NirmaEX"
  const response = [
    {
      itemName : "Nirma",
      itemDate :"21",
      itemMonth:"June",
      itemyear:"1998"
    },
    {
      itemName : "Nirma2",
      itemDate :"10",
      itemMonth:"Jan",
      itemyear:"1928"
    },
    {
      itemName : "Nirma3",
      itemDate :"22",
      itemMonth:"may",
      itemyear:"1999"
    },
    {
      itemName : "Nirma4",
      itemDate :"26",
      itemMonth:"June",
      itemyear:"1988"
    }
  ]
  return (

    <Card>
        <div className="App1">
      <Item name={response[0].itemName}>
        Hellow this is chethan
      </Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>
      <Item name="Nirma2"></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear} ></ItemDate>
      <Item name="Nirma3"></Item>
      <ItemDate  day="10" month="Jan" year="1918" ></ItemDate>
      <h1>chethanb</h1>
    </div>
    </Card>
  );
}

export default App;
