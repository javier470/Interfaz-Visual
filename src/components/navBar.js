import React from "react";


const Navbar = () => {
    return (
        <div className="container">
            <nav>
                <input type="checkbox" id="check"></input>
                <label className="checkbtn" for="check">
                    <img src={require('./images/menu.png')} alt='||'></img>
                </label>
                <img src={require('./images/Logo.png')} alt="icon" id="logo" />
                <ul>
                    <li><a href="#">Especialidades</a></li>
                    <li><a href="#">Reservación</a></li>
                    <li><a href="#">Conocenos</a></li>
                    <li><a href="#">Inicia Sesión</a></li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar;