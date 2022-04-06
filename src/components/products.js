import React from "react";


const Products = () => {



    return (
        <div className="newBody">
            <div className="container-card">
                <div className="product-card">
                    <img className="card-image" src={require('./images/Hamburguesa.jpg')} alt="hamburguesa"></img>
                    <h2>Hamburguesa</h2>
                    <p>Comida exquisita para el almuerzo</p>
                    <p>Q18.00</p>
                </div>
                <div className="product-card">
                    <img className="card-image" src={require('./images/Vino.jpg')} alt="vino"></img>
                    <h2>Vino tinto</h2>
                    <p>Una buena elección para cenas importantes</p>
                    <p>Q50.00</p>
                </div>
                <div className="product-card">
                    <img className="card-image" src={require('./images/Ensalada.jpg')} alt=""></img>
                    <h2>Ensalada de pollo</h2>
                    <p>Algo liviano para el almuerzo o cena</p>
                    <p>Q27.30</p>
                </div>
                <div className="product-card">
                    <img className="card-image" src={require('./images/Mousse.jpg')} alt=""></img>
                    <h2>Mousse de chocolate</h2>
                    <p>Postre dulce para momentos dulces</p>
                    <p>Q15.00</p>
                </div>
                <div className="product-card">
                    <img className="card-image" src={require('./images/Cordero.jpg')} alt=""></img>
                    <h2>Cordero Asado</h2>
                    <p>Buena porción de carne perfecta para un almuerzo</p>
                    <p>Q30.99</p>
                </div>
                <div className="product-card">
                    <img className="card-image" src={require('./images/Conejo.jpg')} alt=""></img>
                    <h2>Conejo asado</h2>
                    <p>Carne exótica para una cena preparada</p>
                    <p>Q45.00</p>
                </div>
                <div className="product-card">
                    <img className="card-image" src={require('./images/Pizza.jpg')} alt=""></img>
                    <h2>Pizza al horno</h2>
                    <p>Un plato clásico y de distintos sabores</p>
                    <p>Q49.99</p>
                </div>
                <div className="product-card">
                    <img className="card-image" src={require('./images/Batidos.jpg')} alt=""></img>
                    <h2>Batidos</h2>
                    <p>Una bebida natural y perfecta</p>
                    <p>Q10.50</p>
                </div>
                <div className="product-card">
                    <img className="card-image" src={require('./images/Helado.jpg')} alt=""></img>
                    <h2>Helado</h2>
                    <p>Un postre frío para terminar con sabor la comida</p>
                    <p>Q10.00</p>
                </div>
            </div>
        </div>
    )
}

export default Products;