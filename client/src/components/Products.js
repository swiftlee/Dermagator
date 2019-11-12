import React from 'react';
import ProductsPage from "../views/ProductPage/ProductPage";

const ProductsInfo = () => {
    
    return (
        <div>
            <h1>Our Products</h1>
            <div>
                <h2>DermAssure Cream</h2>
                <img src='/logo192.png' alt='This is replacement text if an image does not display.'/>
                <p>
                Information on product
                </p>
                
                <a href="/ProductPage">Order Now </a>
            </div>
           
        </div>
    );
};

export default ProductsInfo;