import React from 'react';
import PDFViewer from '../components/PDFViewer/PDFViewer';
import {HashLink as Link} from "react-router-hash-link";
import data from "../data/PDFS";

const ProductsInfo = () => {
    var getKey;
    for (var key in data) {
        getKey = key;
        break;
    }

    return (
        <div>
            <Link className='' to="/whitepages#top" style={{ textDecoration: 'none',color:"black" }}>
                <h1>Our Documents:</h1>
            </Link>
            <div>
                <h2>Preview</h2>
                <div className='position-relative'>
                    <PDFViewer file={data[getKey][0].file}/>
                </div>
                <div className='border border-info'>
                    <p>
                        For more Information:
                    </p>
                    <p>
                        <Link to="/whitepages">See All Documents</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductsInfo;