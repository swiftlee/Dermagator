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
            {
                data.map(stuff=>{
                    if(stuff.type==="section"){return(
                        <div className='row mb-5' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                        data-aos-mirror="true" id='mission'>
                        <h1>{stuff.name}</h1>
                        <p>
                            {stuff.text}
                        </p>
                        </div>
                    )
                    }
                    else{
                        return(
                            <div className='mb-5-nobox' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                                data-aos-mirror="true" id='team'>
                                <h1>{data[3].name}</h1>
                                <div style={{display: 'flex', flexDirection: 'row'}} className="text-center">
                                    {stuff.team.map(information=>(
                                        <InfoCard title={information.personName} subtitle='' info={information.info} data-aos-offset='0' style={{flex: 1}}
                                        className='row mb-5 '/>
                                    ))}
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    );

};
export default About;  