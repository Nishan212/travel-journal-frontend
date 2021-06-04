import React from 'react';
import NavBar from '../../components/NavBar/NavBarComponent';
import Form from '../../components/Form/FormComponent';

function Register() {
    return (
        <>
            <NavBar />
            <div className="login-container">
                <Form />
            </div>
        </>
    );
}

export default Register;
