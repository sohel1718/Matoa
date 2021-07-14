import ProductView from './ProductView';
import ProductDetail from './ProductDetail';
import './style.scss';
import ProductCardV2 from '../../Components/ProductCardV2';

const ProductPage = () => {
    return (
        <div className="product-page">
            <div className="product-page__view">
                <ProductView />
            </div>
            <div className="product-page__detail">
                <div className="product-page__detail__wrapper">
                    <ProductDetail />
                </div>
            </div>
            <div className="product-page__related-products">
               <div className="product-page__related-products__container">
                <div className="product-page__related-products__container__title">
                        <span>Related Products</span>
                        <hr />
                    </div>
                    <div className="product-page__related-products__container__wrapper">
                        <ProductCardV2 />
                        <ProductCardV2 />
                        <ProductCardV2 />
                        <ProductCardV2 />
                    </div>
               </div>
            </div>
        </div>
    )
}

export default ProductPage