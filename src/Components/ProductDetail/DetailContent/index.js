import watchDesc from '../../../images/Products/Watches/watch-desc.png'
import './style.scss';

const DetailContent = () => {
    return (
        <div className="detail-content">
            <div className="detail-content__wrapper">
                <div className="detail-content__wrapper__title">
                    Material
                </div>
                <div className="detail-content__wrapper__desc">
                MATOA Way Kambas - Sumatran Rhino comes with a
                material form of Makassar Ebony (Diospyros celebica).
                This wood is chosen to represent the Sumatran Rhino's 
                skin which is designed with an overlap effect on its 
                strap to represent Rhino's skin. Sumatran Rhino has
                unique skin fold, the skin is fairly thin about 10-16mm,
                and is soft and pliable.
                </div>
            </div>
            <div className="detail-content__info-image">
                <img src={watchDesc} alt="" />
            </div>
        </div>
    )
}

export default DetailContent;