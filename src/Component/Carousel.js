import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



function Carousel() {
    const options = {
        margin: 0,
        loop: true,
        center: false,
        responsiveClass: true,
        nav: true,
        items: 10,
        dots: false,
        autoplay: false,
        smartSpeed: 1500,
        autoWidth: true,
        responsive: {
            0: {
                items: 3,
            },

            600: {
                items: 5,
            },

            1000: {
                items: 10,

            }
        },
    };


    return (

        <div className="container ">
            <OwlCarousel className='owl-theme brandCarousel' {...options}>
                <div className='brand-item'>
                    <div ><img src={'img/c/img-1.webp'} alt="brand-img" /></div>
                </div>
                <div className='brand-item'>
                    <div ><img src={'img/c/img-2.webp'} alt="brand-img" /></div>
                </div>
                <div className='brand-item'>
                    <div ><img src={'img/c/img-3.webp'} alt="brand-img" /></div>
                </div>
                <div className='brand-item'>
                    <div ><img src={'img/c/img-4.webp'} alt="brand-img" /></div>
                </div>
                <div className='brand-item'>
                    <div ><img src={'img/c/img-5.webp'} alt="brand-img" /></div>
                </div>
                <div className='brand-item'>
                    <div ><img src={'img/c/img-6.webp'} alt="brand-img" /></div>
                </div>
                <div className='brand-item'>
                    <div ><img src={'img/c/img-7.webp'} alt="brand-img" /></div>
                </div>
                <div className='brand-item'>
                    <div ><img src={'img/c/img-8.webp'} alt="brand-img" /></div>
                </div>
                <div className='brand-item'>
                    <div ><img src={'img/c/img-9.webp'} alt="brand-img" /></div>
                </div>
                <div className='brand-item'>
                    <div ><img src={'img/c/img-10.webp'} alt="brand-img" /></div>
                </div>
                <div className='brand-item'>
                    <div ><img src={'img/c/img-11.webp'} alt="brand-img" /></div>
                </div>
                <div className='brand-item'>
                    <div ><img src={'img/c/img-12.webp'} alt="brand-img" /></div>
                </div>
            </OwlCarousel>







        </div>
    )
}

export default Carousel