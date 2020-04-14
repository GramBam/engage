import React, { useState, useEffect } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Nav from './Nav';
import {
  Switch,
  Route,
} from "react-router-dom";
import Events from './Events';
import About from './About';
import CommandLine from './CommandLine';

function App() {
  const [commandHidden, setCommandHidden] = useState(true);

  useEffect(() => {
    const onKey = (e) => {
      if (e.ctrlKey && e.key === '`') {
        setCommandHidden(value => !value);
      }
    }

    document.addEventListener('keydown', onKey);

    return () => document.removeEventListener('keydown', onKey);
  }, [])

  return (
    <div className="main">
      <Particles params={ParticleParams} />
      <header>
        <p className="title">ENGAGE PRODUCTIONS</p>
        <Nav />
      </header>
      <div className="content-wrapper">
        <Switch>
          <Route path="/events" component={Events} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
      <CommandLine hidden={commandHidden} />
    </div>
  );
}

export default App;

const ParticleParams = {
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
