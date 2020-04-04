
import React from 'react';
import Img from 'react-image';
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
                                <img src={arash1} alt= "Logo" className="imk"/>
                                    <div class="caption">
                                        <p>Helsinki</p>
                                    </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <a href="/w3images/lights.jpg" target="_blank">
                                <img src={arash2} alt= "Logo" className="imk"/>
                                    <div class="caption">
                                        <p>Helsinki Hall</p>
                                    </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="thumbnail">
                            <a href="/w3images/lights.jpg" target="_blank">
                                <img src={arash3} alt= "Logo" className="imk"/>
                                    <div class="caption">
                                        <p>Tampere City</p>
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

