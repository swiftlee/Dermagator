import React from 'react';
import {Link} from "react-scroll";
import {Router, Route} from 'react-router'
const NavBar = () => {
    return (
        <nav className='container'>
            <div className='navbar navbar-expand navbar-light bg-light justify-content-center'>
                <Link className='navbar-brand navbar-item' activeClass='active' to='about' spy={true} smooth={true}
                      offset={-60}
                      duration={500}>About</Link>
                <Link className='navbar-brand navbar-item' activeClass='active' to='proof-of-concept' spy={true} smooth={true}
                      offset={-60}
                      duration={500}>Proof of Concept</Link>
                <Link className='navbar-brand navbar-item' activeClass='active' to='product' spy={true} smooth={true}
                    offset={-60}
                    duration={500}>Product Info</Link>
                <Link className='navbar-brand navbar-item' activeClass='active' to='contact' spy={true} smooth={true}
                      offset={-60}
                      duration={500}>Contact</Link>
            </div>
        </nav>
    )
};

export default NavBar;
