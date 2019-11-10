import React from 'react';
import {Link} from "react-scroll";
import {Route, NavLink} from "react-router-dom"
const NavBar = () => {
    return (
        <div>
        <nav className='container'>
            <div className='navbar navbar-expand navbar-light bg-light justify-content-center'>
                <NavLink className="navbar-brand navbar-item" activeClass="active" to="/">Home</NavLink>
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
                <NavLink className='navbar-brand navbar-item navbar-link' activeClass="active "to="/whitepages">Documents</NavLink>
            </div>
        </nav>
        <Route/>
        </div>
    )
};

export default NavBar;
