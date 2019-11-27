import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from "../data/AboutUsHomepage";
AOS.init();
const AboutUs = () => {
    return (
        <div data-aos='fade-right' data-aos-duration="1000" className='AboutUs' id='home'>
            <h1>{data.title}</h1>
            <p>
                {data.text}
            </p>
        </div>
    );
};

export default AboutUs;