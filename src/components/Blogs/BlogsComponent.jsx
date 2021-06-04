import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleBlog from '../Blog/SingleBlogComponent';
import './BlogsStyles.scss';
import ErrorInfo from '../ErrorInfo/ErrorInfo';

const api_uri = 'http://localhost:3000/api/';

function Blogs() {
    const [blogs, setBlogs] = useState();
    const [error, setError] = useState();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        try {
            const result = await axios.get(api_uri + 'blogs');
            console.log(result.data);

            if (result.data.error) setError(result.data.error);
            else {
                setBlogs(result.data);
                setError(null);
            }
        } catch (err) {
            setError(err.message);
        }
    }, []);

    return (
        <div className="blogs">
            {blogs?.length !== 0
                ? blogs?.map((blog) => (
                      <SingleBlog blog={blog} key={blog._id} />
                  ))
                : 'No blogs to display :('}
            {error ? <ErrorInfo text={error} /> : null}
        </div>
    );
}

export default Blogs;
