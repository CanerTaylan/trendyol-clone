import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Menu2() {
    return (
        <div>
            <nav id="trendyolNavbar">
                <ul className="navMenu justify-content-center collapse navbar-collapse">
                    <li className="menu"><a href='#' className='menuitem' role={"button"} data-bs-toggle="dropdown" aria-expanded="false">KADIN</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                        </ul>

                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>

                    <li className="menu"><a href='#' className='menuitem'>ERKEK</a></li>
                    <li className="menu"><a href='#' className='menuitem'>ANNE & ÇOCUK</a></li>
                    <li className="menu"><a href='#' className='menuitem'>EV & MOBİLYA</a></li>
                    <li className="menu"><a href='#' className='menuitem'>SÜPERMARKET</a></li>
                    <li className="menu"><a href='#' className='menuitem'>KOZMETİK</a></li>
                    <li className="menu"><a href='#' className='menuitem'>AYAKKABI & ÇANTA</a></li>
                    <li className="menu"><a href='#' className='menuitem'>SAAT & AKSESUAR</a></li>
                    <li className="menu"><a href='#' className='menuitem'>ELEKTRONİK</a></li>
                    <li className="menu"><a href='#' className='menuitem'>SPOR & OUTDOOR</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu2