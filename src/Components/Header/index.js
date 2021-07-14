import { useState } from 'react';
import { AutoComplete } from 'antd';
import Login from '../Login';
import ModalView from '../ModalView';
import CheckoutView from '../CheckoutView';
import { ReactComponent as Search } from '../../images/Search.svg';
import { ReactComponent as User } from '../../images/User.svg';
import { ReactComponent as Cart } from '../../images/Cart.svg';
import './headerStyle.scss';

const { Option } = AutoComplete;

const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
});

const Header = () => {
    const [toggleLogin, setToggleLogin] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [options, setOptions] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleChekout = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onSearch = (searchText) => {
        setOptions(
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
        );
    };

    const onSelect = (data) => {
        console.log('onSelect', data);
    };


    return (
        <div className="header">
            <div className="header__wrapper">
                    <div className="header__wrapper__logo">
                        <img src="./images/Logo/logo.png" alt="" />
                    </div>
                    {
                        !toggleSearch && (
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
                        )
                    }
                    {
                        toggleSearch && (
                            <div className="header__wrapper__search-bar">
                                <AutoComplete
                                    options={options}
                                    onSelect={onSelect}
                                    onSearch={onSearch}
                                    placeholder="Search for products, brands and more..."
                                />
                            </div>
                        )
                    }
                    <ModalView isModalVisible={isModalVisible} handleCancel={handleCancel} handleOk={handleChekout}>
                        <CheckoutView />
                    </ModalView>
                    <div className="header__wrapper__links">
                        <div className="header__wrapper__links__link">
                        {!toggleSearch ? <Search onClick={() => setToggleSearch(!toggleSearch)} /> : <img onClick={() => setToggleSearch(!toggleSearch)} src="/images/close.png" alt="" />}
                        </div>
                        <div onClick={() => setToggleLogin(true)} className="header__wrapper__links__link">
                            <User />
                            <span>Log In</span>
                        </div>
                        <div onClick={() => setIsModalVisible(true)}className="header__wrapper__links__link">
                                <div className="header__wrapper__links__link__circle"/>
                                <Cart className="header__wrapper__links__link__cart" />
                        </div>
                    </div>
            </div>
            {toggleLogin &&
                <Login setToggleLogin={setToggleLogin} />
            }
        </div>
    )
}

export default Header