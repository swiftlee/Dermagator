import React from 'react';
import './NotFound.css';
import {HashLink as Link} from 'react-router-hash-link'

function NotFound() {


        return (
                document.body.style = 'background: #72b9ff',
<div className = "container">
                <Link to= '/home'>
                <img src='/assets/home-404.png' className= 'home'
                alt='This is replacement text if this does not display.'/>
                </Link>

                <div className = "cont">
                <span className="number">4</span>
                <span className="number">
                <div className="circle">
                        <div className="drops"></div>
                        <div className="drops"></div>
                        <div className="hand"></div>
                        <div className="hand rgt"></div>
                                <div className="holder">
                                        <div className="bob">
                                                <div className="nose"></div>
                                                <div className="face">
                                                <div className="mouth">
                                                <div className="tongue"></div>
                                        </div>
                                </div>
                                <div className="ear"></div>
                                <div className="ear rgt"></div>
                                <div className="neck"></div>
                                        </div>
                                </div>
                </div>
                </span>
        <span className="number">4</span>
        </div>
         <div className = "row">
         <div className = "col-12">
         <h1 className = "text">Page Not Found</h1>
         </div>
         </div>
</div> 
     );
}

export default NotFound;
