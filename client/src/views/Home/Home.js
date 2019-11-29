import React from 'react';
import './Home.css';
import "react-pdf/dist/Page/AnnotationLayer.css";
import ContactUs from "../../components/ContactUs";
import ProductInfo from "../../components/Products"
import NavBar from "../../components/Header/NavBar";
import Slideshow from "../../components/Slideshow";
import InfoCard from "../../components/Home/Cards/InfoCard";
import navItems from "../../utils/navItems";
import Footer from "../../components/Footer/Footer";
import {HashLink as Link} from "react-router-hash-link";
import data from "../../data/HomePage"
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
                          data-aos-offset='100' to="/product#standard"></InfoCard>
                <InfoCard title='A.A. & M.C.' subtitle='Placeholder' info='FC.' data-aos-offset='200' to="/product#aa_me"/>
                <InfoCard title='S.S' subtitle='Placeholder' info='TC' data-aos-offset='300' to="/product#ss"/>
            </div>
            <div id='about' className='mb-5 section-bg'>
                <Link className='' to="/about#top" style={{ textDecoration: 'none',color:"black" }}>
                    <div data-aos='fade-right' data-aos-duration="1000" className='AboutUs' id='home'>
                        <h1>{data.data[2].title}</h1>
                        <p>
                            {data.data[2].text}
                        </p>
                    </div>
                </Link>
            </div>
            <div id='product' className='mb-5 section-bg' data-aos="fade" data-aos-duration='1000'>
                <ProductInfo/>
            </div>
            <div id='contact' className='mb-5 section-bg' >
                <Link className='' to="/contact#top" style={{ textDecoration: 'none',color:"black" }}>
                    <div data-aos="fade-left" data-aos-duration='1000'>
                        <h1>{data.data[3].title}</h1>
                        <p>
                            {data.data[3].text}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
