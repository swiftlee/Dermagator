import React from 'react';
import './Editor.css';
import HomeForm from '../../Forms/HomeForm';
import UpdateAboutForm from "../../About/UpdateAboutForm"
import UpdateProductForm from "../../Product/UpdateProductForm"
import UpdateFooterForm from "../../Footer/UpdateFooterForm"
import {HashLink as Link} from 'react-router-hash-link'

const Editor = () => {
    return (
// <div className="sidenav">
        //     <a href="#about">About</a>
        //     <a href="#services">Services</a>
        //     <a href="#clients">Clients</a>
        //     <a href="#contact">Contact</a>

        //     <button className="dropdown-btn">Dropdown
        //     <i className="fa fa-caret-down"></i>
        //     </button>

        //     <div className="dropdown-container">
        //     <a href="#">Link 1</a>
        //     <a href="#">Link 2</a>
        //     <a href="#">Link 3</a>
        //     </div>

        //     <a href="#contact">Search</a>
        // </div>

        <div data-aos="fade-up" data-aos-duration='1000'>
            <hr/>

            <div className="row sticky-top">
                <h1>Website Editor</h1>
            </div>


            <div className="row">
                <div className="column left col-lg-2 col-sm-8 col-md-4">
                    <div className="vertical-menu sticky-top" style={{top: '10%'}}>
                        {/* <a href="#" className="active">Home</a> */}
                        <a href="#">Appearance</a>
                        <a href="/dashboard#Home">Home</a>
                        <a href="/dashboard#About">About</a>
                        <a href="/dashboard#Product">Product</a>
                        <a href="/dashboard#Footer">Footer</a>
                    </div>
                </div>

                <div className="column right col-lg-10 col-sm-5 col-md-8 pl-5">
                    <div id='Home'><HomeForm id='Home'/></div>
                    <div id='About'><UpdateAboutForm id="About"/></div>
                    <div id='Product'><UpdateProductForm id="Product"/></div>
                    <div id='Footer'><UpdateFooterForm id="Footer"/></div>
                </div>
            </div>
        </div>
    );
};

export default Editor;
