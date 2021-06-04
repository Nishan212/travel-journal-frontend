import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Details from '../../components/Details/DetailsComponent';
import NavBar from '../../components/NavBar/NavBarComponent';
import ErrorInfo from '../../components/ErrorInfo/ErrorInfo';
import './BlogStyles.scss';
import Loading from '../../components/Loading/LoadingComponent';

function Blog({ match }) {
    const { id } = match.params;

    const [blog, setBlog] = useState(null);
    const [error, setError] = useState();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const token = localStorage.getItem('token');

        try {
            const options = token
                ? {
                      headers: {
                          'Content-type': 'application/json',
                          Authorization: `Bearer ${token}`,
                      },
                  }
                : null;

            console.log(options);
            const result = await axios.get(
                process.env.REACT_APP_BASE_URI + 'blogs/' + id,
                options
            );
            console.log(result.data);

            if (result.data.error) setError(result.data.error);
            else {
                setBlog(result.data);
                setError(null);
            }
        } catch (err) {
            setError(err.response.data.error);
        }
    }, [id]);

    return (
        <>
            <NavBar />
            <div className="blog-container">
                {blog ? <Details blog={blog} /> : <Loading />}
                {error ? <ErrorInfo text={error} /> : null}
            </div>
        </>
    );
}

export default Blog;
