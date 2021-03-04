import React from 'react';
import { pizza, burger, brownie } from './datos';
import COMIDA from '../Componentes/Pedido';
import Contactanos from '../Componentes/Contactanos';
import './Styles/Componentes.css';
let pedido_completo = [];
let i = 0;

export default class Pedido extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            precio_total : 0,
            ingredientes_extras : ''
        }
    }
    
    //Recibe el precio de cada pedido y lo suma
    precio_del_pedido = (e) => {
        console.log(e);
        this.setState({
            precio_total : this.state.precio_total + e
        });
    }

    ingredientes_extras = (e) => {
        let array = [];
        array = e;
        if (array.length === 1)
            array.splice(0, 0, '1  ');
        
        else
            array.splice(1, 0, '  con : ');
        
        pedido_completo[i] = array; 
        i++;
        
    }


    render(){
    
        return(
            <div className="pedido">
                <a href="/pedido"> <button className="boton_nuevo_inicio">Iniciar nuevo pedido</button> </a>

                <COMIDA ingredientes_extras={this.ingredientes_extras} precio_del_pedido={this.precio_del_pedido} nombre_del_producto = {"Pizza"} foto={pizza.img} precio={pizza.precio} ingredientes={pizza.ingredientes} />
                <COMIDA ingredientes_extras={this.ingredientes_extras} precio_del_pedido={this.precio_del_pedido} nombre_del_producto={"Burger"} foto={burger.img} precio={burger.precio} ingredientes={burger.ingredientes} />
                <COMIDA ingredientes_extras={this.ingredientes_extras} precio_del_pedido={this.precio_del_pedido} nombre_del_producto={"Brownie"} foto={brownie.img} precio={brownie.precio} ingredientes={brownie.ingredientes} />
                <COMIDA ingredientes_extras={this.ingredientes_extras} precio_del_pedido={this.precio_del_pedido} nombre_del_producto = {"Pizza"} foto={pizza.img} precio={pizza.precio} ingredientes={pizza.ingredientes} />
                <COMIDA ingredientes_extras={this.ingredientes_extras} precio_del_pedido={this.precio_del_pedido} nombre_del_producto={"Burger"} foto={burger.img} precio={burger.precio} ingredientes={burger.ingredientes} />
                <COMIDA ingredientes_extras={this.ingredientes_extras} precio_del_pedido={this.precio_del_pedido} nombre_del_producto={"Brownie"} foto={brownie.img} precio={brownie.precio} ingredientes={brownie.ingredientes} />
                <COMIDA ingredientes_extras={this.ingredientes_extras} precio_del_pedido={this.precio_del_pedido} nombre_del_producto = {"Pizza"} foto={pizza.img} precio={pizza.precio} ingredientes={pizza.ingredientes} />
                <COMIDA ingredientes_extras={this.ingredientes_extras} precio_del_pedido={this.precio_del_pedido} nombre_del_producto={"Burger"} foto={burger.img} precio={burger.precio} ingredientes={burger.ingredientes} />
                <COMIDA ingredientes_extras={this.ingredientes_extras} precio_del_pedido={this.precio_del_pedido} nombre_del_producto={"Brownie"} foto={brownie.img} precio={brownie.precio} ingredientes={brownie.ingredientes} />

                <span className="total">Total: ${this.state.precio_total}</span>

                <div className="listar_pedido">
                    {pedido_completo.map(ingredientes_elegidos =>
                        <div className="ingredientes_elegidos">
                            <li className="lista_pedido">{ingredientes_elegidos}</li> 
                        </div>
                    )}
                </div>
                <Contactanos className="boton_contactanos" precio = {this.state.precio_total} ingredientes={pedido_completo} />

            </div>

        );
    }
}