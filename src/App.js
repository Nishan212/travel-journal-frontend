import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Blog from './pages/Blog/Blog';
import DashBoard from './pages/DashBoard/DashBoard';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/dashboard" component={DashBoard} />
                    <Route exact path="/:id" component={Blog} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
