import React, { useState } from 'react';
import './Styles/Comida.css';

import add from '../Imagenes/iconos/add.png';
import carro from '../Imagenes/iconos/carro.png';

import less from '../Imagenes/iconos/less.png';

let ingredientes_guardados = [];
let precio_total = 0;

// const Comida = (props) => {
//     const [nombre_del_producto, setNombre_del_producto] = useState(props.nombre_del_producto);
//     const [imagen, setImagen] = useState(props.foto);
//     const precio_inicial = props.precio;
//     const [precio, setPrecio] = useState(props.precio);
//     const [mostrar_boton, setMostrar_boton] = useState('no_mostrar');
//     const [preguntar_por_ingredientes_extra , setPreguntar_por_ingredientes_extras] = useState(<div></div>);
//     const [lista_ingredientes, setLista_ingredientes] = useState(<div></div>);
//     const [lista_ingredientes_comprados, setLista_ingredientes_comprados] = useState([]);

//     const ingredientes = props.ingredientes;
//     let ingredientes_elegidos = lista_ingredientes_comprados;
//     let cantidad_de_ingredientes = 0;
//     let precio_total = precio;
    
//     function cerrar_lista(){
//         setPreguntar_por_ingredientes_extras(<div></div>);
//     }
//     console.log(ingredientes);

//     function expandir_ingredientes(){
//         cerrar_lista(); //Cierro la pregunta de "Agregarle ingredientes extras"
//         setLista_ingredientes(
//             <div>   
//                 {ingredientes.nombres.map(lista_ingredientes =>
//                 <div className="lista_ingredientes">
//                     <span> {lista_ingredientes} </span>
//                     <img className="icono_chico" src={less} onClick={() =>quitar_a_la_lista(lista_ingredientes, ingredientes.precio)}/>
//                     <img className="icono_chico" src={add} onClick={() =>agregar_a_la_lista_de_ingredientes(lista_ingredientes, ingredientes.precio)}/>
//                 </div>)}
            
//             </div>    
//         )
//     }


//     function mostrar_pedido(){
//         if(ingredientes !== false){
//             setPreguntar_por_ingredientes_extras(
//                 <div className="preguntar_por_ingredientes_extras">
//                     <span className="agregar_ingrediente">Le agregamos algún ingrediente extra?</span>
//                     <div className="elegir_si_no">
//                         <h2 onClick={()=>expandir_ingredientes()} className="si">Si</h2> 
//                         <h2 onClick={()=>cerrar_lista()}className="no">No</h2>
//                     </div>
//                 </div>
//             )
//         }
//         setMostrar_boton("si_mostrar");
//     }



//     function quitar_a_la_lista(ingrediente, precio_del_ingrediente){
//         let auxiliar = ingredientes_elegidos;
//         let i = auxiliar.indexOf(ingrediente);

//         if(i != -1){

//            //Busca en los ingredientes el precio correcto
//            let numero_ingrediente = 0;
//            while(ingrediente != ingredientes.nombres[numero_ingrediente]){
//                 numero_ingrediente++;
//             }

//             auxiliar.splice(i, 1); //Elimina el ingrediente
//             precio_total = precio_total - precio_del_ingrediente[numero_ingrediente];
//             setPrecio(precio_total);
//         }
//     }

//     function agregar_a_la_lista_de_ingredientes(ingrediente, precio_ingrediente) {
//         let numero_ingrediente = 0; 
//         let indice = 0;
//         let ya_esta = false; //No permite que hayan ingredientes repetidos

//         //Busca en los ingredientes el precio correcto
//         while(ingrediente !== ingredientes.nombres[numero_ingrediente]){
//             numero_ingrediente++;
//         }
    
//         while(indice < ingredientes_elegidos.length ){
//             console.log("ingredientes_elegidos_totales: " + ingredientes_elegidos);
//             console.log("ingrediente nuevo: " + ingredientes_elegidos[indice]);
//             if(ingrediente === ingredientes_elegidos[indice])
//                 ya_esta = true;
//             indice++;
//         }

//         if(ya_esta === false){
//             cantidad_de_ingredientes++;
//             if (precio_ingrediente !== 0){
//                 precio_total = precio_total + precio_ingrediente[numero_ingrediente];
//                 setPrecio(precio_total);
//             }
//             ingredientes_elegidos[cantidad_de_ingredientes] = ingrediente;
//             setLista_ingredientes_comprados(ingredientes_elegidos);
//         }
//     }

//     function cerrar_ingredientes(){
//         ingredientes_elegidos.unshift(nombre_del_producto); //Agrego el nombre del producto al principio
//         ingredientes_guardados = ingredientes_elegidos;
//         precio_total = precio;
//         setMostrar_boton('no_mostrar');
//         setLista_ingredientes(<div></div>);
//         setLista_ingredientes_comprados([]);
//         setPrecio(precio_inicial);
//     }

//     const { precio_del_pedido } = props;
//     const { ingredientes_extras } = props;

//     return(
//             <div className="pedido">
//                 <div>
//                     <div className="pedido-mini-container">
//                         <div className="arriba">
//                             <img className="pedido-imagen" src={imagen} alt=""/>
//                             <img className="icono" src={carro} onClick={()=>mostrar_pedido()}/>
//                         </div>
//                         <div className="precio"> <span>${precio}</span> </div>
//                     </div>
//                     {preguntar_por_ingredientes_extra}

//                     {lista_ingredientes}
                    
//                     {/* ACA HACE UNA LISTA CON LOS INGREDIENTES EXTRA QUE ELIJE */}
//                     <div className="container_ingredientes">
//                         {lista_ingredientes_comprados.map(ingredientes_elegido =>
//                             <div className="ingredientes_elegidos">
//                                 <span>{ingredientes_elegido}</span>
//                             </div>
//                         )}
//                     </div>
//                     {/* FIN DE LOS INGREDIENTES EXTRA */}

