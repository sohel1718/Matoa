import { useState } from 'react';
import { Form } from 'antd';
import FloatingInput from '../../../Components/FloatingInput';
import FloatSelect from '../../../Components/FloatSelect';
import './style.scss';

const rules = {
        fullName: [
            {
              required: true,
              message: 'Please enter your fullname!',
            },
        ],
        email: [
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please enter your email!',
            }
        ],
        phoneNumber: [
            {
                required: true,
                message: 'Please enter your phone number!',
            }, 
            {
                validator: (_, value) =>
                  (value.length === 12) ? Promise.resolve() : Promise.reject(new Error('Phone number must be of 12 digit')),
            }
        ],
        shippingAddress: [
            {
                required: true,
                message: 'Please enter shipping address!',
            }
        ],
        zipCode: [
            {
                required: true,
                message: 'Please enter your zip code!',
            }
        ],
}

const BillingAddress = () => {
    const [formData, setFormData] = useState({});
    const [form] = Form.useForm();

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };


    return (
         <Form
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={formData}
            scrollToFirstError
        >
            <div className="billing">
                <div className="billing__title">
                    Billing Address
                </div>
                <Form.Item rules={rules.fullName} name="fullName" className="billing__item">
                    <FloatingInput
                        FloatLable="Fullname"
                        placeholder="Ex: Rasyidin Arsyad Nasution"
                        name="fullName"
                        value={formData?.fullName}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item rules={rules.email} name="email" className="billing__item">
                    <FloatingInput
                        FloatLable="Email Address"
                        placeholder="Ex: rasyid.arsyad@gmail.com"
                        name="email"
                        value={formData?.email}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item rules={rules.phoneNumber} name="phoneNumber" className="billing__item">
                    <FloatingInput
                        name="phoneNumber"
                        FloatLable="Phone Number"
                        placeholder="Ex: 089111888999"
                        value={formData?.phoneNumber}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item rules={rules.shippingAddress} name="shippingAddress" className="billing__item">
                    <FloatingInput
                        name="shippingAddress"
                        FloatLable="Shipping Address"
                        placeholder="Ex: Patriot Street Number 666, Ngaklik, Sleman"
                        value={formData?.shippingAddress}
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item name="country" className="billing__item">
                    <FloatSelect
                        floatLabel="Country"
                        name="country"
                    />
                </Form.Item>
                <Form.Item name="fullName" className="billing__item">
                    <FloatSelect
                        floatLabel="State"
                    />
                </Form.Item>
                <div className="billing__item">
                    <div className="billing__item__wrapper">
                        <Form.Item name="city" className="billing__item">
                                <FloatSelect
                                    name="city"
                                    floatLabel="City"
                                />
                        </Form.Item>
                        <Form.Item rules={rules.zipCode} name="zipCode" className="billing__item">
                            <FloatingInput
                                name="zipCode"
                                FloatLable="Zip Code"
                                placeholder="Ex: 94024"
                                value={formData?.zipCode}
                                onChange={handleChange}
                        />
                        </Form.Item>
                    </div>
                </div>
                <Form.Item name="courier" className="billing__item">
                    <FloatSelect
                        name="courier"
                        floatLabel="Choose Courier"
                    />
                </Form.Item>
            </div>
            <div className="payment__container__wrapper__right__billing__btn">
                <button type="button" id="outline">Continue Shopping</button>
                <button type="submit" id="filled">Place My Order</button>
            </div>
        </Form>
    )
}   

export default BillingAddress