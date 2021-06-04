import React from 'react';
import Button from '../Button/ButtonComponent';
import Input from '../Input/InputComponent';
import ErrorInfo from '../ErrorInfo/ErrorInfo';
import SuccessInfo from '../SuccessInfo/SuccessInfo';
import './CreateBlogStyles.scss';
import { useForm } from './hooks';

function CreateBlogForm() {
    const initialState = {
        public: false,
        title: null,
        body: null,
        images: null,
        location: null,
    };

    const {
        error,
        success,
        onChange,
        onFileChange,
        onFileSubmit,
        onSubmit,
        onClick,
    } = useForm(callback, initialState);

    function callback() {}

    return (
        <div className="create-blog-container">
            <form className="blog-form" onSubmit={onSubmit}>
                {error && <ErrorInfo text={error} />}
                {success && <SuccessInfo text={success} />}
                <h1>Create Blog</h1>
                <div className="form-content">
                    <div className="form-input">
                        <Input
                            label="Title"
                            name="title"
                            type="text"
                            placeholder="title"
                            onChange={onChange}
                        />
                        <Input
                            label="Body"
                            name="body"
                            type="textarea"
                            placeholder="body"
                            onChange={onChange}
                        />
                        <Input
                            label="Location"
                            name="location"
                            type="text"
                            placeholder="location"
                            onChange={onChange}
                        />
                        <div className="public-selector">
                            <div className="select-1">
                                <label htmlFor="private">Private</label>
                                <input
                                    type="radio"
                                    name="public"
                                    id="no"
                                    onClick={onClick}
                                />
                            </div>
                            <div className="select-2">
                                <label htmlFor="public">Public</label>
                                <input
                                    type="radio"
                                    name="public"
                                    id="yes"
                                    onClick={onClick}
                                />
                            </div>
                        </div>
                        <Input
                            type="file"
                            name="images"
                            id="images"
                            onChange={onFileChange}
                        />
                        <div className="submit-button">
                            <Button text="Create Blog" type="submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateBlogForm;
