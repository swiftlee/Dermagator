import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'

const NavBar = () => {

    return (
        <nav className='sticky-top container-fluid sticky-top mb-3 border-bottom border-info shadow-sm'>
            <div className='navbar navbar-expand navbar-light bg-light justify-content-center'>
                <a className="navbar-brand nav-item" href="#top">
                    <img src="/logo192.png" width="30" height="30" alt=""/>
                </a>
                <Link className="navbar-brand navbar-item" activeclass="active" to='#top' spy={'true'}
                      smooth={true}
                      offset={-60}
                      duration={500}>Home</Link>
                <Link className='navbar-brand navbar-item navbar-link' activeclass='active' to='#about'
                      spy='true' smooth={true}
                      offset={-60}
                      duration={500}>About</Link>
                <Link className='navbar-brand navbar-item' activeclass='active' to='#proof-of-concept'
                      spy={'true'} smooth={true}
                      offset={-60}
                      duration={500}>Proof of Concept</Link>
                <Link className='navbar-brand navbar-item' activeclass='active' to='#product' spy={'true'}
                      smooth={true}
                      offset={-60}
                      duration={500}>Product Info</Link>
                <Link className='navbar-brand navbar-item' activeclass='active' to='#contact' spy={'true'}
                      smooth={true}
                      offset={-60}
                      duration={500}>Contact</Link>
            </div>
        </nav>
    )
};

export default NavBar;
