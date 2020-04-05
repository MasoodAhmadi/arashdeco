import React from 'react';
import './main.scss'
import Particles from 'react-particles-js';
import Header from './Header';
import Footer from './Footer';

//import {Button} from 'react-bootstrap';

import Op from './another';

const particlesOptions = {
    particles: {
      number: {
        value: 138,
        density: {
          enable: true,
          value_area: 800,
        }
      },
     
    },
   
}
class Home extends React.Component {
    render() {
        return(

            <div id="home_style">
                <Particles className='particles'
                params={particlesOptions}
                />
                  <div>
                    <Header/> 
                    <Op/> 
                    <div className = "table">
                <header>
                    <p>Footer</p>
                </header>
            </div>




                  </div>
            </div>
        )
    }
}
export default Home; 