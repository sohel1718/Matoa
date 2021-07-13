import {ReactComponent as Checkout} from '../../../images/checkout.svg';
import {ReactComponent as Payment} from '../../../images/payment.svg';
import {ReactComponent as Confirm} from '../../../images/confirm.svg';
import {ReactComponent as CheckoutFilled} from '../../../images/checkout-filled.svg';
import {ReactComponent as PaymentFilled} from '../../../images/payment-filled.svg';
import {ReactComponent as ConfirmFilled} from '../../../images/confirm-filled.svg';
import { Steps } from 'antd';
import './style.scss';

const { Step } = Steps;

const Progress = ({current = 0}) => {

    const CheckoutIcon = current === 0 ? CheckoutFilled : Checkout;
    const PaymentIcon = current === 1 ? PaymentFilled : Payment;
    const ConfirmIcon = current === 2 ? ConfirmFilled : Confirm;
    return (
        <div className="step-wrapper">
            <Steps current={current}>
                <Step title="1. Checkout" icon={<CheckoutIcon />} />
                <Step title="2. Payment" icon={<PaymentIcon />} />
                <Step title="3. Confirmation" icon={<ConfirmIcon />} />
            </Steps>
        </div>
    )
}

export default Progress