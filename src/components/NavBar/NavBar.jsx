import "./NavBar.css";
import logo from "../images/logo.png"
import CartWidget from "../CartWidget"

function NavBar(){
    return(
        <div className="navBar">
            <div>
                <a><img src={logo} alt="Nail Store" height="150"></img></a>
            </div>
            <div>
                <ul className="listado">
                    <a href="#"><li>Inicio</li></a>
                    <a href="#"><li>Insumos</li></a>
                    <a href="#"><li>Contacto</li></a>
                    <a href="#"><li>Preguntas frecuentes</li></a>
                </ul>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar;