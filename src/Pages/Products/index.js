import ProductView from '../../Components/ProductView';
import ProductDetail from '../../Components/ProductDetail';
import './style.scss';
import ProductCardV2 from '../../Components/ProductCardV2';

const ProductPage = () => {
    return (
        <div className="product-page">
            <div className="product-page__view">
                <ProductView />
            </div>
            <div className="product-page__detail">
                <ProductDetail />
            </div>
            <div className="product-page__related-products">
                <div className="product-page__related-products__title">
                    <span>Related Products</span>
                    <hr />
                </div>
                <div className="product-page__related-products__wrapper">
                    <ProductCardV2 />
                    <ProductCardV2 />
                    <ProductCardV2 />
                    <ProductCardV2 />
                </div>
            </div>
        </div>
    )
}

export default ProductPage