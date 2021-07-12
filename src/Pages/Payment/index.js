import { useState } from 'react';
import Progress from '../../Components/Progress';
import OrderDetail from '../../Components/OrderDetail';
import BillingAddress from '../../Components/BillingAddress';
import AllOrderDetail from '../../Components/AllOrderDetail';
import './style.scss';

const Payment = () => {
    const [current, setCurrent] = useState(1);

    return (
        <div className="payment">
            <Progress current={current} />
            <div className="payment__container">
                <div className="payment__container__wrapper">
                    <div className="payment__container__wrapper__left">
                        <OrderDetail />
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment