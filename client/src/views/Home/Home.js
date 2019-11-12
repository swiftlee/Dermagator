import React from 'react';
import './Home.css';
import "react-pdf/dist/Page/AnnotationLayer.css";
import ProofOfConcepts from "../../components/ProofOfConcepts";
import PDFViewer from '../../components/PDFViewer';
import PDFJSBackend from '../../backends/pdfjs';
import ContactUs from "../../components/ContactUs";
import AboutUs from "../../components/AboutUs";
import ProductInfo from "../../components/Products"
import NavBar from "../../components/Header/NavBar";

function Home() {
    return (
        <div className="App">
            <div className='sticky-top'>
                <NavBar/>
            </div>
            <header id="Welcome" className="Welcome">Welcome to DermaGator</header>
            <div id='about'className='mb-5'>
                <AboutUs/>
            </div>
            <div id='proof-of-concept' className='mb-5'>
                <ProofOfConcepts/>
            </div>
            <div id='pdf-viewer' className='mb-5'>
                <PDFViewer/>
            </div>
            <div id='product' className='mb-5'>
                <ProductInfo/>
            </div>
            <div  id='contact' className= 'mb-5' name='contact' style={{marginTop:"50rem"}}> {/*REMOVE STYLE WHEN DONE TESTING*/}
                <ContactUs/>
            </div>
        </div>
    );
}

export default Home;
