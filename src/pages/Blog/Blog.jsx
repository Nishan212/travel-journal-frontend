import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Details from '../../components/Details/DetailsComponent';
import NavBar from '../../components/NavBar/NavBarComponent';
import ErrorInfo from '../../components/ErrorInfo/ErrorInfo';
import './BlogStyles.scss';

const api_uri = 'http://localhost:3000/api/';

function Blog({ match }) {
    const { id } = match.params;

    const [blog, setBlog] = useState(null);
    const [error, setError] = useState();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        try {
            const result = await axios.get(api_uri + 'blogs/' + id);
            console.log(result.data);

            if (result.data.error) setError(result.data.error);
            else {
                setBlog(result.data);
                setError(null);
            }
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
    }, [id]);

    return (
        <>
            <NavBar page="blog" />
            <div className="blog-container">
                {blog ? <Details blog={blog} /> : 'Loading'}
                {error ? <ErrorInfo text={error} /> : null}
            </div>
        </>
    );
}

export default Blog;
