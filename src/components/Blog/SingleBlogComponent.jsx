import React from 'react';
import { useHistory } from 'react-router-dom';
import './SingleBlogStyles.scss';
import Icon from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/location';

function SingleBlog({ blog }) {
    const history = useHistory();
    const date = new Date(blog.updatedAt);

    console.log(blog);
    return (
        <div
            className="card"
            onClick={() => {
                history.push('/blogs/' + blog._id);
            }}
        >
            <h2 className="title">{blog.title}</h2>
            <div className="date">
                {date.toLocaleString('en', {
                    weekday: 'long',
                }) +
                    ', ' +
                    date.getDate() +
                    ' ' +
                    date.toLocaleString('defualt', {
                        month: 'long',
                    }) +
                    ' ' +
                    date.getFullYear()}
            </div>
            {blog.location && (
                <div className="location-info">
                    <Icon icon={locationIcon} />
                    <span className="location-text">{blog.location}</span>
                </div>
            )}
            <div className="image">
                {blog.images?.map((image) => (
                    <img
                        key={image}
                        src={process.env.REACT_APP_BASE_URI + 'send/' + image}
                        alt={image}
                    />
                ))}
            </div>
            <div className="content">{blog.short}</div>
            <div className="author">~ {blog.user.name}</div>
        </div>
    );
}

export default SingleBlog;
