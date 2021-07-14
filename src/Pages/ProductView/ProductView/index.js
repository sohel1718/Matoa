import { useState } from 'react';
import watchFront from '../../../images/Products/Watches/watch1.png';
import color01 from '../../../images/Products/Watches/m-color.png';
import color02 from '../../../images/Products/Watches/m-color02.png';
import productImage from '../../../images/Products/Watches/p-img.png';
import productImage2 from '../../../images/Products/Watches/p-img-2.png';
import productImage3 from '../../../images/Products/Watches/p-img-3.png';
import InputNumber from '../../../Components/InputNumber';
import ModalView from '../../../Components/ModalView';
import CheckoutView from '../../../Components/CheckoutView';
import {ReactComponent as AddCart} from '../../../images/AddCart.svg';
import './viewStyle.scss';

const ProductView = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleChekout = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    


    return (
        <div className="view">
            <div className="view__wrapper">
                <div className="view__wrapper__product">
                    <div className="view__wrapper__product__left">
                        <div className="view__wrapper__product__left__changeImage">
                            <img src={watchFront} alt="" />
                        </div>
                        <div className="view__wrapper__product__left__changeImage">
                            <img src={productImage} alt="" />
                        </div>
                        <div className="view__wrapper__product__left__changeImage">
                            <img src={productImage2} alt="" />
                        </div>
                        <div className="view__wrapper__product__left__changeImage">
                            <img src={productImage3} alt="" />
                        </div>
                    </div>
                    <div className="view__wrapper__product__right ">
                        <img src={watchFront} alt="" />
                    </div>
                </div>
                <div className="view__wrapper__detail">
                    <div className="view__wrapper__detail__title">
                    WAY KAMBAS MINI EBONY
                    </div>
                    <div className="view__wrapper__detail__cut-price">
                    Rp 1.280.000
                    </div>
                    <div className="view__wrapper__detail__price">
                    Rp 1.024.000
                    </div>
                    <div className="view__wrapper__detail__models">
                        <div className="view__wrapper__detail__models__text">Choose Model</div>
                        <div className="view__wrapper__detail__models__wrapper">
                            <div className="view__wrapper__detail__models__wrapper__model">
                                <img src={color01} alt="" />
                            </div>
                            <div className="view__wrapper__detail__models__wrapper__model">
                                <img src={color02} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="banner__wrapper__right__btnWrapper view__wrapper__detail__cart">
                        <InputNumber />
                        <button onClick={showModal} id="btn-normal"><AddCart /><span>Add to cart</span></button>
                        <button id="btn-outline"><img src="/images/Logo/logo-cicil-white.png" alt="" /></button>
                    </div>
                </div>
                <ModalView isModalVisible={isModalVisible} handleCancel={handleCancel} handleOk={handleChekout}>
                    <CheckoutView />
                </ModalView>
            </div>
        </div>
    )
}

export default ProductView