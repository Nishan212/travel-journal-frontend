import { useState } from 'react';
import axios from 'axios';

export const useForm = (callback, formData, initialState = {}) => {
    const [files, setFiles] = useState(initialState);
    const [fileNames, setFileNames] = useState(initialState);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const onChange = (event) => {
        setFiles(event.target.files[0]);
        setFileNames(event.target.files[0].name);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        formData.append('images', files);
        const token = localStorage.getItem('token');
        axios
            .post(process.env.REACT_APP_BASE_URI + 'upload', formData, {
                headers: {
                    'Content-type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.error) return setError(res.data.error);

                const { message, fileNamesArray } = res.data;
                console.log(fileNamesArray);

                setFileNames(fileNamesArray);
                setError(null);
                setSuccess(message);

                callback();
            })
            .catch((err) => {
                console.log(err);
                setError(err.response.data.error ?? err.mesage);
            });
    };

    return {
        onChange,
        onSubmit,
        error,
        success,
        fileNames,
    };
};
