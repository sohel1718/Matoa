import InputNumber from '../InputNumber';
import Watch from '../../images/Products/Watches/watch1.png';
import { ReactComponent as Delete } from '../../images/delete.svg';
import './style.scss';

const CheckoutProductList = () => {

    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    return (
        <div className="checkout-list">
            <div className="checkout-list__left">
                <div className="checkout-list__left__image">
                    <img src={Watch} alt="" />
                </div>
                <div className="checkout-list__left__detail">
                    <div className="checkout-list__left__detail__title">Way Kambas Mini Ebony</div>
                    <div className="checkout-list__left__detail__cut-price">Rp 1.280.000</div>
                    <div className="checkout-list__left__detail__price">Rp 1.024.000</div>
                    <div className="checkout-list__left__detail__custom-message">
                        <span id="heading">Custom Engrave</span>
                        <span id="desc">“Happy | Birthday | from”</span>
                    </div>
                </div>
            </div>
            <div className="checkout-list__right">
                <div className="checkout-list__right__select">
                    <span>Select Packaging</span>
                    <select defaultValue="Default Packaging (Free)" onChange={handleChange}>
                        <option value="Wooden Packaging (Rp 50.000)">Wooden Packaging (Rp 50.000)</option>
                        <option value="Default Packaging (Free)">Default Packaging (Free)</option>
                    </select>
                </div>
                <div className="checkout-list__right__add-cart">
                    <InputNumber />
                    <span>Rp 2.048.000</span>
                    <div className="checkout-list__right__add-cart__remove">
                        <Delete />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProductList;