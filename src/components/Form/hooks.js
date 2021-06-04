import { useContext, useState } from 'react';
import axios from 'axios';
import UserContext from '../../context/context';

export const useForm = (callback, login, initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const { userData, setUserData } = useContext(UserContext);

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const inputData = {
            email: values.email,
            password: values.password,
        };

        if (!login) inputData.name = values.name;

        console.log('submitting ', inputData);
        if (login)
            axios
                .post(
                    process.env.REACT_APP_BASE_URI + 'users/login',
                    JSON.stringify(inputData),
                    {
                        headers: {
                            'Content-type': 'application/json',
                        },
                    }
                )
                .then((res) => {
                    console.log(res.data);
                    if (res.data.error) return setError(res.data.error);

                    setError(null);
                    setSuccess('Login Successful');

                    const { name, email, token } = res.data;
                    localStorage.setItem('token', token);

                    setUserData({
                        isLoggedIn: true,
                        name: name,
                        email: email,
                    });

                    console.log('user data', userData);

                    callback();
                })
                .catch((err) => {
                    console.log(err);
                    setError(err.message);
                });
        else
            axios
                .post(
                    process.env.REACT_APP_BASE_URI + 'users/register',
                    JSON.stringify(inputData),
                    {
                        headers: {
                            'Content-type': 'application/json',
                        },
                    }
                )
                .then((res) => {
                    console.log(res.data);
                    if (res.data.error) return setError(res.data.error);

                    setError(null);

                    const { success, message } = res.data;
                    console.log(success, message);

                    setSuccess(message);

                    callback();
                })
                .catch();
    };

    return {
        onChange,
        onSubmit,
        error,
        success,
    };
};
