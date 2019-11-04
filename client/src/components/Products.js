import React from 'react';

const ProductsInfo = () => {
    return (
        <div>
            <h1>We Produce the following Products</h1>
            <div>
                <h2>Product 1</h2>
                <img src='/logo192.png' alt='This is replacement text if an image does not display.'/>
                <p>
                Information on product
                </p>
                <a href={/*Place holder: put link to the product's pharmacy page/section here */}> Link to Ordering </a>
            </div>
           {/*We can expand this later with the other products that they sell */}
           
        </div>
    );
}

export default ProductsInfo;