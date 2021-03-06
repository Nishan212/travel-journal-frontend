import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import SingleBlog from '../Blog/SingleBlogComponent';
import './BlogsStyles.scss';
import ErrorInfo from '../ErrorInfo/ErrorInfo';
import Loading from '../Loading/LoadingComponent';
import { Link } from 'react-router-dom';
import UserConext from '../../context/context';

function Blogs({ home }) {
    const [blogs, setBlogs] = useState();
    const [error, setError] = useState();
    const { userData } = useContext(UserConext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        try {
            let result;
            if (home)
                result = await axios.get(
                    process.env.REACT_APP_BASE_URI + 'blogs'
                );
            else {
                const token = localStorage.getItem('token');
                result = await axios.get(
                    process.env.REACT_APP_BASE_URI + 'blogs/private',
                    {
                        headers: {
                            'Content-type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            }
            console.log(result.data);

            if (result.data.error) setError(result.data.error);
            else {
                setBlogs(result.data);
                setError(null);
            }
        } catch (err) {
            console.log('okay wait', err.response.data.error);
            setError(err.message ?? err.response.data.error);
        }
    }, [home]);

    return (
        <>
            <div className="my-blogs-button">
                {home && userData.isLoggedIn ? (
                    <Link to="/dashboard">My Blogs</Link>
                ) : null}
            </div>
            <div className="blogs">
                {blogs ? (
                    blogs?.length !== 0 ? (
                        blogs?.map((blog) => (
                            <SingleBlog blog={blog} key={blog._id} />
                        ))
                    ) : (
                        'No blogs to display :('
                    )
                ) : (
                    <Loading />
                )}
                {error ? <ErrorInfo text={error} /> : null}
            </div>
        </>
    );
}

export default Blogs;
