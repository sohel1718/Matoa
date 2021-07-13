import './Style.scss';

const ConfirmOrder = () => {
    return (
        <div className="confirm-order">
            <div className="confirm-order__img">
                <img src="/images/confirm-order.png" alt="" />
            </div>
            <div className="confirm-order__title">
            Order Confirmed
            </div>
            <div className="confirm-order__desc">
            Your order have been confirmed, please wait and track your order
            </div>
            <div className="confirm-order__btn">
                <button>Go to track page</button>
            </div>
        </div>
    )
}

export default ConfirmOrder