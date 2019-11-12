import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();
const AboutUs = () => {
    return (
        <div data-aos='fade-right' data-aos-duration="1000" className='AboutUs' id='home'>
            <h1>About the Company</h1>
            <p>
                This is a placeholder for the information for the company this might gain some links to the employees
                sections and more directly to
                specific employees and may products if they want us to mention them here.
            </p>
        </div>
    );
};

export default AboutUs;