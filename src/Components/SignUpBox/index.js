import FloatLableInput from '../FloatLableInput';

const SignUpBox = () => {
    return (
        <div className="login__wrapper__body">
            <div className="login__wrapper__body__head">
                <span className="login__wrapper__body__head__title">Welcome To Matoa!</span>
                <span className="login__wrapper__body__head__sub-title">Let's create your account</span>
            </div>
            <div className="login__wrapper__body__input">
                <FloatLableInput placeholder="email" />
            </div>
            <div className="login__wrapper__body__input">
                <FloatLableInput placeholder="Username" />
            </div>
            <div className="login__wrapper__body__input">
                <FloatLableInput
                    placeholder="password"
                    type="password"
                />
            </div>
            <div className="login__wrapper__body__input">
                <FloatLableInput
                    placeholder="confirm password"
                    type="Password"
                />
            </div>
            <div className="login__wrapper__body__btn">
                <button>SignUp</button>
            </div>
        </div>
    )
}

export default SignUpBox
