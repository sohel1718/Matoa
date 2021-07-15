import {ReactComponent as Heart} from '../../images/heart.svg';
import {ReactComponent as AddCart} from '../../images/AddCart.svg';
import './style.scss';

const ProductCardV3 = ({product}) => {
    return (
        <div className="product-card-v3">
            <div className="product-card-v3__image">
                <div className="product-card-v3__image__heart">
                <Heart />
                </div>
                <img src={product.image} alt="" />
            </div>
            <div className="product-card-v3__name">
                {product.name}
            </div>
            <div className="product-card-v3__price">
                <div className="product-card-v3__price__left">
                    <span id="cutPrice">{product.cutPrice}</span>
                    <span>{product.price}</span>
                </div>
                <div className="product-card-v3__price__right">
                    <AddCart />
                </div>
            </div>
        </div>
    )
}

export default ProductCardV3