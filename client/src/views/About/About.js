import React from 'react';
import './About.css';
import NavBar from '../../components/Header/NavBar';
import InfoCard from "../../components/Home/Cards/InfoCard";
import navItems from "../../utils/navItems";
import {data} from "../../data/AboutPage"

const About = () => {
    return (
        <div className="text-center m-auto">
            <NavBar items={navItems['about-bar']}/>
            <div className='row mb-5' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                 data-aos-mirror="true" id='mission'>
                <h1>{data[0].name}</h1>
                <p>
                    {data[0].text}
                </p>
            </div>
            <div className='row mb-5' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                 data-aos-mirror="true" id='ourstory'>
                <h1>{data[1].name}</h1>
                <p>
                    {data[1].text}
                </p>
            </div>
            <div className='row mb-5' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                 data-aos-mirror="true" id='partners'>
                <h1>{data[2].name}</h1>
                <p>
                    {data[2].text}
                </p>
            </div>
            <div className='mb-5-nobox' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                 data-aos-mirror="true" id='team'>
                <h1>{data[3].name}</h1>
                <div style={{display: 'flex', flexDirection: 'row'}} className="text-center">
                    <InfoCard title={data[3].team[0].personName} subtitle='' info={data[3].team[0].info} data-aos-offset='0' style={{flex: 1}}
                              className='row mb-5 '/>
                    <InfoCard title={data[3].team[1].personName} subtitle='' info={data[3].team[1].info} data-aos-offset='0' style={{flex: 1}}
                              className='row mb-5'/>
                </div>
            </div>
        </div>
    );

};
export default About;  