import React from "react"
import Standard from "../../components/Product/Standard";
import AA_ME from "../../components/Product/AA_ME";
import SS from "../../components/Product/SS";
import NavBar from "../../components/Header/NavBar";
import navItems from "../../utils/navItems";
import Footer from "../../components/Footer/Footer";

function ProductPage() {
    return (

        <div className="text-center m-auto">
            <header id="welcome" className="Welcome">Products</header>
            <div className="page-element m-auto" style={{"padding": "0px",}}></div>
            <div className='sticky-top mb-3'>
                <NavBar items={navItems['product-bar']}/>
            </div>
            <div id='standard' className='mb-5'>
                <Standard/>
            </div>
            <div id='aa_me' className='mb-5' data-aos="fade" data-aos-duration='1000'>
                <AA_ME/>
            </div>
            <div id='ss' className='mb-5' data-aos="fade" data-aos-duration='1000'>
                <SS/>
            </div>
            <div id='order' className='mb-5'>
                {/* <Order/> */}
            </div>
            <Footer/>
        </div>
    );
}

export default ProductPage