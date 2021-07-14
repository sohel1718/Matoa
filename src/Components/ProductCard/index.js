import {ReactComponent as Heart} from '../../images/heart.svg';
import './cardStyle.scss'; 

const ProductCard = ({product, className=""}) => {
    return (
        <div id={product.id} className={`card ${className}`}>
            <div className="card__product">
                <img src={product.image} alt="" />
            </div>
            <div className="card__title">
                <span>{product.name}</span>
                <span id="discount">{product.discount}</span>
            </div>
            <div className="card__price">
                <span id="cutPrice">{product.cutPrice}</span>
                <span>{product.price}</span>
            </div>
            <div className="card__bottom">
                <button id="btn-outline"><Heart /></button>
                <button id="btn-normal">Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard;