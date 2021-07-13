import { ReactComponent as Clock } from '../../../images/clock.svg';
import { ReactComponent as Truck } from '../../../images/truck.svg';
import './style.scss';

const ConfirmOrderDetail = () => {
    return (
        <div className="confirm-detail">
            <div className="confirm-detail__estimate">
                <div className="confirm-detail__estimate__info">
                    <Clock />
                    <span>10 days delivery</span>
                </div>
                <div className="confirm-detail__estimate__info">
                    <Truck />
                    <span>DHL Express</span>
                </div>
            </div>
            <div className="confirm-detail__product">
                <div className="confirm-detail__product__details">
                    <span id="name">Way Kambas Mini Ebony</span>
                    <span id="quantity">2 x IDR 1.024.000</span>
                </div>
                <div className="confirm-detail__product__details">
                    <span id="name">Way Kambas Mini Ebony</span>
                    <span id="quantity">2 x IDR 1.024.000</span>
                </div>
            </div>
            <div className="confirm-detail__price-info">
                <div className="confirm-detail__price-info__data">
                    <span id="name">Subtotal Shipping </span>
                    <span>Rp 2.152.000</span>
                </div>
                <div className="confirm-detail__price-info__data">
                    <span id="name">Shipping Cost</span>
                    <span>Rp 2.152.000</span>
                </div>
                <div className="confirm-detail__price-info__data">
                    <span id="name">Packaging</span>
                    <span>Rp 2.152.000</span>
                </div>
            </div>
            <div className="confirm-detail__total">
                <span id="name">Grand Total</span>
                <span id="price">Rp 2.702.000</span>
            </div>
            <div className="confirm-detail__address">
                <span id="name">Shipping Address</span>
                <span>
                    18 Richardson Drive
                    Fountain Valley, CA 92708
                </span>
            </div>
        </div>
    )
}

export default ConfirmOrderDetail