import React from 'react';
import './About.css';
import NavBar from '../../components/Header/NavBar';
const About=()=>{
    return(
        <div className="text-center m-auto">
            <div className='sticky-top'>
                <NavBar/>
            </div>

            <div className="sectionTitle">
                <h1>MISSION TEXT</h1>
                <p>
                    Placeholder for information regarding mission for DermaGator.
                </p>
            </div>
            <div>
                <h1>OUR STORY TEXT</h1>
                <p>
                    Placeholder for information regarding story for DermaGator.
                </p>
            </div>
            <div>
                <h1>PARTNERS TEXT</h1>
                <p>
                    Placeholder for information regarding partners for DermaGator.
                </p>
            </div>
            <div>
                <h1>TEAM TEXT</h1>
                <p>
                    Placeholder for information regarding the team for DermaGator.
                </p>
            </div>

        </div>
    );

};
export default About;  