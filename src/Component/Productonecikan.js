import React from 'react'

import ProductContents from './ProductContents';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Productonecikan(props) {

    const settings = {
        dots: false,
        infinite: true,
        accessibility: true,
        speed: 400,
        slidesToShow: 5.75,
        slidesToScroll: 1.5,
        lazyLoad: 'ondemand',
        nav:true,
        zIndex: -1,
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                }
            },
        ]
    };
    return (
        <div>
            <div className="container product-section">
                <div className="row">
                    <div className='product-slider'>
                        <div className='product-header'>
                            <div className='product-slider-name'>Öne Çıkanlar</div>
                            <div className='product-slider-last'>Tüm ürünler</div>
                        </div>
                        <Slider {...settings}>

                            <div>
                                <ProductContents
                                    stamp="./img/p/yildizli.webp"
                                    kargo="./img/p/kargo.png"
                                    productimg="img/p/product-1.webp" pname="deneme ürün ismi 1" pprice="200TL" >
                                </ProductContents>
                            </div>
                            <div>
                                <ProductContents
                                    stamp="./img/p/coksatan.webp"
                                    productimg="img/p/product-2.webp" pname="deneme ürün ismi 2" orgPrice="250TL"
                                    pprice="199TL" >
                                </ProductContents>
                            </div>
                            <div>
                                <ProductContents
                                    productimg="img/p/product-3.webp" pname="deneme ürün ismi 3" pprice="75TL" >
                                </ProductContents>
                            </div>
                            <div>
                                <ProductContents
                                    stamp="./img/p/coksatan.webp"
                                    kargo="./img/p/kargo.png"
                                    productimg="img/p/product-4.webp" pname="bardeneme ürün ismi 4ddss sdfdsafdsa dsafdsasa sdsv" orgPrice="250TL"
                                    pprice="350TL" >
                                </ProductContents>
                            </div>
                            <div>
                                <ProductContents
                                    stamp="./img/p/yildizli.webp"
                                    productimg="img/p/product-5.webp" pname="deneme ürün ismi 5" orgPrice="250TL"
                                    pprice="275TL" >
                                </ProductContents>
                            </div>
                            <div>
                                <ProductContents
                                    stamp="./img/p/coksatan.webp"
                                    kargo="./img/p/kargo.png"
                                    productimg="img/p/product-6.webp" pname="deneme ürün ismi 6" pprice="500TL" >
                                </ProductContents>
                            </div>
                            <div>
                                <ProductContents
                                    stamp="./img/p/yildizli.webp"
                                    kargo="./img/p/kargo.png"
                                    productimg="img/p/product-7.webp" pname="deneme ürün ismi 7" orgPrice="250TL"
                                    pprice="750TL" >
                                </ProductContents>
                            </div>
                            <div>
                                <ProductContents
                                    stamp="./img/p/coksatan.webp"
                                    kargo="./img/p/kargo.png"
                                    productimg="img/p/product-8.webp" pname="deneme ürün ismi 8" orgPrice="250TL"
                                    pprice="20TL" >
                                </ProductContents>
                            </div>
                        </Slider>

                    </div>
                </div>
            </div>



        </div>
    );
}



export default Productonecikan