import  {ReactComponent as Watch} from '../../../images/Products/Watches/watch2.svg';
import {ReactComponent as AddCart} from '../../../images/AddCart.svg';
import {ReactComponent as Arrow} from '../../../images/Arrow.svg';
import './bannerStyle.scss';


const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__wrapper">
                <div className="banner__wrapper__left">
                    <Watch />
                </div>
                <div className="banner__wrapper__right">
                    <div className="banner__wrapper__right__title">
                        <span>WAY KAMBAS MINI EBONY</span>
                        <hr />
                    </div>
                    <div className="banner__wrapper__right__desc">
                        MATOA Way Kambas - This wood is chosen to represent the
                        Sumatran Rhino's skin which is designed with an overlap effect on its
                        strap to represent Rhino's skin.
                    </div>
                    <div className="banner__wrapper__right__discover">
                        Discover
                    </div>
                    <div className="banner__wrapper__right__btnWrapper">
                        <button id="btn-normal"><AddCart /><span>Add to cart</span></button>
                        <button id="btn-outline"><img src="/images/Logo/logo-cicil-white.png" alt="" /></button>
                    </div>
                    <div className="banner__wrapper__btnBottom">
                        <button id="btn-outline"><Arrow /></button>
                        <button id="btn-normal"><Arrow /></button>
                    </div>
                </div>
            </div>
            <div class="banner__cover"></div>
        </div>
    )
}

export default Banner