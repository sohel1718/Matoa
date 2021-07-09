import './footerStyle.scss';

const Footer = () => {
    let payemnt = Array(10).fill(10);

    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__wrapper__payment">
                   {
                       payemnt.map((item, index) => {
                           return (
                               <div key={index} className="footer__wrapper__payment__option">
                                   <img src={`./images/PaymentOptions/pay-${index+1}.png`} alt="" />
                               </div>
                           )
                       })
                   }
                </div>
                <div className="footer__wrapper__about">
                   <div className="footer__wrapper__about__info">
                        <div className="footer__wrapper__about__info__logo">
                            <img src="/images/Logo/logo-white.png" alt="" />
                        </div>
                        <div className="footer__wrapper__about__info__block">
                            <div className="footer__wrapper__about__info__block__header">
                                Address
                            </div>
                            <div className="footer__wrapper__about__info__block__data">
                                <span>Store & Office</span>
                                <span>Jl. Setrasari Kulon III, No. 10-12,</span>
                                <span>Sukarasa, Sukasari, Bandung,</span>
                                <span>Jawa Barat, Indonesia 40152</span>
                            </div>
                        </div>
                        <div className="footer__wrapper__about__info__block">
                            <div className="footer__wrapper__about__info__block__header">
                                Office Hour
                            </div>
                            <div className="footer__wrapper__about__info__block__data">
                                <span>Monday - Sunday</span>
                                <span>10.00 - 18.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer__wrapper__about__info">
                        <div className="footer__wrapper__about__info__block">
                            <div className="footer__wrapper__about__info__block__header-underline">
                                <span>Get in touch</span>
                                <hr />
                            </div>
                            <div className="footer__wrapper__about__info__block__data">
                                <div className="footer__wrapper__about__info__block__data__cols">
                                    <div id="bold">Phone</div>
                                    <span>022-20277564</span>
                                </div>
                                <div className="footer__wrapper__about__info__block__data__cols">
                                    <div id="bold">Service Center</div>
                                    <span>0811-233-8899</span>
                                </div>
                                <div className="footer__wrapper__about__info__block__data__cols">
                                    <div id="bold">Customer Service</div>
                                    <span>0811-235-9988</span>
                                </div>
                            </div>
                            <div className="footer__wrapper__about__info__block__social">
                                    <div className="footer__wrapper__about__info__block__social__icons">
                                        <img src="/images/Social/Facebook.png" alt="" />
                                    </div>
                                    <div className="footer__wrapper__about__info__block__social__icons">
                                        <img src="/images/Social/Instagram.png" alt="" />
                                    </div>
                                    <div className="footer__wrapper__about__info__block__social__icons">
                                        <img src="/images/Social/Twitter.png" alt="" />
                                    </div>
                                    <div className="footer__wrapper__about__info__block__social__icons">
                                        <img src="/images/Social/Youtube.png" alt="" />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__wrapper__about__info">
                        <div className="footer__wrapper__about__info__block">
                            <div className="footer__wrapper__about__info__block__header-underline">
                                <span>Useful Link</span>
                                <hr />
                            </div>
                            <div className="footer__wrapper__about__info__block__data">
                                <span>Warranty & Complaints</span>
                                <span>Order & Shipping</span>
                                <span>Tracking Order</span>
                                <span>About Us</span>
                                <span>Repair</span>
                                <span>Terms</span>
                                <span>FAQ</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer__wrapper__about__info">
                        <div className="footer__wrapper__about__info__block">
                            <div className="footer__wrapper__about__info__block__header-underline">
                                <span>Campaign</span>
                                <hr />
                            </div>
                            <div className="footer__wrapper__about__info__block__data">
                                <span>Mengenal Arti Cukup</span>
                                <span>Tell Your Difference</span>
                                <span>WayKambas</span>
                                <span>Rebrand</span>
                                <span>Gallery</span>
                                <span>Singo</span>
                                <span>Rakai</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer