import React from 'react';
import './App.css';
import Home from './pages/Main';
//import {Switch,Route} from 'react-router-dom';
import Particles from 'react-particles-js';


function App() {
  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 1000,
        }
      },
      "color": {
        "value": "#FFF"
      }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
    }
  }
  return (
    <div className="home-style">
    <Particles className='particles'
    params={particlesOptions}
    />

    <Home/>
    </div>

   
  );
}

export default App;
