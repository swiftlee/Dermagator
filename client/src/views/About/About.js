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
                    
                    if(stuff.type==="section"){
                        console.log(stuff.text);
                        return(
                        <div className='row mb-5' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                        data-aos-mirror="true" id={stuff.id}>
                        <h1>{stuff.name}</h1>
                        <p>
                            {stuff.text.split("\n").map((i,key)=>{
                                return <div key={key}>{i}</div>
                            })}
                        </p>
                        </div>
                    )
                    }
                    else{
                        return(
                            <div className='mb-5-nobox' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                                data-aos-mirror="true" id='team'>
                                <h1>{stuff.name}</h1>
                                <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",width:"90%"}} >
                                    {stuff.team.map((information,index)=>{
                                        {
                                            if((stuff.team.length%2) && index===(stuff.team.length-1)){
                                                console.log(stuff.team.length)
                                                console.log("Hello")
                                                return <div className="row"><div style={{display: 'flex', flexDirection: 'row', justifyContent:"",alignItems:"stretch",width:"500px"}}className="text-center"><InfoCard title={information.personName} subtitle='' info={information.info.split("\n").map((i,key)=>{
                                                    return <div key={key}>{i}</div>})} data-aos-offset='0' style={{flex: 1}}
                                                className='row mb-5 '/> </div></div>
                                            }
                                            else{
                                                
                                        return index % 2 ?
                                        <div className="row">
                                        <view style={{display: 'flex', flexDirection: 'row', justifyContent:"",alignItems:"stretch",width:"1000px"}} className="text-center" key={index}>
                                            <InfoCard title={stuff.team[index-1].personName} subtitle='' info={stuff.team[index-1].info.split("\n").map((i,key)=>{
                                                console.log("index",index)
                                                return <div key={key}>{i}</div>})} data-aos-offset='0' margin ="mr-3" style={{flex: 1}}
                                                className='row mb-5 '/>  
                                            <InfoCard title={information.personName} subtitle='' info={information.info.split("\n").map((i,key)=>{
                                                return <div key={key}>{i}</div>})} data-aos-offset='0' style={{flex: 1}}
                                                className='row mb-5 '/> 
                                        </view>
                                        </div>
                                        :'';
                                        }}})}
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
