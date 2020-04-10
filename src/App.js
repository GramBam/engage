import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

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

function App() {
  return (
    <div class="home">
      <p className="title">ENGAGE PRODUCTIONS</p>
      <Particles params={params}/>
    </div>
  );
}

export default App;
