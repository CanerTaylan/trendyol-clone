import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

import { BsCart3 } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';





function NavbarTop2() {
    const menuOptions = {
        margin: 10,
        loop: false,
        // center: true,
        responsiveClass: false,
        nav: false,
        items: 10,
        dots: true,
        autoplay: false,
        smartSpeed: 2000,
        autoWidth: true,

    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className='container'>
                <div className="navbar-top">
                    <div className="navbar-list">
                        <ul>
                            <li><a href="# ">İndirim Kuponlarım</a></li>
                            <li><a href="# ">Trendyol'da Satış Yap</a></li>
                            <li><a href="# ">Yardım & Destek</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="navbar fixed-top navbar-expand-lg">
                <div className="container justify-content-between">
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#trendyolNavbar" aria-controls="trendyolNavbar" aria-expanded="false" aria-label="Toggle navigation" onClick={handleShow}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#"><img src="img/logo.svg" height={60} alt="Trendyol logo" /></a>
                    </div>
                    <div className="collapse navbar-collapse" id="trendyolNavbar">
                        <div className="search input-group">
                            <input type="search" className="form-control" placeholder="Aradığınız ürün, kategori veya markayı yazınız" aria-label="Search" ></input>
                            <span ><BsSearch className='searchicon' /></span>

                        </div>
                    </div>
                    <div className='account'>
                        <ul>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><BsPerson className='icon' />
                                    <span>Hesabım</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><BsHeart className='icon'
                                /><span>Favorilerim</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><BsCart3 className='icon' /><span>Sepetim</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((show) => (
                <div className="container-fluid ">
                    <div className="navigation">
                        <nav>

                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>TRENDYOL</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    Some text as placeholder. In real life you can have the elements you
                                    have chosen. Like, text, images, lists, etc.



                                    <ul className="navMenu justify-content-center collapse navbar-collapse">
                                        <li className="menu"><a href='#' className='menuitem'>KADIN</a></li>
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

                                </Offcanvas.Body>
                            </Offcanvas>
                        </nav>
                    </div>
                </div>
            ))}


            <div className="container-fluid navigation-mobile">
                <OwlCarousel className='owl-theme ' {...menuOptions}>
                    <div className="menu">
                        <a href='#' className='menuitem'>KADIN</a>
                    </div>
                    <div className="menu">
                        <a href='#' className='menuitem'>ERKEK</a>
                    </div>
                    <div className="menu">
                        <a href='#' className='menuitem'>ANNE & ÇOCUK</a>
                    </div>
                    <div className="menu">
                        <a href='#' className='menuitem'>EV & MOBİLYA</a>
                    </div>
                    <div className="menu">
                        <a href='#' className='menuitem'>SÜPERMARKET</a>
                    </div>
                    <div className="menu">
                        <a href='#' className='menuitem'>KOZMETİK</a>
                    </div>
                    <div className="menu">
                        <a href='#' className='menuitem'>AYAKKABI & ÇANTA</a>
                    </div>
                    <div className="menu">
                        <a href='#' className='menuitem'>SAAT & AKSESUAR</a>
                    </div>
                    <div className="menu">
                        <a href='#' className='menuitem'>ELEKTRONİK</a>
                    </div>
                    <div className="menu">
                        <a href='#' className='menuitem'>SPOR & OUTDOOR</a>
                    </div>


                </OwlCarousel>
            </div>



























        </div>

    )
}

export default NavbarTop2