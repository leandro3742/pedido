import React, { useState } from 'react';
import './Styles/Guardar_mesa.css';


const Guardar_mesa = (props) => {
    const [state, setState] = useState("Elija una mesa");

    function HandleChange(event){
        console.log(event.target.value);
        setState(event.target.value);
        guardar_mesa(event.target.value);
    }

    function mandar_mensaje(){
        guardar_mesa(state);
    }

    const { guardar_mesa } = props;
    
    return (
        <div className="contenedor_form">
            <form className="formulario_mesa" >
                <span className="label">Elije el numero de tu mesa: </span> 
                <select className="opciones" value={state} onChange={HandleChange}>
                    <option value="elegir una mesa">Elija una mesa</option>
                    <option value="1">Mesa 1</option>
                    <option value="2">Mesa 2</option>
                    <option value="3">Mesa 3</option>
                    <option value="4">Mesa 4</option>
                </select>
                <button className="boton_form" onClick={ () => mandar_mensaje()}>Seguir comprando</button>
            </form>
        </div>
    );
}
export default Guardar_mesa;
// export default class Guardar_mesa extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'coconut'};  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       console.log(this.state.value);
//       event.preventDefault();
//     }
  
//     render() {        
//         return (
//         <form onSubmit={this.handleSubmit} className="formulario_mesa">
//           <label className="label">
//             Elije el numero de tu mesa: 
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="grapefruit">Grapefruit</option>
//               <option value="lime">Lime</option>
//               <option value="coconut">Coconut</option>
//               <option value="mango">Mango</option>
//             </select>
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
