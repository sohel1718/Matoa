import ProductCard from '../ProductCard';
import watch1 from '../../images/Products/Watches/singo-maple.png';
import watch2 from '../../images/Products/Watches/singo-ebony.png';
import watch3 from '../../images/Products/Watches/rakai-ebony.png';
import watch4 from '../../images/Products/Watches/way-kambas-mini-maple.png';
import './dealsStyle.scss';

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
    }
]

const MonthlyDeals = () => {
    return (
        <div className="monthly">
            <div className="monthly__container">
                <div className="monthly__container__wrapper">
                    <div className="monthly__container__wrapper__title">
                        <span>Monthly Deals</span>
                        <hr />
                    </div>
                    <div className="monthly__container__wrapper__product">
                        {
                            data.map(product => {
                                return (
                                    <ProductCard product={product} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonthlyDeals