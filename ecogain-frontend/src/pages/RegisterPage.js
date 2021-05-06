import React from 'react'
import RegisterForm from '../components/RegisterForm/RegisterForm';
import Logo from '../components/Images/Logo.png';

const RegisterPage = () => {
    return (
        <div>
            <img style={{ height: '200px', width: '550px' }} src={Logo} alt="Logo" />
            <RegisterForm />
        </div>
    )
}

export default RegisterPage
