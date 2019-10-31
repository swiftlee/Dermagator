import React from 'react';
import './Home.css';
import ProofOfConcepts from "../../components/ProofOfConcepts";
import ContactUs from "../../components/ContactUs";
import AboutUs from "../../components/AboutUs";

function Home() {
    return (
        <div className="App">
            <AboutUs/>
            <ProofOfConcepts/>
            <ContactUs/>
        </div>
    );
}

export default Home;
