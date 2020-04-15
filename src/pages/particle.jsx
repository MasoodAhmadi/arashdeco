import React from 'react';
import Particles from 'react-particles-js';
import './main.scss';

class Particle extends React.Component {
    render() {
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
        return(
            <div className="home_style">
                <Particles 
                  params={particlesOptions}
                  />
            </div>
        )
    }
}
export default Particle;