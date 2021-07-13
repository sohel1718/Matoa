import { useState } from 'react';
import Progress from '../../Components/Progress';
import OrderDetail from '../../Components/OrderDetail';
import BillingAddress from '../../Components/BillingAddress';
import AllOrderDetail from '../../Components/AllOrderDetail';
import PaymentMethod from '../../Components/PaymentMethod';
import ConfirmOrder from '../../Components/ConfirmOrder';
import ConfirmOrderDetail from '../../Components/ConfirmOrderDetail';
import './style.scss';

const Payment = () => {
    const [current, setCurrent] = useState(2);

    return (
        <div className="payment">
            <Progress current={current} />
            <div className="payment__container">
                <div className="payment__container__wrapper">
                    <div className="payment__container__wrapper__left">
                        {
                            (current === 0 || current === 1) && <OrderDetail />
                        }
                        {
                            current === 1 && (
                                <div className="payment__container__wrapper__left__timer-box">
                                    <div className="payment__container__wrapper__left__timer-box__title">
                                        <span id="main-title">Payment Detail</span>
                                        <span id="timer">11:55:55</span>
                                    </div>
                                    <div className="payment__container__wrapper__left__timer-box__desc">
                                    Please make a payment according with the limit time specified, starting from now
                                    </div>
                                </div>
                            )
                        }
                        {
                            current === 2 && <ConfirmOrder />
                        }
                    </div>
                    <div className="payment__container__wrapper__right">
                        {
                            current === 0 && 
                            <div className="payment__container__wrapper__right__billing">
                            <BillingAddress />
                                <div className="payment__container__wrapper__right__billing__btn">
                                    <button id="outline">Continue Shopping</button>
                                    <button id="filled">Place My Order</button>
                                </div>
                            </div>
                        }
                        {
                            current === 1 && 
                            <AllOrderDetail />
                        }
                        {
                            current === 2 && <ConfirmOrderDetail />
                        }
                    </div>
                </div>
                {current === 1 &&
                    <div className="payment__container__bottom">
                    <PaymentMethod />
                    <div className="payment__container__bottom__btn">
                        <button>Proceed Payment</button>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Payment