import React from 'react';
import ProductsPage from "../views/ProductPage/ProductPage";
import PDFViewer from '../components/PDFViewer';

const ProductsInfo = () => {
    
    return (
        <div>
            <h1>Our Products</h1>
            <div>
                <h2>Product 1</h2>
                <div className='position-relative'>
                    <PDFViewer/>
                </div>
                <p>
                    Information on product
                </p>
                
                <a href="/ProductPage">Order Now </a>
            </div>
        </div>
    );
};

export default ProductsInfo;