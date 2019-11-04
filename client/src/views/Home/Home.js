import React from 'react';
import './Home.css';
import ProofOfConcepts from "../../components/ProofOfConcepts";
import ContactUs from "../../components/ContactUs";
import AboutUs from "../../components/AboutUs";
import ProductInfo from "../../components/Products"
import NavBar from "../../components/Header/NavBar";

function Home() {
    return (
        <div className="App">
            <div className='mb-5 sticky-top'>
                <NavBar/>
            </div>
            <div id='about' className='mb-5'>
                <AboutUs/>
            </div>
            <div id='proof-of-concept' className='mb-5'>
                <ProofOfConcepts/>
            </div>
            <div id='product' className='mb-5'>
                <ProductInfo/>
            </div>
            <div id='contact' style={{marginTop:"50rem"}}> {/*REMOVE STYLE WHEN DONE TESTING*/}
                <ContactUs/>
            </div>
        </div>
    );
}

export default Home;
