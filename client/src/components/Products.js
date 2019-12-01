import React, {useState} from 'react';
import PDFViewer from '../components/PDFViewer';
import {HashLink as Link} from "react-router-hash-link";

const ProductsInfo = () => {

    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(1);

    return (
        <div>
            <Link className='' to="/product#top" style={{ textDecoration: 'none',color:"black" }}>
                <h1>Our Documents:</h1>
            </Link>
            <div>
                <h2>Preview</h2>
                <div className='position-relative'>
                    <PDFViewer file={"/cream_one_pager.pdf"}/>
                </div>
                <div className='border border-info'>
                    <p>
                        Page <span className='font-weight-bolder'>{page}</span> of <span
                        className='font-weight-bolder'>{numPages}</span>
                    </p>
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