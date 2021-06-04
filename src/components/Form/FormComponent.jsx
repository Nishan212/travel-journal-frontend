import React from 'react';
import Input from '../Input/InputComponent';
import Button from '../Button/ButtonComponent';
import { Link, useHistory } from 'react-router-dom';
import './FormStyles.scss';
import { useForm } from './hooks';
import ErrorInfo from '../ErrorInfo/ErrorInfo';
import SuccessInfo from '../SuccessInfo/SuccessInfo';

function Form({ login }) {
    const history = useHistory();
    const initialState = {
        name: '',
        email: '',
        password: '',
    };

    const { error, success, onChange, onSubmit } = useForm(
        callback,
        login,
        initialState
    );

    function callback() {
        if (login) history.push('/dashboard');
        else history.push('/login');
    }

    return (
        <div className="form-container">
            <form id="login-form" onSubmit={onSubmit}>
                {error && <ErrorInfo text={error} />}
                {success && <SuccessInfo text={success} />}
                <div className="form-content">
                    <h1>{login ? 'Login' : 'Register'}</h1>
                    <div className="form-input">
                        {!login && (
                            <Input
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="name"
                                onChange={onChange}
                            />
                        )}
                        <Input
                            label="Email"
                            name="email"
                            type="text"
                            placeholder="email"
                            onChange={onChange}
                        />
                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="password"
                            onChange={onChange}
                        />
                        <div className="submit-button">
                            <Button
                                text={login ? 'Login' : 'Register'}
                                type="submit"
                            />
                        </div>
                        {login && (
                            <div className="ask-register">
                                <span>Not a member?</span>
                                <Link to="/register"> Register</Link>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;
