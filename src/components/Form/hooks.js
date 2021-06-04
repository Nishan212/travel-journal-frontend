import { useContext, useState } from 'react';
import axios from 'axios';
import UserContext from '../../context/context';

const api_uri = 'http://localhost:3000/api/';

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(null);
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
        console.log('submitting ', inputData);
        axios
            .post(api_uri + 'users/login', JSON.stringify(inputData), {
                headers: {
                    'Content-type': 'application/json',
                },
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.error) return setError(res.data.error);

                setError(null);

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
    };

    return {
        onChange,
        onSubmit,
        error,
    };
};
