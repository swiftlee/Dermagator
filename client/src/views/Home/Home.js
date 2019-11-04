import React from 'react';
import './Home.css';
import ProofOfConcepts from "../../components/ProofOfConcepts";
import ContactUs from "../../components/ContactUs";
import AboutUs from "../../components/AboutUs";
import ProductInfo from "../../components/Products"

function Home() {
    return (
        <div className="App">
            <AboutUs/>
            <ProofOfConcepts/>
            <ContactUs/>
            <ProductInfo/>
        </div>
    );
}

export default Home;