//                     <div className="boton">
//                         <button className={mostrar_boton} onClick={ () => (cerrar_ingredientes(), ingredientes_extras(ingredientes_guardados), precio_del_pedido(precio_total) ) }>Seguir comprando</button>
//                     </div>

//                 </div>              
                
//             </div>
//     )
// }
// export default Comida;



export default class Comida extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            nombre_del_producto : props.nombre_del_producto,
            imagen : props.foto,
            precio_inicial : props.precio,
            precio : props.precio,
            ingredientes : props.ingredientes,
            mostrar_precio : <div></div>,
            i : 0,
            ingredientes_elegido : [],
            mostrar_boton : 'no_mostrar',
            preguntar_por_ingredientes_extra : <div></div>
        }
    } 

    mostrar_pedido = ()=> {        
        if(this.state.ingredientes !== false){
            this.setState({
                preguntar_por_ingredientes_extra :
                    <div className="preguntar_por_ingredientes_extras">
                        <span className="agregar_ingrediente">Le agregamos algún ingrediente extra?</span>
                        <div className="elegir_si_no">
                            <h2 onClick={()=>this.expandir_ingredientes()} className="si">Si</h2> 
                            <h2 onClick={()=>this.cerrar_lista()}className="no">No</h2>
                        </div>
                    </div>
            })
            this.state.mostrar_boton = "si_mostrar";
        }
        else{
            this.setState({
                mostrar_boton : "si_mostrar"
            })
        }
    
    }

    cerrar_lista = () => {
        this.setState({
            preguntar_por_ingredientes_extra : <div></div>
        })
    }

    expandir_ingredientes = () => {
        this.cerrar_lista(); //Cierro la pregunta de "Agregarle ingredientes extras"
        // this.aparecer_boton(); //Aparece el boton para poder seguir comprando

        this.setState({
            lista_ingredientes :
                <div>   
                    {this.state.ingredientes.nombres.map(lista_ingredientes =>
                    <div className="lista_ingredientes">
                        <span> {lista_ingredientes} </span>
                        <img className="icono_chico" src={less} onClick={() => this.quitar_a_la_lista(lista_ingredientes, this.state.ingredientes.precio)}/>
                        <img className="icono_chico" src={add} onClick={() => this.agregar_a_la_lista_de_ingredientes(lista_ingredientes, this.state.ingredientes.precio)}/>
                    </div>)}
                
                </div>    
        })
    }


    quitar_a_la_lista(ingrediente, precio){
        let auxiliar = this.state.ingredientes_elegido;
        let i = auxiliar.indexOf(ingrediente);

        if(i != -1){

           //Busca en los ingredientes el precio correcto
           let numero_ingrediente = 0;
           while(ingrediente != this.state.ingredientes.nombres[numero_ingrediente]){
                numero_ingrediente++;
            }

            auxiliar.splice(i, 1); //Elimina el ingrediente
            this.setState({
                ingredientes_elegido : auxiliar,
                precio : this.state.precio - precio[numero_ingrediente]
            })
        }
    }

    agregar_a_la_lista_de_ingredientes(ingrediente, precio) {
        let numero_ingrediente = 0; 
        let i = 0;
        let ya_esta = false; //No permite que hayan ingredientes elegidos

        //Busca en los ingredientes el precio correcto
        while(ingrediente != this.state.ingredientes.nombres[numero_ingrediente]){
            numero_ingrediente++;
        }
        
        while(i < this.state.i ){
            if(ingrediente === this.state.ingredientes_elegido[i])
                ya_esta = true;
            i++;
        }

        if(ya_esta === false){
            this.state.ingredientes_elegido.length++;
            this.state.ingredientes_elegido[this.state.i] = ingrediente ;
        
            this.setState({
                i : this.state.i + 1,
                precio : this.state.precio + precio[numero_ingrediente]
            })
        }
    }

    cerrar_ingredientes = () => {
        this.state.ingredientes_elegido.unshift(this.state.nombre_del_producto); //Agrego el nombre del producto al principio
        ingredientes_guardados = this.state.ingredientes_elegido;
        precio_total = this.state.precio;
        this.setState({
            mostrar_boton : 'no_mostrar',
            lista_ingredientes : <div></div>,
            ingredientes_elegido : [],
            precio : this.state.precio_inicial
        }) 
    }

    render(){
        
        const { precio_del_pedido } = this.props;
        const { ingredientes_extras } = this.props

        return(
            <div className="pedido">
                <div>
                    <div className="pedido-mini-container">
                        <div className="arriba">
                            <img className="pedido-imagen" src={this.state.imagen} alt=""/>
                            <img className="icono" src={carro} onClick={()=>this.mostrar_pedido()}/>
                        </div>
                        <div className="precio"> <span>${this.state.precio}</span> </div>
                    </div>
                    {this.state.preguntar_por_ingredientes_extra}

                    {this.state.lista_ingredientes}
                    
                    {/* ACA HACE UNA LISTA CON LOS INGREDIENTES EXTRA QUE ELIJE */}
                    <div className="container_ingredientes">
                        {this.state.ingredientes_elegido.map(ingredientes_elegidos =>
                            <div className="ingredientes_elegidos">
                                <span>{ingredientes_elegidos}</span>
                            </div>
                        )}
                    </div>
                    {/* FIN DE LOS INGREDIENTES EXTRA */}

                    <div className="boton">
                        <button className={this.state.mostrar_boton} onClick={ () => (this.cerrar_ingredientes(), ingredientes_extras(ingredientes_guardados), precio_del_pedido(precio_total) ) }>Seguir comprando</button>
                    </div>

                </div>              
                
            </div>
        );
    }
}