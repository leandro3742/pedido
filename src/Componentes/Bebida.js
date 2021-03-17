import React, { useState } from 'react';
import './Styles/Comida.css';

import add from '../Imagenes/iconos/add.png';
import carro from '../Imagenes/iconos/carro.png';

import less from '../Imagenes/iconos/less.png';

let ingredientes_guardados = [];
let precio_total = 0;

const Bebida = (props) => {
    const [nombre_del_producto, setNombre_del_producto] = useState(props.nombre_del_producto);
    const [imagen, setImagen] = useState(props.foto);
    const precio_inicial = props.precio;
    const [precio, setPrecio] = useState(props.precio);
    const [mostrar_boton, setMostrar_boton] = useState('no_mostrar');
    const [preguntar_por_ingredientes_extra , setPreguntar_por_ingredientes_extras] = useState(<div></div>);
    const [lista_ingredientes, setLista_ingredientes] = useState(<div></div>);
    const [lista_ingredientes_comprados, setLista_ingredientes_comprados] = useState([]);

    const ingredientes = props.ingredientes;
    let ingredientes_elegidos = lista_ingredientes_comprados;
    let cantidad_de_ingredientes = 0;
    let precio_total = precio;
    
    function cerrar_lista(){
        setPreguntar_por_ingredientes_extras(<div></div>);
    }
    console.log(ingredientes);

    function expandir_ingredientes(){
        cerrar_lista(); //Cierro la pregunta de "Agregarle ingredientes extras"
        setLista_ingredientes(
            <div>   
                {ingredientes.nombres.map(lista_ingredientes =>
                <div className="lista_ingredientes">
                    <span> {lista_ingredientes} </span>
                    <img className="icono_chico" src={less} onClick={() =>quitar_a_la_lista(lista_ingredientes, ingredientes.precio)}/>
                    <img className="icono_chico" src={add} onClick={() =>agregar_a_la_lista_de_ingredientes(lista_ingredientes, ingredientes.precio)}/>
                </div>)}
            
            </div>    
        )
    }


    function mostrar_pedido(){
        if(ingredientes !== false){
            setPreguntar_por_ingredientes_extras(
                <div className="preguntar_por_ingredientes_extras">
                    <span className="agregar_ingrediente">Le agregamos algún ingrediente extra?</span>
                    <div className="elegir_si_no">
                        <h2 onClick={()=>expandir_ingredientes()} className="si">Si</h2> 
                        <h2 onClick={()=>cerrar_lista()}className="no">No</h2>
                    </div>
                </div>
            )
        }
        setMostrar_boton("si_mostrar");
    }



    function quitar_a_la_lista(ingrediente, precio_del_ingrediente){
        let auxiliar = ingredientes_elegidos;
        let i = auxiliar.indexOf(ingrediente);

        if(i != -1){

           //Busca en los ingredientes el precio correcto
           let numero_ingrediente = 0;
           while(ingrediente != ingredientes.nombres[numero_ingrediente]){
                numero_ingrediente++;
            }

            auxiliar.splice(i, 1); //Elimina el ingrediente
            precio_total = precio_total - precio_del_ingrediente[numero_ingrediente];
            setPrecio(precio_total);
        }
    }

    function agregar_a_la_lista_de_ingredientes(ingrediente, precio_ingrediente) {
        let numero_ingrediente = 0; 
        let indice = 0;
        let ya_esta = false; //No permite que hayan ingredientes repetidos

        //Busca en los ingredientes el precio correcto
        while(ingrediente !== ingredientes.nombres[numero_ingrediente]){
            numero_ingrediente++;
        }
    
        while(indice < ingredientes_elegidos.length ){
            console.log("aaL: " + ingredientes_elegidos);
            console.log("ingre: " + ingredientes_elegidos[indice]);
            if(ingrediente === ingredientes_elegidos[indice])
                ya_esta = true;
            indice++;
        }

        if(ya_esta === false){
            cantidad_de_ingredientes++;
            precio_total = precio_total + precio_ingrediente[numero_ingrediente];
            ingredientes_elegidos[cantidad_de_ingredientes] = ingrediente;
            setPrecio(precio_total);
            setLista_ingredientes_comprados(ingredientes_elegidos);
        }
    }

    function cerrar_ingredientes(){
        ingredientes_elegidos.unshift(nombre_del_producto); //Agrego el nombre del producto al principio
        ingredientes_guardados = ingredientes_elegidos;
        precio_total = precio;
        setMostrar_boton('no_mostrar');
        setLista_ingredientes(<div></div>);
        setLista_ingredientes_comprados([]);
        setPrecio(precio_inicial);
    }

    const { precio_del_pedido } = props;
    const { ingredientes_extras } = props;

    return(
            <div className="pedido">
                <div>
                    <div className="pedido-mini-container">
                        <div className="arriba">
                            <img className="pedido-imagen-bebidas" src={imagen} alt=""/>
                            <img className="icono" src={carro} onClick={()=>mostrar_pedido()}/>
                        </div>
                        <div className="precio"> <span>${precio}</span> </div>
                    </div>
                    {preguntar_por_ingredientes_extra}

                    {lista_ingredientes}
                    
                    {/* ACA HACE UNA LISTA CON LOS INGREDIENTES EXTRA QUE ELIJE */}
                    <div className="container_ingredientes">
                        {lista_ingredientes_comprados.map(ingredientes_elegido =>
                            <div className="ingredientes_elegidos">
                                <span>{ingredientes_elegido}</span>
                            </div>
                        )}
                    </div>
                    {/* FIN DE LOS INGREDIENTES EXTRA */}

                    <div className="boton">
                        <button className={mostrar_boton} onClick={ () => (cerrar_ingredientes(), ingredientes_extras(ingredientes_guardados), precio_del_pedido(precio_total) ) }>Seguir comprando</button>
                    </div>

                </div>              
                
            </div>
    )
}
export default Bebida;
