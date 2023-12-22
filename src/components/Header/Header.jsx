import "./Header.css";

import logo from "../../assets/logo.jpeg";

const Header =  () => {
    return (
            <div className="Header"> 
                
                <img src={logo} alt="logo"  className="logo"/>
                <h1>Tienda Isis</h1>
                
            </div>
    );
};

export default Header;