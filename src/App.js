import './App.css';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';
import ItemListContainer from './components/ItemListContainer';
import Button from "./components/Button/Button";
import ButtonChildren from "./components/Button/ButtonChildren";

function App() {
  const dataProducts = [
    {
      name: "Cabina UV/LED 48W",
      price: 4000,
      imgurl: "https://images.app.goo.gl/9mCPmynBkEgBm8Et5",
      description: "Cabina para secar gel UV/LED",
    }
  ];

  return (
    <div>
      <NavBar className="NavBar"></NavBar>
      <ItemListContainer />
      <header className="App-header">

        <h1>Nail Store</h1>
        <Card />
      </header>
    </div>
  );
}

export default App;
