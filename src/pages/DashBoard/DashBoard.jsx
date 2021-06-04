import React from 'react';
import NavBar from '../../components/NavBar/NavBarComponent';
import './DashStyles.scss';

function DashBoard() {
    return (
        <div>
            <NavBar page="dashboard" />
            <h1 className="dash-title">My Blogs</h1>
        </div>
    );
}

export default DashBoard;
