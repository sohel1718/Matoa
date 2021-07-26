import FloatLableInput from '../FloatLableInput';

const LoginBox = () => {
    return (
        <div className="login__wrapper__body">
            <div className="login__wrapper__body__head">
                <span className="login__wrapper__body__head__title">Welcome Back!</span>
                <span className="login__wrapper__body__head__sub-title">Please Login to your account</span>
            </div>
            <div className="login__wrapper__body__input">
                <FloatLableInput placeholder="Username" />
            </div>
            <div className="login__wrapper__body__input">
                <FloatLableInput placeholder="password" type="password" />
            </div>
            <div className="login__wrapper__body__forgot">
                forgot Password?
            </div>
            <div className="login__wrapper__body__btn">
                <button>Login</button>
            </div>
        </div>
    )
}

export default LoginBox
