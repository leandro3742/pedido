import React from 'react';
import { Link } from 'react-router-dom'; 
import './Styles/Home.css';
import local from '../Imagenes/restaurante.jpg';

export default class Home extends React.Component {
    render(){
        return(
            <div className="home">
                <Link to='/pedido'>Iniciar pedido </Link>
            </div>
        );
    }
}