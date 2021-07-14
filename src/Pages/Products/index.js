import ProductCard from '../../Components/ProductCard';
import ProductFilter from './ProductFilter';
import { Select } from 'antd';
import watch1 from '../../images/Products/Watches/singo-maple.png';
import watch2 from '../../images/Products/Watches/singo-ebony.png';
import watch3 from '../../images/Products/Watches/rakai-ebony.png';
import watch4 from '../../images/Products/Watches/way-kambas-mini-maple.png';
import './style.scss';

const data = [
    {
        id: 1,
        image: watch1,
        name: "Singo Maple",
        discount: "20% Off",
        cutPrice: "Rp 1.500.000",
        price: "Rp 1.264.000"
    },
    {
        id: 2,
        image: watch2,
        name: "Singo Maple",
        discount: "20% Off",
        cutPrice: "Rp 1.500.000",
        price: "Rp 1.264.000"
    },
    {
        id: 3,
        image: watch3,
        name: "Singo Maple",
        discount: "20% Off",
        cutPrice: "Rp 1.500.000",
        price: "Rp 1.264.000"
    },
    {
        id: 4,
        image: watch4,
        name: "Singo Maple",
        discount: "20% Off",
        cutPrice: "Rp 1.500.000",
        price: "Rp 1.264.000"
    },
    {
        id: 2,
        image: watch2,
        name: "Singo Maple",
        discount: "20% Off",
        cutPrice: "Rp 1.500.000",
        price: "Rp 1.264.000"
    },
    {
        id: 3,
        image: watch3,
        name: "Singo Maple",
        discount: "20% Off",
        cutPrice: "Rp 1.500.000",
        price: "Rp 1.264.000"
    },
    {
        id: 4,
        image: watch4,
        name: "Singo Maple",
        discount: "20% Off",
        cutPrice: "Rp 1.500.000",
        price: "Rp 1.264.000"
    },
    {
        id: 2,
        image: watch2,
        name: "Singo Maple",
        discount: "20% Off",
        cutPrice: "Rp 1.500.000",
        price: "Rp 1.264.000"
    },
    {
        id: 3,
        image: watch3,
        name: "Singo Maple",
        discount: "20% Off",
        cutPrice: "Rp 1.500.000",
        price: "Rp 1.264.000"
    },
    {
        id: 4,
        image: watch4,
        name: "Singo Maple",
        discount: "20% Off",
        cutPrice: "Rp 1.500.000",
        price: "Rp 1.264.000"
    },
]

const { Option } = Select;

const Product = () => {
    return (
        <div className="product-container">
            <div className="product-container__wrapper">
                <div className="product-container__wrapper__filter">
                    <ProductFilter />
                </div>
                <div className="product-container__wrapper__main">
                    <div className="product-container__wrapper__main__header">
                        <div className="product-container__wrapper__main__header__left">
                            3000 Products found
                        </div>
                        <div className="product-container__wrapper__main__header__right">
                            <span>Sort: </span>
                            <Select defaultValue="High To Low">
                                <Option value="jack">High To Low</Option>
                                <Option value="lucy">Low To High</Option>
                                <Option value="tom">Popularity</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="product-container__wrapper__main__products">
                        {
                            data.map(product => {
                                return (
                                    <ProductCard className="product-container__wrapper__main__products__card" product={product} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product