import ListCard from "../../../Components/ListCard";
import product1 from "../../../images/Products/Watches/way-kambas-maple.png";
import product2 from "../../../images/Products/Watches/kaili.png";
import product3 from "../../../images/Products/Watches/sunda.png";
import product4 from "../../../images/Products/Watches/tomia-ebony.png";
import product5 from "../../../images/Products/Watches/mori.png";
import product6 from "../../../images/Products/Watches/alor.png";
import product7 from "../../../images/Products/Watches/sikka.png";
import product8 from "../../../images/Products/Watches/lore-walnut.png";
import product9 from "../../../images/Products/Watches/way-kambas-limited.png";
import './listStyle.scss';

const data = [
    {
        id: 1,
        name: "Maple Series",
        list: [
            {
                id: 1,
                image: product1,
                name: "Way Kambas Maple",
                price: "Rp 1.280.000",
            },
            {
                id: 2,
                image: product2,
                name: "Kaili",
                price: "Rp 1.280.000",
            },
            {
                id: 3,
                image: product3,
                name: "Sunda",
                price: "Rp 1.280.000",
            },
        ]
    },
    {
        id: 2,
        name: "Maple Series",
        list: [
            {
                id: 1,
                image: product4,
                name: "Tomia Ebony",
                price: "Rp 1.280.000",
                discount: "Rp 1.280.000"
            },
            {
                id: 2,
                image: product5,
                name: "Mori",
                price: "Rp 1.280.000",
            },
            {
                id: 3,
                image: product6,
                name: "Alor",
                price: "Rp 1.280.000",
            },
        ]
    },
    {
        id: 3,
        name: "Maple Series",
        list: [
            {
                id: 1,
                image: product7,
                name: "Sikka (Ebony & Maple)",
                price: "Rp 1.280.000",
            },
            {
                id: 2,
                image: product8,
                name: "Lore Walnut",
                price: "Rp 1.280.000",
            },
            {
                id: 3,
                image: product9,
                name: "Way Kambas Limited Edition",
                price: "Rp 1.280.000",
            },
        ]
    }
]

const ProductList = () => {
    return (
        <div className="list">
            <div className="list__wrapper">
                <div className="list__wrapper__lists">
                    {
                        data.map(products => {
                            return (
                                <div key={products.id} className="list__wrapper__lists__container">
                                    <div className="list__wrapper__lists__container__title">
                                        <span>{products.name}</span>
                                        <hr />
                                    </div>
                                    <div className="list__wrapper__lists__container__wrapper">
                                       {
                                           products.list.map(listData => {
                                               return (
                                                <ListCard list={listData} />
                                               )
                                           })
                                       }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="list__wrapper__bottom">
                    <div className="list__wrapper__bottom__border" />
                    <button>See More</button>
                    <div className="list__wrapper__bottom__border" />
                </div>
            </div>
        </div>
    )
}

export default ProductList