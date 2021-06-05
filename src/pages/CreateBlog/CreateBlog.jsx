import React from 'react';
import CreateBlogForm from '../../components/CreateBlogForm/CreateBlogFormComponent';
import NavBar from '../../components/NavBar/NavBarComponent';

function CreateBlog({ location }) {
    return (
        <div>
            <NavBar />
            <CreateBlogForm data={location.data} />
        </div>
    );
}

export default CreateBlog;
