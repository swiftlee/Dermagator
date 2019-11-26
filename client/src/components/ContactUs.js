import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from "../data/ContactUsHomepage";
AOS.init();
const ContactUs = () => {
    return (
        <div data-aos="fade-left" data-aos-duration='1000'>
            <h1>{data.title}</h1>
            <p>
                {data.text}
            </p>
        </div>
    );
};

export default ContactUs;