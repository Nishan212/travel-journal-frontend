import React from 'react';
import './DetailsStyles.scss';
import Icon from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/location';

function Details({ blog }) {
    const date = new Date(blog.updatedAt);
    return (
        <div className="details-card">
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
            <div className="details-image">
                {blog.images &&
                    blog.images.map((image) => (
                        <img
                            key={image}
                            src={
                                process.env.REACT_APP_BASE_URI + 'send/' + image
                            }
                            alt={image}
                        />
                    ))}
            </div>
            <div className="content">{blog.body}</div>
            <div className="author details-author">~ {blog.user.name}</div>
        </div>
    );
}

export default Details;
