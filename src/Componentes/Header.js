import React from 'react';
import las_brasas from '../Imagenes/las_brasas.png';
import './Styles/Header.css';

const Header = () => {
    return(
        <div className="header">
            <img className="logo" src={las_brasas} alt=""/>
        </div>
    )
}
export default Header;