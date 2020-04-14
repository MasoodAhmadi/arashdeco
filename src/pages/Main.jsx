import React from 'react';
import './main.scss'
import Particles from 'react-particles-js';
import Header from './Header';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import myprofile from  '../Image/myprofile.jpg';

//import Footer from './Footer';
//import {Link} from 'react-router-dom';
//import {Button} from 'react-bootstrap';

import Op from './another';

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
class Home extends React.Component {
    render() {
        return(

            <div className="home-style">
                <Particles className='particles'
                  params={particlesOptions}
                  />
                <Header/>
                <div class="dv">
                <div class="column">
                    <div className="card">
                        <img src={myprofile} alt= "myprofile"/>
                            <div class="container">
                                <h2>Arash Ahmadi</h2>
                                    <p class="title">CEO</p>
                                    <p>Qualified party organizer</p>
                                    <p>arashahmadi@gmail.com</p>
                                    <p><button class="button">Contact</button></p>
                            </div>
                    </div>
                    </div>
                    </div>


                <Op/>


                <IconButton  className = "fb">
                  <FacebookIcon/>
                </IconButton>
                
                <IconButton  className = "inst">
                <InstagramIcon/>
                </IconButton>

                <IconButton  className = "yout">
                <YouTubeIcon/>
                </IconButton>
                

            </div>

        )
    }
}
export default Home; 