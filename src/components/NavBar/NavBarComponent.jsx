import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBarStyles.scss';
import UserContext from '../../context/context';

function NavBar({ login }) {
    const { userData, setUserData } = useContext(UserContext);
    console.log(userData);

    const { isLoggedIn } = userData;

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
                    {!login &&
                        (isLoggedIn ? (
                            <Link
                                to="/"
                                onClick={() => {
                                    localStorage.removeItem('token');
                                    setUserData({
                                        isLoggedIn: false,
                                        name: null,
                                        email: null,
                                    });
                                }}
                            >
                                Log Out
                            </Link>
                        ) : (
                            <Link to="/login">Log In</Link>
                        ))}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
