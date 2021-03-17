import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import Layout from './Componentes/layout';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout >
          <Switch>
            <Route exact path="/" component={Home} /> 
          </Switch>
        </ Layout>
      </BrowserRouter>
    </div>
  );
}
export default App;
