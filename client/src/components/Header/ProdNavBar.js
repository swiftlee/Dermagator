import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'
import {Route, NavLink} from "react-router-dom"

const ProdNavBar = () => {
    return (
        <div>
        <nav className='container'>
            <div className='navbar navbar-expand navbar-light bg-light justify-content-center'>
                <Link className="navbar-brand navbar-item" activeClass="active" to='/productpage#standard' spy={true} smooth={true}
                      offset={-60}
                      duration={500}>Standard</Link>
                <Link className='navbar-brand navbar-item' activeClass='active' to='/productpage#aa_me' spy={true} smooth={true}
                      offset={-60}
                      duration={500}>A.A. &  M.E.</Link>
                <Link className='navbar-brand navbar-item' activeClass='active' to='/productpage#ss' spy={true} smooth={true}
                      offset={-60}
                      duration={500}>S.S.</Link>
                <NavLink className='navbar-brand navbar-item navbar-link' activeClass="active "to="/productpage#order">Order</NavLink>
            </div>
        </nav>
        <Route/>
        </div>
    )
};

export default ProdNavBar;