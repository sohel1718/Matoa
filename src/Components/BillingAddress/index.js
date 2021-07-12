import { useState } from 'react';
import FloatingInput from '../FloatingInput';
import FloatSelect from '../FloatSelect';
import './style.scss';

const BillingAddress = () => {
    const [fullName, setFullName] = useState(null);

    const handleChange = (event) => {
        setFullName(event.target.value);
    }

    function onChange(value) {
        console.log(`selected ${value}`);
      }
      
      function onBlur() {
        console.log('blur');
      }
      
      function onFocus() {
        console.log('focus');
      }
      
      function onSearch(val) {
        console.log('search:', val);
      }


    return (
        <div className="billing">
            <div className="billing__title">
                Billing Address
            </div>
            <div className="billing__item">
                <FloatingInput
                    FloatLable="Fullname"
                    placeholder="Ex: Rasyidin Arsyad Nasution"
                    value={fullName}
                    onChange={handleChange}
                />
            </div>
            <div className="billing__item">
                <FloatingInput
                    FloatLable="Email Address"
                    placeholder="Ex: rasyid.arsyad@gmail.com"
                    value={fullName}
                    onChange={handleChange}
                />
            </div>
            <div className="billing__item">
                <FloatingInput
                    FloatLable="Phone Number"
                    placeholder="Ex: 089111888999"
                    value={fullName}
                    onChange={handleChange}
                />
            </div>
            <div className="billing__item">
                <FloatingInput
                    FloatLable="Shipping Address"
                    placeholder="Ex: Patriot Street Number 666, Ngaklik, Sleman"
                    value={fullName}
                    onChange={handleChange}
                />
            </div>
            <div className="billing__item">
                <FloatSelect
                    floatLabel="Country"
                    onChange={onChange}
                    onBlur={onBlur}
                    onSearch={onSearch}
                />
            </div>
            <div className="billing__item">
                <FloatSelect
                    floatLabel="State"
                    onChange={onChange}
                    onBlur={onBlur}
                    onSearch={onSearch}
                />
            </div>
            <div className="billing__item">
               <div className="billing__item__wrapper">
                    <FloatSelect
                        floatLabel="City"
                        onChange={onChange}
                        onBlur={onBlur}
                        onSearch={onSearch}
                    />
                    
                    <FloatSelect
                        floatLabel="Zip Code"
                        onChange={onChange}
                        onBlur={onBlur}
                        onSearch={onSearch}
                    />
               </div>
            </div>
            <div className="billing__item">
                <FloatSelect
                    floatLabel="Choose Courier"
                    onChange={onChange}
                    onBlur={onBlur}
                    onSearch={onSearch}
                />
            </div>
        </div>
    )
}   

export default BillingAddress