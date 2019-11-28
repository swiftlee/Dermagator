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
import navItems from "../../utils/navItems";
import Footer from "../../components/Footer/Footer";
import {HashLink as Link} from "react-router-hash-link";

const Home = (props) => {
    return (
        document.body.style = 'background: white',
        <div className="text-center m-auto">
            <header id="top" className="Welcome">Welcome to DermaGator</header>
            <div className="page-element m-auto" style={{"padding": "0px",}}>
                <Slideshow/>
            </div>
            <NavBar items={navItems["home-bar"]}/>
            <div className='infocards' data-aos="fade" data-aos-duration='1000' data-aos-easing="ease-in-out"
                 data-aos-mirror="true">
                <InfoCard title='STANDARD' subtitle='DermAssure 101' info='Detailed treatment conditions'
                          data-aos-offset='100'/>
                <InfoCard title='A.A. & M.C.' subtitle='Placeholder' info='FC.' data-aos-offset='200'/>
                <InfoCard title='STANDARD' subtitle='Placeholder' info='TC' data-aos-offset='300'/>
            </div>
            <div id='about' className='mb-5 section-bg'>
                <Link className='' to="/about#top" style={{ textDecoration: 'none',color:"black" }}>
                    <AboutUs/>
                </Link>
            </div>
            <div id='proof-of-concept' className='mb-5 section-bg' data-aos="fade" data-aos-duration='1000'>
                <ProofOfConcepts/>
            </div>
            <div id='product' className='mb-5 section-bg' data-aos="fade" data-aos-duration='1000'>
                <ProductInfo/>
            </div>
            <div id='contact' className='mb-5 section-bg' >
                <Link className='' to="/contact#top" style={{ textDecoration: 'none',color:"black" }}>
                    <ContactUs />
                </Link>
            </div>
        </div>
    );
};

export default Home;
