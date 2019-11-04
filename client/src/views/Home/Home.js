import React from 'react';
import './Home.css';
import ProofOfConcepts from "../../components/ProofOfConcepts";
import ContactUs from "../../components/ContactUs";
import AboutUs from "../../components/AboutUs";
<<<<<<< HEAD
import ProductInfo from "../../components/Products"
=======
import NavBar from "../../components/Header/NavBar";
>>>>>>> 6aae3957a07ad40844beb6835146c16f0f751269

function Home() {
    return (
        <div className="App">
<<<<<<< HEAD
            <AboutUs/>
            <ProofOfConcepts/>
            <ContactUs/>
            <ProductInfo/>
=======
            <div className='mb-5 sticky-top'>
                <NavBar/>
            </div>
            <div id='about' className='mb-5'>
                <AboutUs/>
            </div>
            <div id='proof-of-concept' className='mb-5'>
                <ProofOfConcepts/>
            </div>
            <div id='contact' style={{marginTop:"50rem"}}> {/*REMOVE STYLE WHEN DONE TESTING*/}
                <ContactUs/>
            </div>
>>>>>>> 6aae3957a07ad40844beb6835146c16f0f751269
        </div>
    );
}

export default Home;
