import React from 'react';
import CreateBlogForm from '../../components/CreateBlogForm/CreateBlogFormComponent';
import NavBar from '../../components/NavBar/NavBarComponent';

function CreateBlog({ location }) {
    return (
        <div>
            <NavBar />
            <CreateBlogForm images={location.images} />
        </div>
    );
}

export default CreateBlog;
