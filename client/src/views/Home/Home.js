import React from 'react';
import './Home.css';
import "react-pdf/dist/Page/AnnotationLayer.css";
import ProofOfConcepts from "../../components/ProofOfConcepts";
import ContactUs from "../../components/ContactUs";
import AboutUs from "../../components/AboutUs";
import ProductInfo from "../../components/Products"
import NavBar from "../../components/Header/NavBar";
import Slideshow from "../../components/Slideshow";
import InfoCard from "../../components/Home/Cards/InfoCard";

function Home() {
    return (
        <div className="text-center m-auto">
            <header id="welcome" className="Welcome">Welcome to DermaGator</header>
            <div className="page-element m-auto" style={{"padding": "0px",}}>
                <Slideshow/>
            </div>
            <div className='sticky-top mb-3'>
                <NavBar/>
            </div>
            <div className='row' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                 data-aos-mirror="true">
                <InfoCard title='STANDARD' subtitle='DermAssure 101' info='Detailed treatment conditions'
                          data-aos-offset='100'/>
                <InfoCard title='A.A. & M.C.' subtitle='Placeholder' info='FC.' data-aos-offset='200'/>
                <InfoCard title='STANDARD' subtitle='Placeholder' info='TC' data-aos-offset='300'/>
            </div>
            <div id='about' className='mb-5'>
                <AboutUs/>
            </div>
            <div id='proof-of-concept' className='mb-5' data-aos="fade" data-aos-duration='1000'>
                <ProofOfConcepts/>
            </div>
            <div id='product' className='mb-5' data-aos="fade" data-aos-duration='1000'>
                <ProductInfo/>
            </div>
            <div id='contact' className='mb-5'>
                <ContactUs/>
            </div>
        </div>
    );
}

export default Home;
