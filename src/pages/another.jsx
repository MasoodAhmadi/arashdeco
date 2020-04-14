import React from 'react';
import './main.scss'
import arash1 from  '../Image/arash1.jpg';
import arash2 from  '../Image/arash2.jpg';
import arash3 from  '../Image/arash3.jpg';
import myprofile from  '../Image/myprofile.jpg';

//import arash4 from  '../Image/arash4.jpg';
import arash5 from  '../Image/arash5.jpg';
//import fifth from  '../Image/fifth.jpg';

class Op extends React.Component {
    render() {
        return(
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
                 <div class="mar">
                <div class="gal">
                    <a target="_blank" href="img_5terre.jpg">
                    <img src={arash1} alt= "arash1"/>
                    </a>
                    <div class="desc">Add a description of the image here</div>
                </div>
                <div class="gal">
                    <a target="_blank" href="img_5terre.jpg">
                    <img src={arash5} alt= "arash1"/>
                    </a>
                    <div class="desc">Add a description of the image here</div>
                </div>
                <div class="gal">
                    <a target="_blank" href="img_5terre.jpg">
                    <img src={arash3} alt= "arash1"/>
                    </a>
                    <div class="desc">Add a description of the image here</div>
                </div>
                </div>
            </div>

        )
    }
}
export default Op; 
/**
 * 
 *                     <div class="col-md-4">
 <div class="thumbnail">
     <a href="../Image/arash4.jpg">
         <img src={arash4} alt= "Logo" className="imk"/>
             <div class="caption">
                 <p>Tampere City</p>
             </div>
     </a>
 </div>
</div>
<div class="col-md-4">
<div class="thumbnail">
 <a href="/w3images/lights.jpg" target="_blank">
     <img src={arash5} alt= "Logo" className="imk"/>
         <div class="caption">
             <p>Tampere City</p>
         </div>
 </a>
</div>
<div class="col-md-4">
<div class="thumbnail">
 <a href="/w3images/lights.jpg" target="_blank">
     <img src={fifth} alt= "Logo" className="imk"/>
         <div class="caption">
             <p>Tampere City</p>
         </div>
 </a>
</div>
</div>
 */

