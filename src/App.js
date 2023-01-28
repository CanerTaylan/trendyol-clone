import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Component/asset/css/style.css'
import './Component/asset/js/js'
import NavbarTop from './Component/NavbarTop';
import Carousel from './Component/Carousel';
import Banner from './Component/Banner';
import Productonecikan from './Component/Productonecikan';
import Productcoksatan from './Component/Productcoksatan';
import Productyildizli from './Component/Productyildizli';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <NavbarTop></NavbarTop>
      <Carousel></Carousel>
      <Banner></Banner>
      <Productonecikan></Productonecikan>
      <Banner></Banner>
      <Productcoksatan></Productcoksatan>
      <Productyildizli></Productyildizli>
      <Banner></Banner>
      <Footer></Footer>

    </div>
  )
}

export default App