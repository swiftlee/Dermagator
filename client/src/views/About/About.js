import React from 'react';
import './About.css';
import NavBar from '../../components/Header/NavBar';
import InfoCard from "../../components/Home/Cards/InfoCard";
import navItems from "../../utils/navItems";


const About = () => {
    return (
        <div className="text-center m-auto">
            <NavBar items={navItems['about-bar']}/>
            <div className='row mb-5' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                 data-aos-mirror="true" id='mission'>
                <h1>MISSION TEXT</h1>
                <p>
                    Placeholder for information regarding mission for DermaGator.
                </p>
            </div>
            <div className='row mb-5' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                 data-aos-mirror="true" id='ourstory'>
                <h1>OUR STORY TEXT</h1>
                <p>
                    Placeholder for information regarding story for DermaGator.
                </p>
            </div>
            <div className='row mb-5' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                 data-aos-mirror="true" id='partners'>
                <h1>PARTNERS TEXT</h1>
                <p>
                    Placeholder for information regarding partners for DermaGator.
                </p>
            </div>
            <div className='mb-5-nobox' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                 data-aos-mirror="true" id='team'>
                <h1>TEAM TEXT</h1>
                <div style={{display: 'flex', flexDirection: 'row'}} className="text-center">
                    <InfoCard title='Guy 1' subtitle='' info='info1' data-aos-offset='0' style={{flex: 1}}
                              className='row mb-5 '/>
                    <InfoCard title='Guy 2' subtitle='' info='info2' data-aos-offset='0' style={{flex: 1}}
                              className='row mb-5'/>
                </div>
            </div>
        </div>
    );

};
export default About;  