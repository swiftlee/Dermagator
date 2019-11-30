import React from 'react';
import './Editor.css';
import HomeForm from '../../Forms/HomeForm';
import UpdateAboutForm from "../../../components/About/UpdateAboutForm"
import UpdateProductForm from "../../../components/Product/UpdateProductForm"
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

            <div className='sticky-top overflow-'>
                <div className="row">
                    <h1>Website Editor</h1>
                </div>


                <div className="row">
                    <div className="column left col-lg-2 col-sm-1">
                        <div className="vertical-menu">
                            {/* <a href="#" className="active">Home</a> */}
                            <Link to="#">Appearance</Link>
                            <Link to="#">Home</Link>
                            <Link to="#About" activeclass='active'>About</Link>
                            <Link to="#Product">Product</Link>
                            <Link to="#">Footer</Link>
                        </div>
                    </div>

                    <div className="column right col-lg-10 col-sm-10">
                        <HomeForm/>
                        <UpdateAboutForm id="#About"/>
                        <UpdateProductForm id="Product"/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Editor;
