import './style.scss';

const PaymentMethod = () => {
    return (
        <div className="payment-method">
            <div className="payment-method__title">
            Payment Method
            </div> 
            <div className="payment-method__wrapper">
                <div className="payment-method__wrapper__method">
                    <div className="payment-method__wrapper__method__name">
                        <input type="radio" />
                        <span>BNI Cicilan 0%</span>
                    </div>
                    <div className="payment-method__wrapper__method__img">
                        <img src="/images/PaymentOptions/method-10.png" alt="" />
                    </div>
                </div>
                <div className="payment-method__wrapper__method">
                    <div className="payment-method__wrapper__method__name">
                        <input type="radio" />
                        <span>Mandiri Cicilan 0%</span>
                    </div>
                    <div className="payment-method__wrapper__method__img">
                        <img src="/images/PaymentOptions/method-2.png" alt="" />
                    </div>
                </div>
                <div className="payment-method__wrapper__method">
                    <div className="payment-method__wrapper__method__name">
                        <input type="radio" />
                        <span>Bank Transfer</span>
                    </div>
                    <div className="payment-method__wrapper__method__img">
                        <img src="/images/PaymentOptions/method-9.png" alt="" />
                    </div>
                </div>
                <div className="payment-method__wrapper__method">
                    <div className="payment-method__wrapper__method__name">
                        <input type="radio" />
                        <span>Credit Card</span>
                    </div>
                    <div className="payment-method__wrapper__method__img">
                        <img src="/images/PaymentOptions/method-8.png" alt="" />
                        <img src="/images/PaymentOptions/method-1.png" alt="" />
                    </div>
                </div>
                <div className="payment-method__wrapper__method">
                    <div className="payment-method__wrapper__method__name">
                        <input type="radio" />
                        <span>Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)</span>
                    </div>
                    <div className="payment-method__wrapper__method__img">
                    <img src="/images/PaymentOptions/method-7.png" alt="" />
                    <img src="/images/PaymentOptions/method-4.png" alt="" />
                    <img src="/images/PaymentOptions/method-6.png" alt="" />
                    </div>
                </div>
                <div className="payment-method__wrapper__method">
                    <div className="payment-method__wrapper__method__name">
                        <input type="radio" />
                        <span>GO-PAY</span>
                    </div>
                    <div className="payment-method__wrapper__method__img">
                    <img src="/images/PaymentOptions/method-5.png" alt="" />
                    </div>
                </div>
                <div className="payment-method__wrapper__method">
                    <div className="payment-method__wrapper__method__name">
                        <input type="radio" />
                        <span>Krdivo</span>
                    </div>
                    <div className="payment-method__wrapper__method__img">
                    <img src="/images/PaymentOptions/method-3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod