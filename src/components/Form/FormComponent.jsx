import React from 'react';
import Input from '../Input/InputComponent';
import Button from '../Button/ButtonComponent';
import { Link, useHistory } from 'react-router-dom';
import './FormStyles.scss';
import { useForm } from './hooks';
import ErrorInfo from '../ErrorInfo/ErrorInfo';

function Form({ login }) {
    const history = useHistory();
    const initialState = {
        email: '',
        password: '',
    };

    const { error, onChange, onSubmit } = useForm(callback, initialState);

    function callback() {
        history.push('/dashboard');
    }

    return (
        <div className="form-container">
            <form onSubmit={onSubmit}>
                {error ? <ErrorInfo text={error} /> : null}
                <div className="form-content">
                    <h1>{login ? 'Login' : 'Register'}</h1>
                    <div className="form-input">
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
                        {login ? (
                            <div className="ask-register">
                                <span>Not a member?</span>
                                <Link to="/register"> Register</Link>
                            </div>
                        ) : null}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;
