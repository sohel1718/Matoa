import { Select } from 'antd';
import './style.scss';

const { Option } = Select;

const FloatSelect = ({onChange, onBlur, onFocus, onSearch, floatLabel}) => {

    return (
        <div className="floating-select">
            <div className="floating-select__lable">{floatLabel}</div>
            <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >   
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
        </div>
    )
}

export default FloatSelect;