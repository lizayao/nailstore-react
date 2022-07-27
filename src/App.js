
import './App.css';
import img from "./images/logo.png"
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar className="NavBar"></NavBar>
      <header className="App-header">
        <img src={img} alt="logo" />

      </header>
    </div>
  );
}

export default App;
