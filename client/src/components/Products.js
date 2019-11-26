import React from 'react';
import ProductsPage from "../views/ProductPage/ProductPage";
import PDFViewer from '../components/PDFViewer';
import {HashLink as Link} from "react-router-hash-link";
const ProductsInfo = () => {
    
    return (
        <div>
            <Link className='' to="/product#top" style={{ textDecoration: 'none',color:"black" }}>
                <h1>Our Products</h1>
            </Link>
            <div>
                <h2>Product 1</h2>
                <div className='position-relative'>
                    <PDFViewer/>
                </div>
                <p>
                    Information on product
                </p>
                
                <a href="/product#standard">Order Now </a>
            </div>
        </div>
    );
};

export default ProductsInfo;