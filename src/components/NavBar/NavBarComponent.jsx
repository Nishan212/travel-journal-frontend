import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarStyles.scss';

function NavBar({ page }) {
    return (
        <nav className="navbar">
            <div className="title">
                <Link to="/">TRAVEL JOURNAL</Link>
            </div>
            <div className="tabs">
                <div className="tab map">
                    <Link to="/map">Map</Link>
                </div>
                <div className="tab login">
                    {page === 'login' ? null : page === 'dashboard' ? (
                        <Link to="/">Log Out</Link>
                    ) : (
                        <Link to="/login">Log In</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
