import React from 'react';
import './Editor.css';
import HomeForm from '../../Forms/HomeForm';


const Editor= () => {
    return (
            // <div class="sidenav">
            //     <a href="#about">About</a>
            //     <a href="#services">Services</a>
            //     <a href="#clients">Clients</a>
            //     <a href="#contact">Contact</a>
                
            //     <button class="dropdown-btn">Dropdown
            //     <i class="fa fa-caret-down"></i>
            //     </button>
                
            //     <div class="dropdown-container">
            //     <a href="#">Link 1</a>
            //     <a href="#">Link 2</a>
            //     <a href="#">Link 3</a>
            //     </div>
                
            //     <a href="#contact">Search</a>
            // </div>

            <div
            data-aos="fade-up" data-aos-duration='1000'>
                
                
                <div class="row">
                    <h1>Account Settings</h1>
                </div>
                

                <div class="row">
                    <div class="column left">
                        <div class="vertical-menu">
                            {/* <a href="#" class="active">Home</a> */}
                            <a href="#">Appearance</a>
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Product</a>
                            <a href="#">Footer</a>
                        </div>
                    </div>
                    
                    <div class="column right">
                        <HomeForm/>
                    </div>

                </div>
            
            </div>
    );
}

export default Editor;