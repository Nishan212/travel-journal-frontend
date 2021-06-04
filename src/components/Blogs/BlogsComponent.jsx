import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import SingleBlog from '../Blog/SingleBlogComponent';
import './BlogsStyles.scss';
import ErrorInfo from '../ErrorInfo/ErrorInfo';
import UserContext from '../../context/context';

const api_uri = 'http://localhost:3000/api/';

function Blogs({ home }) {
    const [blogs, setBlogs] = useState();
    const [error, setError] = useState();
    const { userData } = useContext(UserContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        try {
            let result;
            if (home) result = await axios.get(api_uri + 'blogs');
            else {
                const token = localStorage.getItem('token');
                result = await axios.get(api_uri + 'blogs/private', {
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
            }
            console.log(result.data);

            if (result.data.error) setError(result.data.error);
            else {
                setBlogs(result.data);
                setError(null);
            }
        } catch (err) {
            setError(err.message);
        }
    }, [home]);

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
