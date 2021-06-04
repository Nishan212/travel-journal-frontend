import React from 'react';
import Form from '../../components/Form/FormComponent';
import NavBar from '../../components/NavBar/NavBarComponent';
import './LoginStyles.scss';

function Login() {
    return (
        <>
            <NavBar login />
            <div className="login-container">
                <Form login />
            </div>
        </>
    );
}

export default Login;
