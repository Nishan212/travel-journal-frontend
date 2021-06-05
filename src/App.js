import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Blog from './pages/Blog/Blog';
import DashBoard from './pages/DashBoard/DashBoard';
import UserContext from './context/context';
import { useState } from 'react';
import CreateBlog from './pages/CreateBlog/CreateBlog';
import Upload from './pages/Upload/Upload';

function App() {
    const [userData, setUserData] = useState({
        isLoggedIn: false,
        name: null,
        email: null,
    });
    return (
        <>
            <Router>
                <Switch>
                    <UserContext.Provider value={{ userData, setUserData }}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/dashboard" component={DashBoard} />
                        <Route
                            exact
                            path="/createblog"
                            component={CreateBlog}
                        />
                        <Route exact path="/upload" component={Upload} />
                        <Route exact path="/blogs/:id" component={Blog} />
                    </UserContext.Provider>
                </Switch>
            </Router>
        </>
    );
}

export default App;
