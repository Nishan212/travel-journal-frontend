import React from 'react';
import NavBar from '../../components/NavBar/NavBarComponent';
import './DashStyles.scss';
import Blogs from '../../components/Blogs/BlogsComponent';
import Button from '../../components/Button/ButtonComponent';
import { useHistory } from 'react-router';

function DashBoard() {
    const history = useHistory();

    return (
        <div>
            <NavBar page="dashboard" />
            <h1 className="dash-title">My Blogs</h1>
            <div className="create-blog">
                <Button
                    type="submit"
                    text="Create Blog"
                    onClick={() => history.push('/createblog')}
                />
            </div>
            <Blogs />
        </div>
    );
}

export default DashBoard;
