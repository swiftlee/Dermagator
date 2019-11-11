import React from 'react';
import './WhitePaper.css';
import NavBar from '../../components/Header/NavBar';
const WhitePaper=()=>{
    return(
        <div className="main">
            <div className='sticky-top'>
                <NavBar/>
            </div>
            <h1> Documents </h1>
            <div className="first-page">
                <p> This is where a pdf viewer will be with the file to present</p>
                <img src='/logo192.png' alt='This is replacement text if an image does not display.'/>
            </div>
            <div className="second-page">
                <p>
                    This is where another pdf viewer will be with the file to present
                </p>
                <img src='/logo192.png' alt='This is replacement text if an image does not display.'/>
            </div>

        </div>
    );

};
export default WhitePaper;  