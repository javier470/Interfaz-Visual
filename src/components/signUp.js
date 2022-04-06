import React from "react";

const Welcome = () =>{
    return(
        <div>
            <div>
                <h1>El mejor y más barato restaurante del país</h1>
                <p>Te has preguntado, ¿Qué puedo comer para el almuerzo o cena?, nosotros tenemos
                    tu respuesta, visitanos y come lo que tu desees</p>
                <p>Registrate y recibe todos los nuevos menús en tu email.</p>
            </div>
            <div>
                <input placeholder="Ingresa tu Email..."></input>
                <button>Registrarse</button>
            </div>
        </div>
    )
}

export default Welcome;