import './listCardStyle.scss';

const ListCard = ({list}) => {
    return (
        <div className="list-card">
            <div className="list-card__right">
                <img src={list.image} alt="" />
            </div>
            <div className="list-card__left">
                <span className="list-card__left__title">
                    {list.name}
                </span>
                <span className="list-card__left__price">
                    {list.price}
                </span>
            </div>
        </div>
    )
}

export default ListCard