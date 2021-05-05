import React from 'react'
import Login from '../components/Login/Login'
import Logo from '../components/Images/Logo.png';

const LoginPage = () => {
    return (
        <div>
            <img style={{ height: '200px', width: '550px' }} src={Logo} alt="Logo" />
            <Login />
        </div>
    )
}

export default LoginPage
