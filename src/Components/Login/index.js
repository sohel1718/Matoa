import { useState } from 'react';
import LoginBox from '../LoginBox';
import SignUpBox from '../SignUpBox';
import './style.scss';


const Login = ({setToggleLogin}) => {
    const [toggleSignUp, setToggleSignUp] = useState(false);

    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__wrapper__close">
                    <img onClick={() => setToggleLogin(false)} src="/images/close.png" alt="" />
                </div>
                {
                    !toggleSignUp && (
                        <LoginBox />
                    )
                }
                {
                    toggleSignUp && (
                        <SignUpBox />
                    )
                }
                <div onClick={() => setToggleSignUp(!toggleSignUp)} className="login__wrapper__new-acc">
                    {toggleSignUp ? "Exisiting Account? Let's login." : "New to matoa? create an account."}
                </div>
            </div>
            <div className="login__background" />
        </div>
    )
}

export default Login