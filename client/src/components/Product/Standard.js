import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

const Standard = () => {
    return (
        <div data-aos='fade-right' data-aos-duration="1000" className='standard' id='productpage'>
            <h1>Standard</h1>
            <p> DermAssure 101: ... </p>
            <p> Treatment Conditions: ... </p>
            <p> Product Ingredients: ... </p>
            <p> Prescribing Information: ... </p>
        </div>
    );
};

export default Standard;