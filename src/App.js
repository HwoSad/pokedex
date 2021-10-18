import React, { Component } from "react";

import { HashRouter as Router,Route,Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NevBar from "./components/layout/NevBar";
import Dashbord from "./components/layout/Dashbord";
import Pokemon from './components/pokemon/Pokemon';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App" >
        <NevBar />
        <div className="container">
          <Switch>
            <Route exact path ="/" component ={Dashbord} />
            <Route exact path ="/pokemon/:pokemonIndex" component ={Pokemon} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
