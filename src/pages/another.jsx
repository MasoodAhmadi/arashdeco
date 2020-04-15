import React from 'react';
import './main.scss'
import arash1 from  '../Image/arash1.jpg';
//import arash2 from  '../Image/arash2.jpg';
import arash3 from  '../Image/arash3.jpg';
//import arash4 from  '../Image/arash4.jpg';
import arash5 from  '../Image/arash5.jpg';
//import fifth from  '../Image/fifth.jpg';

class Op extends React.Component {
    render() {
        return(

                 <div class="mar">
                    <div class="gal">
                        <a target="_blank" href="img_5terre.jpg">
                        <img src={arash1} alt= "arash1"/>
                        </a>
                    <div class="desc">Bride and groom chair seat</div>
                </div>
                <div class="gal">
                        <a target="_blank" href="img_5terre.jpg">
                        <img src={arash5} alt= "arash1"/>
                        </a>
                    <div class="desc">Hall sample design in Helsinki</div>
                </div>
                <div class="gal">
                        <a target="_blank" href="img_5terre.jpg">
                        <img src={arash3} alt= "arash1"/>
                        </a>
                    <div class="desc">Stage for only bride and groom</div>
                </div>
                </div>

        )
    }
}
export default Op; 
