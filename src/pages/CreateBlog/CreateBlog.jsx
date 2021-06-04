import React from 'react';
import CreateBlogForm from '../../components/CreateBlogForm/CreateBlogFormComponent';
import NavBar from '../../components/NavBar/NavBarComponent';

function CreateBlog() {
    return (
        <div>
            <NavBar />
            <CreateBlogForm />
        </div>
    );
}

export default CreateBlog;
