import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Grilla from "./Components/Grilla";
import MenuDeOpciones from "./Components/MenuDeOpciones";
import Detalle from "./Components/Detalle";

class App extends Component {
  render() {
    return (
      <div>
        <MenuDeOpciones></MenuDeOpciones>
        <Switch>
          <Route exact path="/grilla" component={Grilla}></Route>
          <Route path="/detalleArticulo/:id" component={Detalle}></Route>
          <Route path="/grilla/:type/:codigo" component={Grilla}></Route>
          <Route path="/" component={Grilla}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;