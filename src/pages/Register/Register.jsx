import React from 'react';
import NavBar from '../../components/NavBar/NavBarComponent';
import Form from '../../components/Form/FormComponent';

function Register() {
    return (
        <>
            <NavBar page="register" />
            <div className="login-container">
                <Form />
            </div>
        </>
    );
}

export default Register;
