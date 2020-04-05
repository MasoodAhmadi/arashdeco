import React from 'react';
import './main.scss'
import Particles from 'react-particles-js';
import Header from './Header';
import FacebookIcon from '@material-ui/icons/Facebook';
import Footer from './Footer';
import {Link} from 'react-router-dom';
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

                    <Footer/>
                    <div className="fc">

                    <FacebookIcon/>
                    </div>



                  </div>
            </div>
        )
    }
}
export default Home; 