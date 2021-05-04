import React from 'react'
// import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'

var base64 = require('base-64')
// import RegisterPage from './../pages/RegisterPage'



const Login = () => {
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
        sessionStorage.setItem('token', data.token); //stores the jwt in browser's sessionStorage
        console.log(data) // can view token with the developers tools

        if (data.token !== null && data.token !== '' && data.token !== undefined) {
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
    const loginFormSubmitted = async (e) => {
        e.preventDefault()
        loginUser(username, password)
    } // not entirely sure what this function does

    return (
        <div>
            {/* <NormalLoginForm /> */}
            <form onSubmit={loginFormSubmitted}>
                <div class="input-group">
                    <label>Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="please enter your username" />
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="please enter your password" />
                </div>
                <input type="submit" value="Log in" />
            </form>
            <button onClick={() => history.push('/registerpage')}>Register Now</button>
        </div>
    )
}


export default Login

