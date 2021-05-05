import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { useHistory } from 'react-router-dom';
import "antd/dist/antd.css";
import { Form, Input, Select, Checkbox, Button } from "antd";
const { Option } = Select;



const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 9
        }
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 8
        }
    }
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 16,
            offset: 5
        }
    }
};

const RegisterForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    // state for form input
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [passwordOne, setPasswordOne] = useState('')
    const [passwordTwo, setPasswordTwo] = useState('')

    const history = useHistory()


    const makeNewUser = async (user) => {
        let resBody = JSON.stringify(user);
        console.log(resBody)
        const res = await fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: resBody,
        });
        const data = await res.json()
        console.log(data)
        history.push('/')
    }


    const submitRegisterForm = (e) => {
        e.preventDefault()
        // can do validation on password == password 2
        // call func to do POST request to make new user
        makeNewUser({ name, username, email, passwordOne })

    }

    // can do validation on password == password 2
    return (
        <div>
            <Form {...formItemLayout} form={form} name="register" onFinish={onFinish} scrollToFirstError onSubmit={submitRegisterForm}>
                <div>
                    <Form.Item name="Full Name" label="Full Name" tooltip="What is your Full Name?" rules={[{ required: true, message: "Please input your full name!", whitespace: true }]}>
                        <Input style={{ width: '350px', alignItems: 'center' }} value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="What is your full name?" />
                    </Form.Item>

                </div>
                <div>
                    <Form.Item name="Username" label="Username" tooltip="What do you want others to call you?" rules={[{ required: true, message: "Please input your username!", whitespace: true }]}>
                        <Input style={{ width: '350px', alignItems: 'center' }} value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Please enter a username" />
                    </Form.Item>
                </div>
                <div>
                    <Form.Item name="email" label="E-mail" tooltip="What is your email address?" rules={[{ type: "email", message: "The input is not valid E-mail!" }, { required: true, message: "Please input your E-mail!" }]}>
                        <Input style={{ width: '350px', alignItems: 'center' }} value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="What's your email?" />
                    </Form.Item>
                </div>

                <div>
                    <Form.Item name="password" label="Password" tooltip="Please select a password." rules={[{ required: true, message: "Please input your password!" }]} hasFeedback >
                        <Input.Password style={{ width: '350px', alignItems: 'center' }} value={passwordOne} onChange={(e) => setPasswordOne(e.target.value)} type="text" placeholder="Please enter a password" />
                    </Form.Item>
                </div>

                <div>
                    <Form.Item name="confirm" label="Confirm Password" tooltip="Please re-enter your selected password." dependencies={["password"]} hasFeedback
                        rules={[
                            { required: true, message: "Please confirm your password!" },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(
                                        new Error("The two passwords entered do not match!")
                                    );
                                }
                            })
                        ]}
                    >
                        <Input.Password style={{ width: '350px', alignItems: 'center' }} value={passwordTwo} onChange={(e) => setPasswordTwo(e.target.value)} type="text" placeholder="Please repeat your password" />
                    </Form.Item>
                </div>

                <Form.Item name="terms and conditions" valuePropName="checked" rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error("Please accept the terms and conditions")) }]} {...tailFormItemLayout}>
                    <Checkbox style={{ width: '250px', align: 'center' }}>
                        I have read and accept EcoGain's <a href="">terms and conditions</a>
                    </Checkbox>
                </Form.Item>
                <div>
                    <Form.Item {...tailFormItemLayout}>
                        <Input style={{ width: '110px', height: '30px', align: 'center' }} type="submit" value="Register now" htmlType="submit" />
                    </Form.Item>
                </div>




            </Form>
        </div>
    )
}

export default RegisterForm
