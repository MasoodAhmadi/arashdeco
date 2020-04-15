import React from 'react';
import './main.scss'
import Header from './Header';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import myprofile from  '../Image/myprofile.jpg';


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
                            <h2>Arash Ahmadi</h2>
                            <h2 className="title">CEO</h2>
                            <p><center>Qualified party organizer</center></p>
                            <p><center>arashahmadi@gmail.com</center></p>
                        </div>
                      </div>
                    </div>          
                  </div>
                  <IconButton className = "fb" >
                   <FacebookIcon/>
                  </IconButton>
                
                  <IconButton  >
                    <InstagramIcon/>
                  </IconButton>

                  <IconButton >
                    <YouTubeIcon/>
                  </IconButton>
                
                
            </div>

        )
    }
}
export default Home; 