import React, { useState } from 'react';
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

  React.useEffect(() => {
    const onKey = (e) => {
      if(e.ctrlKey && e.key === '`') {
        setCommandHidden(value => !value);
      }
    }

    document.addEventListener('keydown', onKey);

    return () => document.removeEventListener('keydown', onKey);
  }, [])

  return (
    <div className="home">
      <Particles params={ParticleParams} />
      <p className="title">ENGAGE PRODUCTIONS</p>
      <Nav />
      <Switch>
        <Route path="/events" component={Events} />
        <Route path="/about" component={About} />
      </Switch>
      <CommandLine hidden={commandHidden}/>
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
