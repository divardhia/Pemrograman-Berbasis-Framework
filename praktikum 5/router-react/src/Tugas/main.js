import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import Categories from "./category";
import './style.css';

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1 className="title">Online Shop SPA</h1>
                    <ul className="header">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/categories">Category</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/login">
                                <LoginPage />
                            </Route>
                            <PrivateRoute path="/categories">
                                <Categories />
                            </PrivateRoute>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Main;

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100) // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function AuthButton() {
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
        <p>
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/"))
                }}
            >
                Sign Out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    );
}

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    <div>
                        <AuthButton />
                        {children}
                    </div>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        ></Route>
    );
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    );
}