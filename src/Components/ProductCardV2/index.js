import watch from '../../images/Products/Watches/singo-maple.png'
import './style.scss';

const ProductCardV2 = () => {
    return (
        <div className="product-card">
            <div className="product-card__discount-tag">
                20% OFF
            </div>
            <div className="product-card__image">
                <img src={watch} alt="" />
            </div>
            <div className="product-card__title">
            Singo Maple
            </div>
            <div className="product-card__cut-price">
            Rp 1.500.000
            </div>
            <div className="product-card__price">
            Rp 1.264.000
            </div>      
        </div>
    )
}

export default ProductCardV2;