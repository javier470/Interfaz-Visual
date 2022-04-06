import React from "react";

const Footer = () =>{
    return(
        <div className="container-footer">
            <div className="row">
                <div className="footer-col">
                    <h4>Compañia</h4>
                    <ul>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Nuestros Servicios</a></li>
                        <li><a href="#">Politicas de Privacidad</a></li>
                        <li><a href="#">Programa de Afiliados</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Obtener Ayuda</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Envío</a></li>
                        <li><a href="#">Quejas</a></li>
                        <li><a href="#">Estatus</a></li>
                        <li><a href="#">Opciones de pago</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Servicios</h4>
                    <ul>
                        <li><a href="#">Plazas</a></li>
                        <li><a href="#">Salarios</a></li>
                        <li><a href="#">Aprende</a></li>
                        <li><a href="#">Cursos</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Derechos Reservados Guatemala ©2022</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer;