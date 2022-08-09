import './App.css';
import Layout from './components/Layout';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';
import CardWithObject from "./components/Card/CardWithObject";
import ItemListContainer from './components/ItemListContainer';
import Button from "./components/Button/Button";
import ButtonChildren from "./components/Button/ButtonChildren";
import "bootstrap/dist/css/bootstrap.css";
import ItemCount from './components/ItemCount';

function App() {

  /* CardWithObject */
/*   const dataProducts = [
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
  ]; */

  return (
    <div>
      <Layout />
      <ItemListContainer />
      <header className="App-header">
          <p>Envío gratis para compras superiores a $20.000!</p>
      </header>

{/*       <Button text="Click me" />

      <ButtonChildren type="alert">Click me with Childrens</ButtonChildren> */}

      <div className="main">

{/*         <CardWithObject data={dataProducts[0]} />
        <CardWithObject data={dataProducts[1]} /> */}

        <Card
          name="Capping y transfer Navi 10ml"
          price={1350}
          imgurl="https://d22fxaf9t8d39k.cloudfront.net/4cc1a43c1b0efa7716d5d7a649674b0e6cc917821c047c876c5edf13c79a638e59673.jpeg"
          description="Capping UV/Led para uñas, recomendado para nivelar o pegar strass"
        />
        <Card
          name="Meline esmalte Blanco French"
          price={1690}
          imgurl="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/165/900/products/color-gel-led-uv-091-blanco-french-meline-15ml1-7062797bda841838d616269203369026-640-01-2706f614e4a2c9c0db16352995377994-640-0.jpg"
          description="Esmalte UV/Led color Blanco French 091."
        />
        <Card
          name="Esmalte Platinum Navi Lila Glitters 10ml"
          price={1380}
          imgurl="https://http2.mlstatic.com/D_948440-MLA48622792836_122021-F.webp"
          description="Platium de color lila brillante."
        />
      </div>
      
      <ItemCount initial={1} stock={50}/>
    </div>
  );
}

export default App;
