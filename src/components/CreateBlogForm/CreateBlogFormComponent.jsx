import React from 'react';
import Button from '../Button/ButtonComponent';
import Input from '../Input/InputComponent';
import ErrorInfo from '../ErrorInfo/ErrorInfo';
import SuccessInfo from '../SuccessInfo/SuccessInfo';
import './CreateBlogStyles.scss';
import { useForm } from './hooks';
import { Link } from 'react-router-dom';

function CreateBlogForm({ data }) {
    // if (images) console.log('images', images.fileNames);

    const initialState = {
        public: 'no',
        title: null,
        body: null,
        images: data?.fileNames,
        location: null,
    };

    const { error, success, onChange, onSubmit, onClick } = useForm(
        callback,
        initialState
    );

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
                        <div className="upload-link">
                            <Link
                                to={{
                                    pathname: '/upload',
                                }}
                            >
                                Upload Images
                            </Link>
                            <span>{data?.fileNames}</span>
                        </div>
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
