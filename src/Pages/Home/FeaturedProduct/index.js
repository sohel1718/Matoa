 import glasses from '../../../images/Products/Eyewear/glasses1.png';
 import watch from '../../../images/Products/Watches/watch3.png';
 import './featuredStyle.scss';
 
 const FeaturedProduct = () => {
    return (
        <div className="product">
            <div className="product__container">
                <div className="product__container__wrapper">
                    <div className="product__container__wrapper__title">
                        Luxurious Eyewear
                    </div>
                    <div className="product__container__wrapper__desc">
                        See the beauty of exotic world with the luxurious glasses
                    </div>
                    <div className="product__container__wrapper__discover">
                        Discover Now
                    </div>
                    <div className="product__container__wrapper__product">
                        <img src={glasses} alt="" />
                    </div>
                </div>
                <div className="product__container__wrapper">
                    <div className="product__container__wrapper__title">
                        Luxurious Eyewear
                    </div>
                    <div className="product__container__wrapper__desc">
                        See the beauty of exotic world with the luxurious glasses
                    </div>
                    <div className="product__container__wrapper__discover">
                        Discover Now
                    </div>
                    <div className="product__container__wrapper__product">
                        <img src={watch} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct