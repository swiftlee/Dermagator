import React from 'react';
//import {Link} from "react-scroll";
import {HashLink as Link} from 'react-router-hash-link'
import {Route, NavLink} from "react-router-dom"

const NavBar = () => {
    return (
        <div>
        <nav className='container'>
            <div className='navbar navbar-expand navbar-light bg-light justify-content-center'>
                <Link className="navbar-brand navbar-item" activeClass="active" to='/home#top' spy={true} smooth={true}
                      offset={-60}
                      duration={500}>Home</Link>
                <Link className='navbar-brand navbar-item navbar-link' activeClass='active' to='/about' spy={true} smooth={true}
                      offset={-60}
                      duration={500}>About</Link>
                <Link className='navbar-brand navbar-item' activeClass='active' to='/home#proof-of-concept' spy={true} smooth={true}
                      offset={-60}
                      duration={500}>Proof of Concept</Link>
                <Link className='navbar-brand navbar-item' activeClass='active' to='/home#product' spy={true} smooth={true}
                    offset={-60}
                    duration={500}>Product Info</Link>
                <Link className='navbar-brand navbar-item' activeClass='active' to='/home#contact' spy={true} smooth={true}
                      offset={-60}
                      duration={500}>Contact</Link>
                <NavLink className='navbar-brand navbar-item navbar-link' activeClass="active "to="/whitepages">Documents</NavLink>
            </div>
        </nav>
        <Route/>
        </div>
    )
};

export default NavBar;
