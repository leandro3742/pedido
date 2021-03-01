import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import Layout from './Componentes/layout';
import Home from './Pages/Home';
import Pedido from './Pages/nuevo_pedido';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout >
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/pedido" component={Pedido} />           
          </Switch>
        </ Layout>
      </BrowserRouter>
    </div>
  );
}
export default App;
