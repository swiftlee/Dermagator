import React, { useState } from 'react';
import './Editor.css';
import HomeForm from '../../Forms/HomeForm';
import UpdateAboutForm from "../../About/UpdateAboutForm"
import UpdateProductForm from "../../Product/UpdateProductForm"
import UpdateFooterForm from "../../Footer/UpdateFooterForm"
import UpdatePDFS from "../../PDFViewer/UpdatePDFS"
import {HashLink as Link} from 'react-router-hash-link'
import AddImageForm from "../../Forms/AddImageForm";

const Editor = (props) => {
    
    const [home, setHome] = useState(true);
    const [about, setAbout] = useState(false);
    const [product, setProduct] = useState(false);
    const [footer, setFooter] = useState(false);
    const [pdfs, setPDFs] = useState(false);
    const [images, setImages] = useState(false);

    return (

        <div data-aos="fade-up" data-aos-duration='1000'>
            <hr/>

            <div className="row sticky-top">
                <h1>Website Editor</h1>
            </div>


            <div className="row">
                <div className="column left col-lg-2 col-sm-8 col-md-4">
                    <div className="vertical-menu sticky-top" style={{top: '10%'}}>
                       
                       <a onClick={() => {setHome(true); setAbout(false); setProduct(false); setFooter(false); setPDFs(false); setImages(false);}}
                        href="/dashboard#Home">
                            Home
                        </a>
                        
                        <a onClick={() => {setHome(false); setAbout(true); setProduct(false); setFooter(false); setPDFs(false); setImages(false);}}
                        href="/dashboard#About">
                            About
                        </a>
                        
                        <a onClick={() => {setHome(false); setAbout(false); setProduct(true); setFooter(false); setPDFs(false); setImages(false);}}
                        href="/dashboard#Product">
                            Product
                        </a>
                        
                        <a onClick={() => {setHome(false); setAbout(false); setProduct(false); setFooter(true); setPDFs(false); setImages(false);}}
                        href="/dashboard#Footer">
                            Footer
                        </a>
                       
                        <a onClick={() => {setHome(false); setAbout(false); setProduct(false); setFooter(false); setPDFs(true); setImages(false);}}
                        href="/dashboard#PDFS">
                            PDFS
                        </a>

                        <a onClick={() => {setHome(false); setAbout(false); setProduct(false); setFooter(false); setPDFs(false); setImages(true);}}
                           href="/dashboard#Images">
                            Images
                        </a>
                    </div>
                </div>

                <div className="column right col-lg-10 col-sm-5 col-md-8 pl-5">
                    {home ?
                        <div data-aos="fade-up" data-aos-duration='1000'>
                            <HomeForm/>
                        </div> 
                        : null
                    }

                    {about ?
                        <div data-aos="fade-up" data-aos-duration='1000'>
                            <UpdateAboutForm/>
                        </div> 
                        : null
                    }

                    {product ?
                        <div data-aos="fade-up" data-aos-duration='1000'>
                            <UpdateProductForm/>
                        </div> 
                        : null
                    }

                    {footer ?
                        <div data-aos="fade-up" data-aos-duration='1000'>
                            <UpdateFooterForm/>
                        </div> 
                        : null
                    }

                    {pdfs ?
                        <div data-aos="fade-up" data-aos-duration='1000'>
                            <UpdatePDFS/>
                        </div> 
                        : null
                    }

                    {
                        images ?
                            <div data-aos='fade-up' data-aos-duration='1000'>
                                <AddImageForm token={props.jwt}/>
                            </div> : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Editor;
