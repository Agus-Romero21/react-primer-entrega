
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
            <nav className="nav">
                <ul className="ul">
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Ofertas</li>
                    <li> 
                        <CartWidget/>
                    </li>
                </ul>
            </nav>
    );
};

export default NavBar;