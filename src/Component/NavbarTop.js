import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Menu from './Menu';
import Menu2 from './Menu2';




function NavbarTop() {
    const menuOptions = {
        margin: 0,
        loop: false,
        center: false,
        nav: false,
        // items: 15,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        autoWidth: true,
  

    };

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
            <nav className="navbar fixed-top navbar-expand-lg ">
                <div className="container justify-content-between">

                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#trendyolNavbar" aria-controls="trendyolNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#"><img src="img/logo.svg" height={60} alt="Trendyol logo" /></a>
                    </div>
                    <div className="collapse navbar-collapse">
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

            </nav>



            <div className="container-fluid ">
                <div className="navigation">
                    <Menu id="trendyolNavbar"></Menu>
                </div>


            </div>
            <div className="container-fluid navigation-mobile">
                <OwlCarousel className='owl-theme ' {...menuOptions}>
                    <Menu></Menu>

                </OwlCarousel>
            </div>



























        </div>

    )
}

export default NavbarTop