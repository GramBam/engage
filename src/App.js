import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Nav from './Nav';
import {
  Switch,
  Route,
} from "react-router-dom";
import Events from './Events';
import About from './About';

function App() {
  return (
    <div className="home">
      <p className="title">ENGAGE PRODUCTIONS</p>
      <Nav />
        <Switch>
          <Route path="/events" component={Events} />
          <Route path="/about" component={About} />
        </Switch>
      <Particles params={params} />
    </div>
  );
}

export default App;

const params = {
  "particles": {
    "number": {
      "value": 69
    },
    "size": {
      "value": 3
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
}
