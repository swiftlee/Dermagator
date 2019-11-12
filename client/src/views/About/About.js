import React from 'react';
import './About.css';
import NavBar from '../../components/Header/NavBar';

const About=()=>{
    return(
        <div>
            <div className='sticky-top'>
                <NavBar/>
            </div>
                <div className='row mb-5' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                 data-aos-mirror="true">
                <h1>MISSION TEXT</h1>
                <p>
                    Placeholder for information regarding mission for DermaGator.
                </p>
                </div>
                <div className='row mb-5' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                 data-aos-mirror="true">
                <h1>OUR STORY TEXT</h1>
                <p>
                    Placeholder for information regarding story for DermaGator.
                </p>
                </div>
                <div className='row mb-5' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                 data-aos-mirror="true">
                <h1>PARTNERS TEXT</h1>
                <p>
                    Placeholder for information regarding partners for DermaGator.
                </p>
                </div>
                <div className='row mb-5' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                 data-aos-mirror="true">
                <h1>TEAM TEXT</h1>
                </div>
        </div>
    );

};
export default About;  