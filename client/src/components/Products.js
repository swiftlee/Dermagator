import React, {useState} from 'react';
import PDFViewer from '../components/PDFViewer';
import {HashLink as Link} from "react-router-hash-link";

const ProductsInfo = () => {

    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(1);

    return (
        <div>
            <Link className='' to="/product#top" style={{ textDecoration: 'none',color:"black" }}>
                <h1>Our Products</h1>
            </Link>
            <div>
                <h2>Product 1</h2>
                <div className='position-relative'>
                    <PDFViewer setPage={setPage} setNumPages={setNumPages}/>
                </div>
                <div className='border border-info'>
                    <p>
                        Page <span className='font-weight-bolder'>{page}</span> of <span
                        className='font-weight-bolder'>{numPages}</span>
                    </p>
                    <p>
                        Information on product
                    </p>
                    <p>
                        <Link to="/product">Order Now </Link>
                    </p>
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