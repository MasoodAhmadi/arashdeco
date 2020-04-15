import React from 'react';
import './main.scss'
import Header from './Header';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import myprofile from  '../Image/myprofile.jpg';
import Images from './Images';


class Home extends React.Component {
    render() {
        return(
            <div >
                
                <Header/>
                  <div className="row">
                    <div className= "">
                      <div className="card">
                        <img src={myprofile} alt= "myprofile"/>
                        <div className="container">
                            <h2><small>Arash Ahmadi</small></h2>
                            <p><center>Qualified party organizer</center></p>
                            <p><center>arashahmadi@gmail.com</center></p>
                        </div>
                      </div>
                     
                    </div>          
                  </div>
                  <Images/>

                 <div className="fb">
                        <IconButton>
                        <FacebookIcon/>
                        </IconButton>
                
                        <IconButton  >
                          <InstagramIcon/>
                        </IconButton>

                        <IconButton >
                          <YouTubeIcon/>
                        </IconButton>
                
                        </div>
            </div>

        )
    }
}
export default Home; 