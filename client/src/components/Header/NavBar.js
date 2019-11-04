import React from 'react';
import {Link} from "react-scroll";

const NavBar = () => {
    return (
        <nav className='container sticky-top'>
            <div className='navbar navbar-expand navbar-light bg-light justify-content-center'>
                <Link className='navbar-brand' activeClass='active' to='about' spy={true} smooth={true}
                      offset={-60}
                      duration={500}>About</Link>
                <Link className='navbar-brand' activeClass='active' to='proof-of-concept' spy={true} smooth={true}
                      offset={-60}
                      duration={500}>Proof of Concept</Link>
                <Link className='navbar-brand' activeClass='active' to='contact' spy={true} smooth={true}
                      offset={-60}
                      duration={500}>Contact</Link>
            </div>
        </nav>
    )
};

export default NavBar;