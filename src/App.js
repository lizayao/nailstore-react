import './App.css';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';
import CardWithObject from "./components/Card/CardWithObject";
import ItemListContainer from './components/ItemListContainer';
import Button from "./components/Button/Button";
import ButtonChildren from "./components/Button/ButtonChildren";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const dataProducts = [
    {
      name: "Esmalte UV/LED Navi",
      price: 1000,
      imgurl: "https://beauties.com.ar/assets/archivos/productos/PN91001.webp",
      description:
        "ADD",
    },
    {
      name: 'Monitor 22"',
      price: 890,
      imgurl: "https://picsum.photos/280/260",
      description: "Lorem ipsum dolor sit,  quidem.",
    },
  ];

  return (
    <div>
      <NavBar className="NavBar"></NavBar>
      <ItemListContainer />
      <header className="App-header">

      </header>


      <Button text="Click me" />

      <ButtonChildren type="alert">Click me with Childrens</ButtonChildren>


      <div className="main">
        <CardWithObject data={dataProducts[0]} />
        <CardWithObject data={dataProducts[1]} />
        <Card
          name="Televisor HD"
          price={2090}
          imgurl="https://picsum.photos/280/260"
          description="Lorem Ipsum"
        />
      </div>
    </div>
  );
}

export default App;
