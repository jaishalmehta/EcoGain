import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'

var base64 = require('base-64')
// import RegisterPage from './../pages/RegisterPage'



const Login = () => {
    const onFinish = (values, e) => {
        console.log('Received values of form: ', values);
    };
    const history = useHistory()

    // set states for form inputs
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //const token = sessionStorage.getItem('token')


    // state for error
    // const [formError, setFormError] = setError("")

    const loginUser = async (username, password) => {

        const res = await fetch(`http://localhost:5000/login`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Basic ${base64.encode(`${username}:${password}`)}`
            },
        });

        const data = await res.json()
        //sessionStorage.setItem('token', data.token); //stores the jwt in browser's sessionStorage
        console.log(data) // can view token with the developers tools

        if (data.token !== null && data.token !== '' && data.token !== undefined) {
            localStorage.setItem('token', data.token)
            history.push('/userdashboardpage')
        } // if the token is present and valid, user is directed to userdashboard page

    }
    // next step - keep the token when the browser is refreshed -> will need the token to be stored globally so it can be accessed by other components
    // next step - logging out which will involve deleteing the token from the sessionStorage

    // maybe we also want the id returned from the backend so we can also store that so we can use it 
    // to display the correct user profile page
    // upon form submission, need to try to log in, then route to user dashboard page
    // we might need to use the id of the user to push them to the user dashboard for their user
    // or maybe will just need id for pushing them to the user profile page
    const loginFormSubmitted = async (values) => {
        // e.preventDefault()
        console.log('yay')
        loginUser(username, password)
    } // not entirely sure what this function does

    return (
        <div>
            <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={(values) => loginFormSubmitted(values)}>



                <div >
                    <Form.Item style={{ width: '350px', alignItems: 'center' }} name="username" rules={[{ required: true, message: 'Please input your Username!', },]} noStyle>
                        <Input style={{ width: '350px', alignItems: 'center' }} prefix={<UserOutlined className="site-form-item-icon" />} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                    </Form.Item>
                </div>

                <br />

                <div>
                    <Form.Item style={{ width: '350px', alignItems: 'center' }} name="password" rules={[{ required: true, message: 'Please input your Password!' },]} noStyle>
                        <Input style={{ width: '350px', alignItems: 'center' }} prefix={<LockOutlined className="site-form-item-icon" />} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </Form.Item>
                </div>
                <br />

                <Form.Item>
                    <div>
                        <div>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </div>
                        <div>
                            <a className="login-form-forgot" href="">
                                Forgot password?
                            </a>
                        </div>
                    </div>


                </Form.Item>

                <Form.Item>
                    <div>
                        <Button style={{ width: '110px', height: '30px' }} type="submit" value="Log in" htmlType="submit" className="login-form-button">
                            Login here
                        </Button>
                    </div>
                    <br />
                    <div>
                        <Button style={{ width: '110px', height: '30px' }} onClick={() => history.push('/registerpage')}>
                            Register now
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div >
    )
}


export default Login

