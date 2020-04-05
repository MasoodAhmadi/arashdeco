import React from 'react';
import './main.scss'
import arash1 from  '../Image/arash1.jpg';
import arash2 from  '../Image/arash2.jpg';
import arash3 from  '../Image/arash3.jpg';
import arash4 from  '../Image/arash4.jpg';
import arash5 from  '../Image/arash5.jpg';
import fifth from  '../Image/fifth.jpg';

class Op extends React.Component {
    render() {
        return(
         <div className = "main">
            <div className = "table-holder">
                <div class="row">

                    <div class="col-md-4">
                        <div class="thumbnail">

                            <a href="/w3images/lights.jpg" target="_blank">
                            <div><p className="txt">Same simple</p></div>

                                <img src={arash1} alt= "Logo" className="imk"/>
                                    <div class="caption">
                                        <p className="txt">Helsinki Hall</p>
                                    </div>
                            </a>
                        </div>
                    </div>
                    <br></br>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <a href="/w3images/lights.jpg" target="_blank">
                                <img src={arash2} alt= "Logo" className="imk"/>
                                    <div class="caption">
                                        <p className="txt">Helsinki Hall</p>
                                    </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <a href="../Image/arash3.jpg" target="_blank">
                                <img src={arash3} alt= "Logo" className="imk"/>
                                    <div class="caption">
                                        <p className="txt"><center>Tampere City</center></p>
                                    </div>
                            </a>
                        </div>
                    </div>

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

