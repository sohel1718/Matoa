import { Input } from 'antd';
import './style.scss';
const FloatingInput = ({placeholder, onChange, value, FloatLable}) => {
    return (
        <div className="float-input">
            <div className="float-input__lable">{FloatLable}</div>
            <Input placeholder={placeholder} type="text" onChange={onChange} value={value} />
        </div>
    )
}

export default FloatingInput