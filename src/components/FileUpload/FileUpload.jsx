import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from './hooks';
import Input from '../Input/InputComponent';
import Button from '../Button/ButtonComponent';
import './FileUploadStyles.scss';
import ErrorInfo from '../ErrorInfo/ErrorInfo';
import SuccessInfo from '../SuccessInfo/SuccessInfo';

function FIleUpload() {
    const formData = new FormData();
    const intialState = [];

    const { fileNames, error, success, onChange, onSubmit } = useForm(
        callback,
        formData,
        intialState
    );

    function callback() {}

    return (
        <div className="upload-container">
            <div className="go-back">
                <Link
                    to={{
                        pathname: '/createblog',
                        data: { fileNames },
                    }}
                >
                    Go Back
                </Link>
            </div>
            <form className="upload-form" onSubmit={onSubmit}>
                {error && <ErrorInfo text={error} />}
                {success && <SuccessInfo text={success} />}
                <h1>Upload</h1>
                <Input
                    label="Choose Image"
                    name="images"
                    type="file"
                    onChange={onChange}
                />
                <div className="submit-button">
                    <Button text="Upload" type="submit" />
                </div>
            </form>
        </div>
    );
}

export default FIleUpload;
