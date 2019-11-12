import React from 'react';
import PDFViewer from '../components/PDFViewer';

const ProductsInfo = () => {
    return (
        <div>
            <h1>We Produce the Following Products</h1>
            <div>
                <h2>Product 1</h2>
                <PDFViewer/>
                <p>
                Information on product
                </p>
                <a href="">Link to Ordering </a>
            </div>
        </div>
    );
};

export default ProductsInfo;