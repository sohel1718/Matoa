import { ReactComponent as Search } from '../../images/Search.svg';
import { ReactComponent as User } from '../../images/User.svg';
import { ReactComponent as Cart } from '../../images/Cart.svg';
import './headerStyle.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__wrapper">
                    <div className="header__wrapper__logo">
                        <img src="./images/Logo/logo.png" alt="" />
                    </div>
                    <div className="header__wrapper__links">
                        <div className="header__wrapper__links__link">
                            Watches
                        </div>
                        <div className="header__wrapper__links__link">
                            Eyewear
                        </div>
                        <div className="header__wrapper__links__link">
                            Accessories
                        </div>
                        <div className="header__wrapper__links__link">
                            News
                        </div>
                    </div>
                    <div className="header__wrapper__links">
                        <div className="header__wrapper__links__link">
                            <Search />
                        </div>
                        <div className="header__wrapper__links__link">
                            <User />
                            <span>Log In</span>
                        </div>
                        <div className="header__wrapper__links__link">
                                <div className="header__wrapper__links__link__circle"/>
                                <Cart className="header__wrapper__links__link__cart" />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Header