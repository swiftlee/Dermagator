import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'
import Button from "react-bootstrap/Button"


import './Navbar.css';

const NavBar = (props) => {

    const sections = [...props.items];
    const token = localStorage.getItem("jwtToken");
    {/*items: {id: '#id', label: 'Label', dropdowns: []} */
    }

    return (
        <nav className='sticky-top container-fluid sticky-top mb-3 border-bottom  shadow-sm'>
            <div className='navbar navbar-expand navbar-light bg-white justify-content-center'>
                <a className="navbar-brand nav-item" href="/home">
                    <img src="/assets/home.png" width="30" height="30" alt=""/>
                </a>
                {sections.map((section) => {
                    console.log(section.dropdowns);
                    const className = section.dropdowns ? 'navbar-brand navbar-item dropdown' : 'navbar-brand navbar-item';
                    const linkClassName = section.dropdowns ? 'nav-link dropdown-toggle' : '';
                    const dataToggle = section.dropdowns ? 'dropdown' : '';
                    const id = section.dropdowns ? 'navbarDropdown' : '';

                    return (
                        <div key={section.id} className={className}>
                            <Link key={section.id} id={id} className={linkClassName} activeclass='active' to={section.id} spy='true'
                                  smooth={true}
                                  data-toggle={dataToggle}
                                  offset={-60}
                                  duration={500}><span style={{color: 'black'}}>{section.label}</span></Link>
                            {section.dropdowns ?
                                <div className='dropdown-content'>
                                    {
                                        section.dropdowns.map(item => {
                                            return <Link key={item.route}
                                                         to={item.route}
                                                         spy='true'
                                                         smooth={true}
                                                         data-toggle={dataToggle}
                                                         offset={-60}
                                                         duration={500} className='dropdown-item'>{item.label}</Link>
                                        })
                                    }
                                </div>
                                : null}
                        </div>);
                })}
                {!token ? 
                <Button variant="outline-primary" className='navbar-brand nav-item' href="/login">Log in</Button> :
                <Button variant="outline-primary" className='navbar-brand nav-item' href="/dashboard">Dashboard</Button>}
            </div>
        </nav>
    )
};

export default NavBar;
