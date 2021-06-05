import { useState } from 'react';
import axios from 'axios';

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const onClick = (event) => {
        setValues({ ...values, [event.target.name]: event.target.id });
        console.log(event.target.name, values);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const inputData = {
            public: values.public === 'yes' ?? false,
            title: values.title,
            body: values.body,
            images: initialState.images,
            location: values.location,
        };
        console.log('submitting ', inputData);

        const token = localStorage.getItem('token');
        axios
            .post(
                process.env.REACT_APP_BASE_URI + 'blogs',
                JSON.stringify(inputData),
                {
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                if (res.data.error) return setError(res.data.error);

                const { message } = res.data;

                setError(null);
                setSuccess(message);

                callback();
            })
            .catch((err) => {
                console.log(err);
                setError(err.response.data.error ?? err.message);
            });
    };

    return {
        onChange,
        onClick,
        onSubmit,
        error,
        success,
    };
};
