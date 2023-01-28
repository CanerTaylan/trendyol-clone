import React from 'react'
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialFacebook } from "react-icons/ti"
import { TiSocialYoutube } from "react-icons/ti"

function Footer() {
    return (
        <div style={{ background: "#000" }}>
            <div className="container footer-section">
                <div className="row justify-content-center footer">
                    <div className="col-4 col-md-3">
                        <div>
                            <h5 className="footer-header">Trendyol</h5>
                        </div>
                        <div >
                            <ul className="footer-list">
                                <li>Biz Kimiz</li>
                                <li>Kariyer</li>
                                <li>İletişim</li>
                                <li>Trendyol'da Satış Yap</li>
                                <li>Güvenli Alışveriş</li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-4 col-md-2">
                        <div>
                            <h5 className="footer-header">About Us</h5>
                        </div>
                        <div>
                            <ul className="footer-list">
                                <li>Who we are</li>
                                <li>Careers</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4 col-md-2">
                        <div>
                            <h5 className="footer-header">Kampanyalar</h5>
                        </div>
                        <div>
                            <ul className="footer-list">
                                <li>Aktif Kampanyalar</li>
                                <li>Elite Üyelik</li>
                                <li>Hediye Fikirleri</li>
                                <li>Trendyol Fırsatları</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4 col-md-2">
                        <div className="footer-header">
                            <h5 className="footer-header">Yardım</h5>
                        </div>
                        <div>
                            <ul className="footer-list">
                                <li>Sıkça Sorulan Sorular</li>
                                <li>Canlı Yardım</li>
                                <li>Nasıl İade Edebilirim</li>
                                <li>İşlem Rehberi</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center footer">
                    <div className="col-4 col-md-3">
                        <h6 className="footer-headerb">Güvenli Alışveriş</h6>
                        <div className="credit-card">
                            <img src="img/f/master-card.webp" alt="master-card" height={37} />
                            <img src="img/f/visa-card.webp" alt="visa-card" height={55} />
                            <img src="img/f/troy.webp" alt="troy" height={25} />
                            <img src="img/f/amex.webp" alt="amex" height={30} />
                        </div>
                    </div>
                    <div className="col-4 col-md-2">
                        <h6 className="footer-headerb">Mobil Uygulamalar</h6>
                        <div >
                            <div className="mobil-app"><img src="img/f/huawei.png" alt="huawei-app" /> </div>
                            <div className="mobil-app"><img src="img/f/google.png" alt="google-app" /> </div>
                            <div className="mobil-app"><img src="img/f/apple.png" alt="apple-app" /> </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-2">
                        <h6 className="footer-headerb">Sosyal Medya</h6>
                        <div className='socialMedia'><TiSocialInstagram /><TiSocialTwitter /><TiSocialFacebook /><TiSocialYoutube /></div>
                    </div>
                    <div className="col-4 col-md-2">
                        <span className='country'>Ülke değiştir</span>
                    </div>

                </div>
            </div>
            <div className='sign-section'>
                <p>Trendyol copied by <span className='sign'>C. Taylan</span></p>
            </div>

        </div>
    )
}

export default Footer