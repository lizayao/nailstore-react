import "./NavBar.css";
import logo from "../images/logo.png"

export default function NavBar(){
    return(
        <ul>
            <a><img src={logo} alt="Nail Store"></img></a>
            <a href="#"><li>Inicio</li></a>
            <a href="#"><li>Insumos</li></a>
            <a href="#"><li>Contacto</li></a>
            <a href="#"><li>Preguntas frecuentes</li></a>
        </ul>
    )
}