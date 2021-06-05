import React from 'react';
import NavBar from '../../components/NavBar/NavBarComponent';
import './DashStyles.scss';
import Blogs from '../../components/Blogs/BlogsComponent';
import { Link } from 'react-router-dom';

function DashBoard() {
    return (
        <div>
            <NavBar />
            <h1 className="dash-title">My Blogs</h1>
            <div className="create-blog">
                <Link to="/createblog">Create Blog</Link>
            </div>
            <Blogs />
        </div>
    );
}

export default DashBoard;
