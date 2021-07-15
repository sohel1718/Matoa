import { Slider, Checkbox  } from 'antd';
import './style.scss';

const ProductFilter = () => {
    return (
        <div className="filter">
            <div className="filter__wrapper">
                <div className="filter__wrapper__title">
                    Filter
                </div>
                <div className="filter__wrapper__box">
                    <div className="filter__wrapper__box__title">
                        <span>Brand</span>
                        <span>+</span>
                    </div>
                    <div className="filter__wrapper__box__list-wrapper">
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                            <Checkbox>Samsung</Checkbox>
                            </div> 
                        </div>
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                                <Checkbox>Samsung</Checkbox>
                            </div> 
                        </div>
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                            <Checkbox>Samsung</Checkbox>
                            </div> 
                        </div>
                        <div className="filter__wrapper__box__list-wrapper__list">
                            <div className="filter__wrapper__box__list-wrapper__list__left">
                            <Checkbox>Samsung</Checkbox>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="filter__wrapper__box">
                    <div className="filter__wrapper__box__title">
                        <span>Price Range</span>
                        <span>+</span>
                    </div>
                    <div className="filter__wrapper__box__list-wrapper">
                        <div className="filter__wrapper__box__list-wrapper__list">
                           <div className="filter__wrapper__box__list-wrapper__list__slider">
                                <Slider range min={500} max={20000} defaultValue={[5000,9000]} />
                                <div className="filter__wrapper__box__list-wrapper__list__slider__price">
                                    <div className="filter__wrapper__box__list-wrapper__list__slider__price__num">
                                        <img src="/images/dollar.png" alt="" />
                                        <span>5000</span>
                                    </div>
                                    <div className="filter__wrapper__box__list-wrapper__list__slider__price__num">
                                        <img src="/images/dollar.png" alt="" />
                                        <span>9000</span>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default ProductFilter