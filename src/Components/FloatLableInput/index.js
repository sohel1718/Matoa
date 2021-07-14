import { Input } from 'antd';
import './style.scss';
const FloatLableInput = ({placeholder, onChange, value, FloatLable, ...rest}) => {
    return (
        <div className="float-lable">
            <div className="float-input__lable">{FloatLable}</div>
            <Input {...rest} placeholder={placeholder} type="text" onChange={onChange} value={value} />
        </div>
    )
}

export default FloatLableInput