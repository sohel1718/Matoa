import './style.scss';

const OrderDetail = () => {
    return (
        <div className="order-detail">
            <div className="order-detail__title">Detail Order</div>
            <div className="order-detail__desc">
                <div className="order-detail__desc__left">
                    <span>Subtotal</span>
                    <span>Shipping Cost</span>
                    <span>Promo Code</span>
                    <span>Packaging</span>
                </div>
                <div className="order-detail__desc__right">
                    <span>Rp 2.152.000</span>
                    <span>Rp 500.000</span>
                    <span>INDONESIA</span>
                    <span>Rp 50.000</span>
                </div>
            </div>
            <div className="order-detail__bottom">
                <span className="order-detail__bottom__text">Grand Total</span>
                <span className="order-detail__bottom__price">Rp 2.702.000</span>
            </div>
        </div>
    )
}

export default OrderDetail






