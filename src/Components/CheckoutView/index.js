import CheckoutProductList from '../CheckoutProductList';
import './style.scss';

const CheckoutView = () => {
    return (
        <div className="checkout">
            <div className="checkout__wrapper">
                <div className="checkout__wrapper__products">
                    <CheckoutProductList />
                    <CheckoutProductList />
                </div>
                <div className="checkout__wrapper__bottom">
                    <div className="checkout__wrapper__bottom__info">
                        <div className="checkout__wrapper__bottom__info__left">
                            <span>Kode Promo</span>
                            <input type="text" />
                            <span id="discount">35% OFF</span>
                        </div>
                        <div className="checkout__wrapper__bottom__info__right">
                            <span>Subtotal</span>
                            <div className="checkout__wrapper__bottom__info__right__price-detail">
                                <div className="checkout__wrapper__bottom__info__right__price-detail__cut-price">Rp 3.312.000</div>
                                <div className="checkout__wrapper__bottom__info__right__price-detail__price">Rp 2.152.000</div>
                            </div>
                        </div>
                    </div>
                    <div className="checkout__wrapper__bottom__btn">
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutView