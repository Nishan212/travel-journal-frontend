import { useState } from 'react';
import axios from 'axios';

const api_uri = 'http://localhost:3000/api/';

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState(null);

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const onClick = (event) => {
        setValues({ ...values, [event.target.name]: event.target.id });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const inputData = {
            public: values.public === 'yes' ?? false,
            title: values.title,
            body: values.body,
            images: null,
            location: values.location,
        };
        console.log('submitting ', inputData);

        const token = localStorage.getItem('token');
        axios
            .post(api_uri + 'blogs', JSON.stringify(inputData), {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.error) return setError(res.data.error);

                setError(null);

                callback();
            })
            .catch((err) => {
                console.log(err);
                setError(err.message ?? err.response.data.error);
            });
    };

    return {
        onChange,
        onClick,
        onSubmit,
        error,
    };
};
