import React from 'react';
import Input from '../Input/InputComponent';
import Button from '../Button/ButtonComponent';
import { Link } from 'react-router-dom';
import './FormStyles.scss';

function Form({ login }) {
    console.log(login);
    return (
        <div className="form-container">
            <form onSubmit={'hehe'}>
                <div className="form-content">
                    <h1>{login ? 'Login' : 'Register'}</h1>
                    <div className="form-input">
                        <Input
                            label="Email"
                            name="email"
                            type="text"
                            placeholder="email"
                        />
                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="password"
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
