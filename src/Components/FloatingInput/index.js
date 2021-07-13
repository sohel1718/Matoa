import { Input } from 'antd';
import './style.scss';
const FloatingInput = ({placeholder, onChange, value, FloatLable, ...rest}) => {
    return (
        <div className="float-input">
            <div className="float-input__lable">{FloatLable}</div>
            <Input {...rest} placeholder={placeholder} type="text" onChange={onChange} value={value} />
        </div>
    )
}

export default FloatingInput