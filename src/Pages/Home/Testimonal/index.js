import person from '../../../images/testimonal.png';
import {ReactComponent as RightArrow} from '../../../images/arrow-right.svg';
import {ReactComponent as LeftArrow} from '../../../images/arrow-left.svg';
import './testimonalStyle.scss';

const Testimonal = () => {
    return (
        <div className="testimonal">
            <div className="testimonal__wrapper">
                <div className="testimonal__wrapper__left">
                    <div className="testimonal__wrapper__left__bottom" />
                    <div className="testimonal__wrapper__left__overlay" />
                    <div className="testimonal__wrapper__left__top">
                        <img src={person} alt="" />
                    </div>
                    <div className="testimonal__wrapper__left__navigation">
                            <LeftArrow className="testimonal__wrapper__left__navigation__arrow" />
                            <RightArrow />
                    </div>
                </div>
                <div className="testimonal__wrapper__right">
                    <div className="testimonal__wrapper__right__title">
                        <span>Testimonials</span>
                        <hr />
                    </div>
                    <div className="testimonal__wrapper__right__desc">
                        Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.
                    </div>
                    <div className="testimonal__wrapper__right__creator">
                        <div className="testimonal__wrapper__right__creator__name">Gita Savitri</div>
                        <div className="testimonal__wrapper__right__creator__tag">Content Creator/Influencer</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonal