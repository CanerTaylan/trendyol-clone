import React from 'react'

function Banner() {
    return (
        <div>
            <div className='container mt-3'>
                <div className="row hook-section justify-content-evenly">
                    <div className='hook'>

                        <a href="#"><img src="img/b/card-1.webp" alt="sepete eklenenler" /></a>
                    </div>
                    <div className='hook'>

                        <a href='#'><img src="img/b/card-2.webp" alt="öne çıkanlar" /></a>
                    </div>
                    <div className='hook'>
                        <a href='#'><img src="img/b/card-3.webp" alt="indirimler" /></a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row banner-section">
                    <div className="col-12 col-md-6 col-lg-4">
                        <a href='#' className="banner">
                            <div className="banner-img">
                                <img src="img/b/banner-1.webp" alt="Bershka - Kış İndirimi" />
                            </div>
                            <div className="banner-textarea">
                                <div className='bannerText'>Bershka - Kış İndirimi</div>
                                <div className='hoverText'>Alışverişe başla</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <a href='#' className="banner">
                            <div className="banner-img">
                                <img src="img/b/banner-2.webp" alt="Dev Markalarda Büyük Kış ... " />
                            </div>
                            <div className="banner-textarea">
                                <div className='bannerText'>Dev Markalarda Büyük Kış ...</div>
                                <div className='hoverText'>Alışverişe başla</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <a href='#' className="banner">
                            <div className="banner-img">
                                <img src="img/b/banner-3.webp" alt="Mobilyada En Favori ürünler" />
                            </div>
                            <div className="banner-textarea">
                                <div className='bannerText'>Mobilyada En Favori ürünler </div>
                                <div className='hoverText'>Alışverişe başla</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <a href='#' className="banner">
                            <div className="banner-img">
                                <img src="img/b/banner-4.webp" alt="Mango-Kadın & Erkek Tek..." />
                            </div>
                            <div className="banner-textarea">
                                <div className='bannerText'>Mango-Kadın & Erkek Tek...</div>
                                <div className='hoverText'>Alışverişe başla</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <a href='#' className="banner">
                            <div className="banner-img">
                                <img src="img/b/banner-5.webp" alt="" />
                            </div>
                            <div className="banner-textarea">
                                <div className='bannerText'>Oyuncak - En Çok Satı.. </div>
                                <div className='hoverText'>Alışverişe başla</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <a href='#' className="banner">
                            <div className="banner-img">
                                <img src="img/b/banner-6.webp" alt="Skechers Sezon Sonu" />
                            </div>
                            <div className="banner-textarea">
                                <div className='bannerText'>Skechers Sezon Sonu</div>
                                <div className='hoverText'>Alışverişe başla</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Banner
