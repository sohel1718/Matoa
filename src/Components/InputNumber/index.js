import { ReactComponent as Minus } from '../../images/decrease.svg';
import { ReactComponent as Plus } from '../../images/Increase.svg';
import './style.scss';

const InputNumber = () => {
    return (
        <div className="input-number">
            <div className="input-number__decrease">
                <Minus />
            </div>
            <div className="input-number__number">
                3
            </div>
            <div className="input-number__increase">
                <Plus />
            </div>
        </div>
    )
}

export default InputNumber